import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FormsNav.css';

const FormsNav = () => {

  return(
    <div className={styles.container}>
      <div className={styles.borderTop}></div>
      <div className={styles.topThin}></div>
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleText}>Daycare</h1>
          <h1 className={styles.titleText}>Daily Log</h1>
        </div>
      </header>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <h3>Infants</h3>
            <Link
              className={styles.navLink}
              to='/forms/infants'>
              &#8592;
            </Link>
          </li>
          <li className={styles.navItem}>
            <h3>Toddlers</h3>
            <Link
              className={styles.navLink}
              to='/forms/toddlers'>
              &#8594;
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FormsNav;
