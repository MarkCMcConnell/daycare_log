import React from 'react'

import styles from './SingleInput.css'

const SingleInput = ({label, type, name, onChange}) => {
  return (
    <div className={styles.gridItem}>
      <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      <input
        className={styles.inputField}
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default SingleInput
