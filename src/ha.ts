// Minimal Home Assistant frontend typings used by the cards.

export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: Record<string, unknown>): void;
  getCardSize(): number;
}

declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description?: string; preview?: boolean }>;
  }
}

// HA / mushroom named colours -> concrete hex. Concrete values (not
// rgb(var(--rgb-x))) so thumbs/fill always render regardless of theme.
export const PALETTE: Record<string, string> = {
  red: "#f44336", pink: "#e91e63", purple: "#9c27b0", "deep-purple": "#673ab7",
  indigo: "#3f51b5", blue: "#2196f3", "light-blue": "#03a9f4", cyan: "#00bcd4",
  teal: "#009688", green: "#4caf50", "light-green": "#8bc34a", lime: "#cddc39",
  yellow: "#ffeb3b", amber: "#ffc107", orange: "#ff9800", "deep-orange": "#ff5722",
  brown: "#795548", grey: "#9e9e9e", "blue-grey": "#607d8b",
};

export const SUN_COLOR = "#ffa726";
export const MOON_COLOR = "#7986cb";

export function resolveColor(c?: string): string {
  if (!c) return "var(--primary-color, #2196f3)";
  return PALETTE[c] || c;
}
