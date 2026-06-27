import { LitElement, html, css, unsafeCSS, nothing, type TemplateResult, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  type HomeAssistant,
  resolveColor,
  fireMoreInfo,
  SUN_COLOR,
  MOON_COLOR,
} from "./ha.js";

type Mode = "band" | "daynight";
type Interaction = "drag" | "steppers" | "both";

interface BandCardConfig {
  type: string;
  mode: Mode;
  name?: string;
  interaction?: Interaction;
  lower_entity?: string;
  upper_entity?: string;
  day_entity?: string;
  night_entity?: string;
  is_night_entity?: string;
  current_entity?: string;
  unit?: string;
  icon?: string;
  icon_color?: string;
  color?: string;
  step_minutes?: number;
  min?: number;
  max?: number;
  step?: number;
  readonly?: boolean;
  value_type?: "time" | "number";
  lower_attribute?: string;
  upper_attribute?: string;
  day_attribute?: string;
  night_attribute?: string;
  current_attribute?: string;
}

interface Scale {
  min: number;
  max: number;
  step: number;
}

const DEFAULT_ICON: Record<Mode, string> = {
  band: "mdi:arrow-expand-horizontal",
  daynight: "mdi:theme-light-dark",
};

@customElement("band-card")
export class BandCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: BandCardConfig;

  private _entA = "";
  private _entB = "";
  private _attrA?: string;
  private _attrB?: string;
  private _readonly = false;
  private _interaction: Interaction = "drag";
  private _dragging: string | null = null;
  private _tipTimer?: number;
  @state() private _tipShow = false;

  public setConfig(config: BandCardConfig): void {
    if (!config || !config.mode) {
      throw new Error("band-card: 'mode' is required (band | daynight)");
    }
    if (config.mode === "band") {
      if (!config.lower_entity || !config.upper_entity) {
        throw new Error("band-card: band mode needs lower_entity and upper_entity");
      }
    } else if (config.mode === "daynight") {
      if (!config.day_entity || !config.night_entity) {
        throw new Error("band-card: daynight mode needs day_entity and night_entity");
      }
    } else {
      throw new Error(`band-card: unknown mode '${config.mode}'`);
    }
    this._config = config;
    this._readonly = !!config.readonly;
    this._interaction = config.interaction || "drag";
    this._entA = config.mode === "band" ? config.lower_entity! : config.day_entity!;
    this._entB = config.mode === "band" ? config.upper_entity! : config.night_entity!;
    this._attrA = config.mode === "band" ? config.lower_attribute : config.day_attribute;
    this._attrB = config.mode === "band" ? config.upper_attribute : config.night_attribute;
  }

  public getCardSize(): number {
    return this._interaction === "steppers" ? 2 : 3;
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    // Don't re-render mid-drag (we update the dragged thumb imperatively).
    if (this._dragging && !changed.has("_config") && !changed.has("_tipShow")) return false;
    return true;
  }

  // ---- value/scale helpers -------------------------------------------------

  private _isTime(): boolean {
    return this._config!.value_type === "time" || this._entA.startsWith("input_datetime.");
  }

  private _parseTime(str: string): number {
    const m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(str);
    return m ? Number(m[1]) * 60 + Number(m[2]) : NaN;
  }

  // Flexible time parse: HH:MM[:SS], 12-hour "h:mm AM/PM", or ISO datetime
  // (-> local minutes of day). Used for read-only sources like sun times.
  private _parseFlexibleTime(raw: unknown): number {
    if (typeof raw === "number") return raw;
    if (typeof raw !== "string") return NaN;
    const t = raw.trim();
    const m = /^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i.exec(t);
    if (m) {
      let h = Number(m[1]);
      const ap = m[3]?.toUpperCase();
      if (ap === "PM" && h < 12) h += 12;
      if (ap === "AM" && h === 12) h = 0;
      return h * 60 + Number(m[2]);
    }
    const d = new Date(t);
    return isNaN(d.getTime()) ? NaN : d.getHours() * 60 + d.getMinutes();
  }

  // Read a value, optionally from an entity attribute.
  private _value(entityId: string, attr?: string): number {
    const s = this.hass?.states[entityId];
    if (!s) return NaN;
    const raw = attr ? s.attributes[attr] : s.state;
    if (raw === undefined || raw === null) return NaN;
    if (this._isTime()) return this._parseFlexibleTime(raw);
    return Number(raw);
  }

  private _attr(entityId: string, name: string, fallback: number): number {
    const s = this.hass?.states[entityId];
    const v = s?.attributes?.[name];
    return v === undefined || v === null ? fallback : Number(v);
  }

  private _scale(): Scale {
    const c = this._config!;
    if (this._isTime()) {
      return { min: 0, max: 1440, step: Number(c.step_minutes ?? 15) };
    }
    const minA = this._attr(this._entA, "min", 0);
    const minB = this._attr(this._entB, "min", 0);
    const maxA = this._attr(this._entA, "max", 100);
    const maxB = this._attr(this._entB, "max", 100);
    const stepA = this._attr(this._entA, "step", 1);
    const stepB = this._attr(this._entB, "step", 1);
    return {
      min: c.min != null ? Number(c.min) : Math.min(minA, minB),
      max: c.max != null ? Number(c.max) : Math.max(maxA, maxB),
      step: c.step != null ? Number(c.step) : Math.min(stepA, stepB),
    };
  }

  private _val(entityId: string): number {
    const s = this.hass?.states[entityId];
    if (!s) return NaN;
    if (typeof s.state === "string" && /^\d{1,2}:\d{2}(:\d{2})?$/.test(s.state)) {
      return this._parseTime(s.state);
    }
    return Number(s.state);
  }

  private _unit(): string {
    if (this._isTime()) return "";
    if (this._config!.unit) return this._config!.unit!;
    const s = this.hass?.states[this._entA];
    return (s?.attributes?.unit_of_measurement as string) || "";
  }

  private _frac(value: number, scale: Scale): number {
    if (scale.max === scale.min) return 0;
    return Math.max(0, Math.min(1, (value - scale.min) / (scale.max - scale.min)));
  }

  private _snap(value: number, scale: Scale): number {
    const stepped = Math.round((value - scale.min) / scale.step) * scale.step + scale.min;
    const clamped = Math.max(scale.min, Math.min(scale.max, stepped));
    return Number(clamped.toFixed(4));
  }

  private _fmt(value: number): string {
    if (!isFinite(value)) return "—";
    if (this._isTime()) {
      const m = ((Math.round(value) % 1440) + 1440) % 1440;
      return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
    }
    const dp = this._scale().step < 1 ? 1 : 0;
    return value.toFixed(dp);
  }

  private _accent(): string {
    return resolveColor(this._config!.color || this._config!.icon_color);
  }

  private _nightActive(): boolean | null {
    if (this._config!.mode !== "daynight") return null;
    const nEnt = this._config!.is_night_entity || "binary_sensor.dewpoint_window_is_night";
    const ns = this.hass?.states[nEnt];
    if (!ns) return null;
    return ns.state === "on" || ns.state === "below_horizon";
  }

  private _setValue(entityId: string, value: number): void {
    if (!entityId || !isFinite(value)) {
      console.error("band-card: refusing to set", entityId, "to non-finite value", value);
      return;
    }
    if (entityId.startsWith("input_datetime.")) {
      const m = ((Math.round(value) % 1440) + 1440) % 1440;
      const time = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}:00`;
      this.hass!.callService("input_datetime", "set_datetime", { entity_id: entityId, time }).catch(
        (err) => console.error("band-card: set_datetime FAILED", entityId, time, err)
      );
      return;
    }
    this.hass!.callService("input_number", "set_value", { entity_id: entityId, value }).catch((err) =>
      console.error("band-card: set_value FAILED", entityId, value, err)
    );
  }

  private _entFor(which: string): string {
    return which === "a" ? this._entA : this._entB;
  }

  private _clampOrder(which: string, v: number): number {
    if (this._config!.mode !== "band") return v;
    if (which === "a") return Math.min(v, this._val(this._entB));
    return Math.max(v, this._val(this._entA));
  }

  // ---- editing -------------------------------------------------------------

  private _onStep(which: string, dir: number): void {
    const scale = this._scale();
    const v = this._clampOrder(which, this._snap(this._val(this._entFor(which)) + dir * scale.step, scale));
    this._setValue(this._entFor(which), v);
  }

  private get _track(): HTMLElement | null {
    return this.renderRoot.querySelector(".track");
  }

  private _pointerValue(ev: PointerEvent): number {
    const scale = this._scale();
    const rect = this._track!.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
    return this._snap(scale.min + frac * (scale.max - scale.min), scale);
  }

  private _onDown(e: PointerEvent): void {
    e.preventDefault();
    const thumb = e.currentTarget as HTMLElement;
    const scale = this._scale();
    const overlapping = Math.abs(this._val(this._entA) - this._val(this._entB)) <= scale.step + 1e-9;
    const startX = e.clientX;
    const pointerId = e.pointerId;
    const stateObj = { which: thumb.dataset.which as string, resolved: !overlapping };
    this._dragging = stateObj.which;
    // setPointerCapture is best-effort: on mobile Safari it can silently no-op
    // for touch pointers, so we never rely on it — the move/up listeners live on
    // window (below) and track the drag whether or not capture is granted.
    try {
      thumb.setPointerCapture(pointerId);
    } catch {
      /* ignore — window listeners handle tracking */
    }
    thumb.style.zIndex = "4";

    const move = (ev: PointerEvent) => {
      if (ev.pointerId !== pointerId) return;
      ev.preventDefault();
      if (!stateObj.resolved) {
        const dx = ev.clientX - startX;
        if (Math.abs(dx) < 3) return;
        stateObj.which = dx > 0 ? "b" : "a";
        stateObj.resolved = true;
        this._dragging = stateObj.which;
        const active = this.renderRoot.querySelector(`.thumb-${stateObj.which}`) as HTMLElement | null;
        if (active) active.style.zIndex = "5";
      }
      this._onMove(stateObj.which, ev);
    };
    const up = (ev: PointerEvent) => {
      if (ev.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      try {
        thumb.releasePointerCapture(pointerId);
      } catch {
        /* capture may not have been granted */
      }
      this.renderRoot.querySelectorAll(".thumb").forEach((t) => ((t as HTMLElement).style.zIndex = ""));
      this._dragging = null;
      if (stateObj.resolved) {
        this._setValue(this._entFor(stateObj.which), this._clampOrder(stateObj.which, this._pointerValue(ev)));
      } else {
        this.requestUpdate();
      }
    };
    // Listen on window (not the thumb): a touch drag quickly leaves the 26px
    // thumb, and without reliable pointer capture the thumb would stop getting
    // events. window always sees them, so the slider keeps tracking the finger.
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  private _onMove(which: string, ev: PointerEvent): void {
    const v = this._clampOrder(which, this._pointerValue(ev));
    const scale = this._scale();
    const f = this._frac(v, scale) * 100;
    const thumb = this.renderRoot.querySelector(`.thumb-${which}`) as HTMLElement | null;
    const lbl = this.renderRoot.querySelector(`.lbl-${which}`) as HTMLElement | null;
    const unit = this._unit();
    if (thumb) thumb.style.left = `${f}%`;
    if (lbl) {
      lbl.style.left = `${f}%`;
      if (this._config!.mode === "daynight") {
        const icon = which === "a" ? "mdi:weather-sunny" : "mdi:weather-night";
        const color = which === "a" ? SUN_COLOR : MOON_COLOR;
        lbl.innerHTML = `<ha-icon icon="${icon}" style="--mdc-icon-size:13px;color:${color}"></ha-icon><span>${this._fmt(v)}${unit}</span>`;
      } else {
        lbl.innerHTML = `<span>${this._fmt(v)}${unit}</span>`;
      }
    }
    if (this._config!.mode === "band") {
      const other = this._frac(this._val(this._entFor(which === "a" ? "b" : "a")), scale) * 100;
      const lo = Math.min(f, other);
      const hi = Math.max(f, other);
      const fill = this.renderRoot.querySelector(".fill") as HTMLElement | null;
      if (fill) {
        fill.style.left = `${lo}%`;
        fill.style.width = `${hi - lo}%`;
      }
    }
  }

  private _toggleTip(): void {
    this._tipShow = true;
    clearTimeout(this._tipTimer);
    this._tipTimer = window.setTimeout(() => (this._tipShow = false), 2500);
  }

  // ---- more-info -----------------------------------------------------------

  private _moreInfo(entityId?: string): void {
    if (entityId) fireMoreInfo(this, entityId);
  }

  private _onKey(ev: KeyboardEvent, entityId?: string): void {
    if (entityId && (ev.key === "Enter" || ev.key === " ")) {
      ev.preventDefault();
      this._moreInfo(entityId);
    }
  }

  // ---- render --------------------------------------------------------------

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    const c = this._config;
    const sA = this.hass.states[this._entA];
    const sB = this.hass.states[this._entB];
    const icon = c.icon || (this._isTime() ? "mdi:clock-outline" : DEFAULT_ICON[c.mode]);
    const accent = this._accent();

    const missing = !sA || !sB || sA.state === "unavailable" || sB.state === "unavailable";

    const scale = this._scale();
    const valA = this._value(this._entA, this._attrA);
    const valB = this._value(this._entB, this._attrB);
    const unit = this._unit();
    const nightActive = this._nightActive();
    const showTrack = this._readonly || this._interaction !== "steppers";
    const showSteppers = !this._readonly && this._interaction !== "drag";

    const headerEntity = c.current_entity || this._entA;

    return html`
      <ha-card style="--accent:${accent}">
        <div
          class="row clickable"
          role="button"
          tabindex="0"
          @click=${() => this._moreInfo(headerEntity)}
          @keydown=${(ev: KeyboardEvent) => this._onKey(ev, headerEntity)}
        >
          <div class="shape"><ha-icon .icon=${icon}></ha-icon></div>
          <div class="text">
            <span class="primary">${c.name || ""}</span>
            ${missing ? nothing : this._renderSecondary(nightActive, unit)}
          </div>
        </div>
        ${missing
          ? html`<div class="unavailable">Entities unavailable</div>`
          : html`
              ${showTrack ? this._renderTrack(scale, valA, valB, unit, nightActive) : nothing}
              ${showSteppers ? this._renderSteppers(valA, valB, unit) : nothing}
            `}
      </ha-card>
    `;
  }

  private _renderSecondary(nightActive: boolean | null, unit: string): TemplateResult | typeof nothing {
    const c = this._config!;
    if (c.mode === "daynight" && nightActive !== null) {
      return nightActive
        ? html`<span class="secondary"><ha-icon icon="mdi:weather-night" style="color:${MOON_COLOR}"></ha-icon><span>Night active</span></span>`
        : html`<span class="secondary"><ha-icon icon="mdi:weather-sunny" style="color:${SUN_COLOR}"></ha-icon><span>Day active</span></span>`;
    }
    if (c.current_entity) {
      const cur = this._value(c.current_entity, c.current_attribute);
      return html`<span class="secondary">${isFinite(cur) ? `Now ${this._fmt(cur)}${unit}` : ""}</span>`;
    }
    return nothing;
  }

  private _renderTrack(
    scale: Scale,
    valA: number,
    valB: number,
    unit: string,
    nightActive: boolean | null
  ): TemplateResult {
    const c = this._config!;
    const fA = this._frac(valA, scale) * 100;
    const fB = this._frac(valB, scale) * 100;
    const band = c.mode === "band";
    const aActive = nightActive === false;
    const bActive = nightActive === true;

    const labelA = band
      ? html`<span>${this._fmt(valA)}${unit}</span>`
      : html`<ha-icon class="sun" icon="mdi:weather-sunny"></ha-icon><span>${this._fmt(valA)}${unit}</span>`;
    const labelB = band
      ? html`<span>${this._fmt(valB)}${unit}</span>`
      : html`<ha-icon class="moon" icon="mdi:weather-night"></ha-icon><span>${this._fmt(valB)}${unit}</span>`;

    return html`
      <div class="track-wrap">
        <div class="track">
          <div class="rail"></div>
          ${band
            ? html`<div class="fill" style="left:${Math.min(fA, fB)}%;width:${Math.abs(fB - fA)}%"></div>`
            : nothing}
          ${this._renderMarker(scale, band ? Math.min(valA, valB) : null, band ? Math.max(valA, valB) : null)}
          <div
            class="lbl lbl-a clickable ${aActive ? "active" : ""}"
            style="left:${fA}%"
            role="button"
            tabindex="0"
            @click=${() => this._moreInfo(this._entA)}
            @keydown=${(ev: KeyboardEvent) => this._onKey(ev, this._entA)}
          >${labelA}</div>
          <div
            class="lbl lbl-b clickable ${bActive ? "active" : ""}"
            style="left:${fB}%"
            role="button"
            tabindex="0"
            @click=${() => this._moreInfo(this._entB)}
            @keydown=${(ev: KeyboardEvent) => this._onKey(ev, this._entB)}
          >${labelB}</div>
          ${this._readonly
            ? nothing
            : html`
                <div
                  class="thumb thumb-a ${bActive ? "dim" : ""} ${aActive ? "ring" : ""}"
                  data-which="a"
                  style="left:${fA}%"
                  @pointerdown=${this._onDown}
                ></div>
                <div
                  class="thumb thumb-b ${aActive ? "dim" : ""} ${bActive ? "ring" : ""}"
                  data-which="b"
                  style="left:${fB}%"
                  @pointerdown=${this._onDown}
                ></div>
              `}
        </div>
      </div>
    `;
  }

  private _renderMarker(scale: Scale, lo: number | null, hi: number | null): TemplateResult | typeof nothing {
    const c = this._config!;
    if (!c.current_entity) return nothing;
    const cur = this._value(c.current_entity, c.current_attribute);
    if (!isFinite(cur)) return nothing;
    let cls = "";
    if (lo !== null && hi !== null) cls = cur >= lo && cur <= hi ? "inside" : "outside";
    const s = this.hass!.states[c.current_entity];
    const fname = (s?.attributes?.friendly_name as string) || "Current";
    return html`
      <div
        class="marker-wrap ${cls} ${this._tipShow ? "show" : ""}"
        style="left:${this._frac(cur, scale) * 100}%"
        @click=${this._toggleTip}
      >
        <div class="marker-tip">${fname}: ${this._fmt(cur)}${this._unit()}</div>
        <div class="marker-line"></div>
        <div class="marker-dot"></div>
      </div>
    `;
  }

  private _renderSteppers(valA: number, valB: number, unit: string): TemplateResult {
    const c = this._config!;
    const dn = c.mode === "daynight";
    const cell = (which: string, val: number, icon?: string, color?: string) => html`
      <div class="stepper">
        <button @click=${() => this._onStep(which, -1)}><ha-icon icon="mdi:minus"></ha-icon></button>
        <span
          class="v clickable"
          role="button"
          tabindex="0"
          @click=${() => this._moreInfo(this._entFor(which))}
          @keydown=${(ev: KeyboardEvent) => this._onKey(ev, this._entFor(which))}
          >${icon ? html`<ha-icon icon=${icon} style="color:${color}"></ha-icon>` : nothing}<span
            >${this._fmt(val)}${unit}</span
          ></span
        >
        <button @click=${() => this._onStep(which, 1)}><ha-icon icon="mdi:plus"></ha-icon></button>
      </div>
    `;
    return html`
      <div class="steppers">
        ${cell("a", valA, dn ? "mdi:weather-sunny" : undefined, SUN_COLOR)}
        ${cell("b", valB, dn ? "mdi:weather-night" : undefined, MOON_COLOR)}
      </div>
    `;
  }

  static styles = css`
    ha-card { padding: var(--mush-spacing, 12px); }
    .row { display: flex; align-items: center; gap: 12px; }
    .clickable { cursor: pointer; }
    .row.clickable { border-radius: 12px; outline-offset: 2px; }
    .row.clickable:focus-visible,
    .lbl.clickable:focus-visible,
    .stepper .v.clickable:focus-visible { outline: 2px solid var(--accent); }
    .lbl.clickable { border-radius: 6px; }
    .shape {
      flex: 0 0 auto;
      width: var(--mush-icon-size, 42px);
      height: var(--mush-icon-size, 42px);
      border-radius: var(--mush-icon-border-radius, 12px);
      display: flex; align-items: center; justify-content: center;
      background-color: color-mix(in srgb, var(--accent) 20%, transparent);
      color: var(--accent);
      --mdc-icon-size: 22px;
    }
    .text { display: flex; flex-direction: column; min-width: 0; flex: 1; }
    .primary {
      color: var(--mush-card-primary-color, var(--primary-text-color));
      font-weight: var(--mush-card-primary-font-weight, 500);
      font-size: var(--mush-card-primary-font-size, 14px);
      line-height: var(--mush-card-primary-line-height, 1.4);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .secondary {
      color: var(--mush-card-secondary-color, var(--secondary-text-color));
      font-size: var(--mush-card-secondary-font-size, 12px);
      line-height: var(--mush-card-secondary-line-height, 1.4);
      display: flex; align-items: center; gap: 4px;
    }
    .secondary ha-icon { --mdc-icon-size: 14px; }
    .track-wrap { padding: 26px 12px 4px; }
    .track { position: relative; height: 20px; }
    .rail { position: absolute; top: 7px; left: 0; right: 0; height: 6px; border-radius: 3px; background: var(--divider-color, #cfcfcf); }
    .fill { position: absolute; top: 7px; height: 6px; border-radius: 3px; background: var(--accent); }
    .marker-wrap { position: absolute; top: -3px; width: 20px; height: 26px; margin-left: -10px; cursor: pointer; }
    .marker-line { position: absolute; left: 50%; top: 3px; width: 3px; height: 20px; margin-left: -1.5px; background: var(--secondary-text-color, #888); border-radius: 2px; }
    .marker-dot { position: absolute; left: 50%; top: 0; width: 7px; height: 7px; margin-left: -3.5px; border-radius: 50%; background: var(--secondary-text-color, #888); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
    .marker-wrap.inside .marker-line, .marker-wrap.inside .marker-dot { background: var(--success-color, #43a047); }
    .marker-wrap.outside .marker-line, .marker-wrap.outside .marker-dot { background: var(--error-color, #e53935); }
    .marker-tip {
      position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
      background: var(--secondary-background-color, #2c2c2c); color: var(--primary-text-color);
      font-size: 11px; line-height: 1.3; padding: 4px 7px; border-radius: 6px; white-space: nowrap;
      opacity: 0; transition: opacity 0.12s; pointer-events: none; z-index: 2;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }
    .marker-wrap:hover .marker-tip, .marker-wrap.show .marker-tip { opacity: 1; }
    .thumb {
      position: absolute; top: -3px; width: 26px; height: 26px; margin-left: -13px;
      border-radius: 50%; background: var(--accent); cursor: grab; touch-action: none;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); border: 2px solid var(--card-background-color, #fff);
      transition: opacity 0.15s;
    }
    .thumb:active { cursor: grabbing; }
    .thumb.dim { opacity: 0.3; }
    .thumb.ring { box-shadow: 0 0 0 2px var(--card-background-color, #fff), 0 0 0 4px var(--accent), 0 1px 4px rgba(0, 0, 0, 0.4); }
    .lbl {
      position: absolute; top: -24px; transform: translateX(-50%); font-size: 12px;
      color: var(--secondary-text-color, #888); white-space: nowrap; display: flex; align-items: center; gap: 2px;
    }
    .lbl ha-icon { --mdc-icon-size: 13px; }
    .lbl ha-icon.sun { color: ${unsafeCSS(SUN_COLOR)}; }
    .lbl ha-icon.moon { color: ${unsafeCSS(MOON_COLOR)}; }
    .lbl.active { color: var(--accent); font-weight: 500; }
    .steppers { display: flex; gap: 10px; margin-top: 14px; }
    .stepper { flex: 1; display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--divider-color, #cfcfcf); border-radius: 12px; padding: 5px 8px; }
    .stepper .v { font-size: 14px; color: var(--primary-text-color); display: flex; align-items: center; gap: 3px; }
    .stepper .v ha-icon { --mdc-icon-size: 14px; }
    .stepper button {
      width: 30px; height: 30px; border: none; border-radius: 8px; cursor: pointer;
      background: var(--secondary-background-color, #f1f1f1); color: var(--primary-text-color);
      display: flex; align-items: center; justify-content: center; --mdc-icon-size: 18px;
    }
    .stepper button:active { transform: scale(0.94); }
    .unavailable { color: var(--secondary-text-color, #888); font-size: 13px; padding: 6px 0; }
  `;
}
