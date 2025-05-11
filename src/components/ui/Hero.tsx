import React from 'react'
import styles from './Hero.module.css';
import Button from './Button';

export interface HeroProps {
    title: string,
    description: string,
    showButton?: boolean
}

function Hero({title, description, showButton=true}: HeroProps) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroElement}></div>
      <div className={styles.heroElement2}></div>
      <div className={styles.heroText}>
        <h1 className={ styles.heroTitle + ' secondary montserrat'}>{title}</h1>
        <h3 className={ styles.heroDescription + ' primary-light inter'}>{description}</h3>
      </div>

      {showButton && <div className={styles.heroButtons}>
        <Button>
        <h3 className={styles.heroButton + ' inter'}>SFOGLIA CATALOGO</h3>
        </Button>
        </div>}
    </section>
  )
}

export default Hero