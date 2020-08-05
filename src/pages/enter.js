import React from 'react'
import imgSwitch from '../images/switch.png'
import styles from './enter.module.css'

export default function Enter({ onSwitchClick }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.switchImg}
        src={imgSwitch}
        onClick={onSwitchClick}
      />
      <p>Acenda a luz</p>
    </div>
  )
}
