import React from 'react'

import styles from './SelectOptions.css'

const SelectOptions = ({ options, name, onChange }) => {
  let selectOptions = options.map((option, index) => {
    /* Set default value as an empty string choice */
    if (option === '') {
      return (
        <option
          className={styles.optionText}
          key={index}
          value={option}
          defaultValue
        >
          {option}
        </option>
      )
    } else {
      return (
        <option
          className={styles.optionText}
          key={index}
          value={option}
        >
          {option}
        </option>
      )
    }
  })

  return (
    <select className={styles.selectBox} name={name} onChange={onChange}>
      {selectOptions}
    </select>
  )
}

export default SelectOptions
