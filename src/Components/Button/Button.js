import React from 'react'

import styles from './Button.css'

const Button = ({ text, onClick }) => {
  return (
    <div className={styles.gridItem}>
      <button className={styles.btn} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
