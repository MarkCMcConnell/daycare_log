import React from 'react';
import { Link } from 'react-router-dom';

// Adding in styles for the component
import styles from './style.css';

const FormsIndex = () => {

  return(
    <div className={styles.center}>
      <h1>Hello, Abi!</h1>
      <h3>Choose a form</h3>
      <div>
        <Link to='/forms/infants'>
          <button className={styles.btn}>Infants</button>
        </Link>
        <Link to='/forms/toddlers'>
          <button className={styles.btn}>Toddlers</button>
        </Link>
      </div>
    </div>
  );
}

export default FormsIndex;
