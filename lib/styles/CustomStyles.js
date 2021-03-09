import { Theme } from './Theme.js'

const CustomStyles = `
.simple-bar {
  color: ${Theme.white};
  font-size: 11px;
}
.spotify__icon,
.music__icon,
.browser-track__icons > svg:nth-of-type(1),
.browser-track__icons > svg:nth-of-type(2),
.battery__icon,
.mic__icon,
.sound__icon,
.wifi__icon,
.date__icon,
.time__icon,
.battery__charging-icon-fill,
.battery__caffeinate-icon {
  fill: ${Theme.white};
}
.space--fullscreen .space__inner {
  color: ${Theme.minor};
  background-color: ${Theme.green};
}

.space__inner,
.space-options,
.weather,
.battery,
.mic,
.wifi,
.date,
.music,
.sound,
.time,
.spaces,
.spaces__add {
  border-radius: 6px;
}

.simple-bar--process,
.simple-bar--spaces,
.spaces,
.process,
.simple-bar--data {
  border-radius: 9px;
}

`

export default CustomStyles
