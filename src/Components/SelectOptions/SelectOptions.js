import React from 'react'

import styles from './SelectOptions.css'

const SelectOptions = ({ options, measurement, name, onChange }) => {
  let selectOptions = options.map((option, index) => {
    return (
      <option
        className={styles.optionText}
        key={index}
        value={option.toLowerCase()}
      >
        {option}
      </option>
    )
  })

  return (
    <select className={styles.selectBox} name={name} onChange={onChange}>
      {selectOptions}
    </select>
  )
}

export default SelectOptions
