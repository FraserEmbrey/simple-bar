import { MicOnIcon, MicOffIcon } from './Icons.jsx'
import { run } from 'uebersicht'

import { clickEffect, notification, refreshData } from '../utils.js'
import { getSettings } from '../settings.js'

const toggleMic = (volume) => {
  if (volume === '0') {
    run("osascript -e 'set volume input volume 100'").then(refreshData)
    notification('Enabling microphone...')
  } else {
    run("osascript -e 'set volume input volume 0'").then(refreshData)
    notification('Disabling microphone...')
  }
}

const Mic = ({ output }) => {
  const settings = getSettings()
  const { micWidget } = settings.widgets
  if (!micWidget || !output) return null

  const { volume } = output
  if (volume === 'missing value') return null

  const Icon = volume !== '0' ? MicOnIcon : MicOffIcon
  const displayValue = volume !== '0' ? <span style={{ marginRight: `4px` }}>{volume + '%'}</span> : ''

  const onClick = (e) => {
    clickEffect(e)
    toggleMic(volume)
  }

  return (
    <div className="mic" onClick={onClick}>
      <Icon className="mic__icon" />
      {displayValue}
    </div>
  )
}

export default Mic
