import React from 'react'

import styles from './SelectOptions.css'

const SelectOptions = ({ options, measurement, name, onChange }) => {
  let selectOptions = options.map((option, index) => {
    return (
      <option className={styles.optionTxt} key={index} value={option + measurement}>{option + measurement}</option>
    )
  })

  return (
    <select className={styles.sizing} name={name} onChange={onChange}>
      {selectOptions}
    </select>
  )
}

export default SelectOptions
