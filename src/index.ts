import { BandCard } from "./band-card.js";
import { MatrixCard } from "./matrix-card.js";

const VERSION = "1.0.0";

window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: "band-card",
    name: "Band Card",
    description: "Dual-thumb card for hysteresis bands, day/night value pairs, and time windows.",
    preview: false,
  },
  {
    type: "matrix-card",
    name: "Matrix Card",
    description: "Aligned, mushroom-styled grid of entities by row and column.",
    preview: false,
  }
);

// eslint-disable-next-line no-console
console.info(
  `%c BAND-CARDS %c v${VERSION} `,
  "background:#1D9E75;color:#fff;border-radius:3px 0 0 3px",
  "background:#444;color:#fff;border-radius:0 3px 3px 0"
);

export { BandCard, MatrixCard };
