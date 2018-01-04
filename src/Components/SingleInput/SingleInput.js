import React from 'react'

import styles from './SingleInput.css'

const SingleInput = ({label, type, name, onChange}) => {
  return (
    <div>
      <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      <input className={styles.inputLine} type={type} name={name} onChange={onChange} />
    </div>
  )
}

export default SingleInput
