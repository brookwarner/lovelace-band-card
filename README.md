# Band Card for Home Assistant

A Mushroom-styled **dual-thumb** custom Lovelace card for settings that are
naturally a *pair*:

- **band** — a lower/upper hysteresis window (e.g. heater on/off thresholds),
  with a filled span and an optional live marker.
- **daynight** — a day value and a night value for one setting, with the
  currently-active thumb highlighted.
- **time** — auto-detected for `input_datetime` pairs (start/end windows) on a
  24-hour track.

Built with Lit + TypeScript. Themed via Home Assistant / Mushroom CSS variables,
so it inherits your active theme.

> Looking for the aligned entity grid? That's the separate
> [matrix-card](https://github.com/brookwarner/lovelace-matrix-card).

## Installation (HACS)

1. HACS → ⋮ → **Custom repositories** → add this repo's URL, category
   **Dashboard** (Lovelace).
2. Install **Band Card**, then reload your browser.
3. The resource `/hacsfiles/lovelace-band-card/band-card.js` is added
   automatically.

## Configuration

```yaml
type: custom:band-card
mode: band            # band | daynight  (time is auto-detected from input_datetime)
name: Caravan heater band
interaction: drag     # drag | steppers | both   (default: drag)
icon: mdi:caravan     # optional leading icon
color: orange         # optional accent: HA named colour or any CSS colour

# band mode:
lower_entity: input_number.caravan_temp_on_threshold
upper_entity: input_number.caravan_temp_off_threshold
current_entity: sensor.ths_caravan_temperature   # optional live marker

# daynight mode (instead of lower/upper):
day_entity: input_number.bedroom_setpoint_day
night_entity: input_number.bedroom_setpoint_night
is_night_entity: binary_sensor.dewpoint_window_is_night  # 'on'/'below_horizon' = night; sun.sun works

# optional overrides:
unit: "°C"            # else read from the entity
min: 0                # override track scale (number mode)
max: 3
step: 0.1
step_minutes: 15      # time mode snap (default 15)
```

Notes:
- **Time windows**: point `lower_entity`/`upper_entity` at `input_datetime`
  helpers (`has_time`); the card switches to a 24-hour track and writes via
  `input_datetime.set_datetime`. `current_entity: sensor.time` gives a live "now"
  marker. Midnight-wrapping windows (end < start) are not handled.
- **Overlapping thumbs**: when both values coincide, the first drag direction
  picks the thumb (right = upper/night, left = lower/day) so they can be pulled
  apart. For values that often coincide, `interaction: both` adds ± buttons.
- **History**: tap a value label (or the stepper value) to open Home Assistant's
  more-info dialog — the sheet overlay with that entity's history graph. Tapping
  the icon/name opens it for `current_entity` if set, otherwise the lower/day
  entity. Dragging a thumb still just edits the value. Keyboard accessible:
  focus the label and press Enter/Space.

## Read-only mode (e.g. a daylight band)

Set `readonly: true` to drop the thumbs and just display the band + live marker —
useful for values you can't set, like sunrise/sunset. Values can be read from an
entity **attribute** (`*_attribute`), and `value_type: time` puts non-`input_datetime`
sources on the 24-hour axis. Time parsing accepts `HH:MM`, 12-hour `h:mm AM/PM`,
and ISO datetimes (converted to local time-of-day).

```yaml
type: custom:band-card
mode: band
name: Daylight
icon: mdi:weather-sunset-up
color: amber
readonly: true
value_type: time
lower_entity: sun.sun
lower_attribute: next_rising      # ISO timestamp -> local time
upper_entity: sun.sun
upper_attribute: next_setting
current_entity: sensor.time       # live "now" marker (green inside daylight, red outside)
```

## Development

```bash
npm install
npm run build      # -> dist/band-card.js
npm run watch      # rebuild on change
```

## License

MIT
