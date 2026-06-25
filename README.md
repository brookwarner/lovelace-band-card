# Band Cards for Home Assistant

Two Mushroom-styled custom Lovelace cards that rationalise paired and tabular
entities:

- **`band-card`** — a dual-thumb control for things that are naturally a *pair*:
  - **band** — a lower/upper hysteresis window (e.g. heater on/off thresholds),
    with a filled span and an optional live marker.
  - **daynight** — a day value and a night value for one setting, with the
    currently-active thumb highlighted.
  - **time** — auto-detected for `input_datetime` pairs (start/end windows) on a
    24-hour track.
- **`matrix-card`** — an aligned grid of entities by row × column (e.g. rooms ×
  temperature/humidity/dewpoint). One CSS grid keeps every column lined up, and
  it stays aligned down to phone width.

Built with Lit + TypeScript. Themed via Home Assistant / Mushroom CSS variables,
so the cards inherit your active theme.

## Installation (HACS)

1. HACS → ⋮ → **Custom repositories** → add this repo's URL, category
   **Dashboard** (Lovelace).
2. Install **Band Cards**, then reload your browser.
3. The resource `/hacsfiles/lovelace-band-card/band-cards.js` is added
   automatically.

## `band-card`

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

## `matrix-card`

```yaml
type: custom:matrix-card
title: Climate – temperature & humidity   # optional
columns: [Temp, RH, Dew]
column_icons: [mdi:thermometer, mdi:water-percent, mdi:thermometer-water]
column_colors: [red, blue, cyan]
rows:
  - name: Living room
    icon: mdi:sofa
    entities: [sensor.ths_livingroom_temperature, sensor.ths_livingroom_humidity, sensor.living_room_dewpoint]
  - name: Attic
    icon: mdi:home-roof
    entities: [sensor.attic_fan_1_temperature, sensor.attic_fan_1_humidity, sensor.attic_dewpoint]
```

Each row's `entities` map left-to-right onto the `columns`. Unavailable entities
render as `—` and dim the row.

## Development

```bash
npm install
npm run build      # -> dist/band-cards.js
npm run watch      # rebuild on change
```

## License

MIT
