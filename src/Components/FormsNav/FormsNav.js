import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

import styles from './FormsNav.css'

const FormsNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.borderTop} />
      <div className={styles.topThin} />
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleText}>Daycare</h1>
          <h1 className={styles.titleText}>Daily Log</h1>
        </div>
      </header>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to='/forms/infants'>
              <Button text='Infants' />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/forms/toddlers'>
              <Button text='Toddlers' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FormsNav
