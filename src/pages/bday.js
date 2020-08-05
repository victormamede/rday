import React, { useEffect, useState } from 'react'
import cake from '../images/cake.png'
import ricardo from '../images/ricardo-dancing.gif'
import styles from './bday.module.css'

export default function BDay() {
  const [show, showHandler] = useState(false)

  useEffect(() => {
    setTimeout(() => showHandler(true), 8000)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>PARABÉNS RYANZINHO</h1>
        <p style={{ color: 'red' }}>
          você é o melhor de todos e eu me sinto muito honrado de ser seu amigo
        </p>
        <p>seu lindo</p>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.cakeImg}>
          <img src={cake} style={{ width: '100%' }} alt='cake' />
        </div>
        <div className={styles.ricardo}>
          <img src={ricardo} alt='ricardo' />
        </div>
      </div>
      <iframe
        title='song'
        className={styles.audioPlayer}
        allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/27062843&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
      ></iframe>
      <footer>
        <small style={{ width: '20%', color: 'gray' }}>
          eu queria ter colocado um monte de coisa nesse site só que o
          computador decidiu simplesmente não funcionar e eu to muito puto
        </small>
      </footer>
      {show ? <></> : <div className={styles.overlay}></div>}
    </div>
  )
}
