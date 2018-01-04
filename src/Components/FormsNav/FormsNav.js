import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link
              className={styles.navLink}
              to='/forms/infants'>
              Infants
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              to='/forms/toddlers'>
              Toddlers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FormsNav
