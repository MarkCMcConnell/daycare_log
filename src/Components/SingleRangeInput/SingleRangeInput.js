import React from 'react'

import styles from './SingleRangeInput.css'

const SingleRangeInput = ({ id, name, label, min, max, step, defaultValue, onChange }) => {
  return (
    <div className={styles.sliderContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.slider}
        id={id}
        name={name}
        type='range'
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}

export default SingleRangeInput
