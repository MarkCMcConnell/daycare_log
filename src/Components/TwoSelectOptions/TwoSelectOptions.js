import React from 'react'

import styles from './TwoSelectOptions.css'

const TwoSelectOptions = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <h2>Bowel movements</h2>
      <div className={styles.gridContainer2x1}>
        <select className={styles.selectBox} name='times' onChange={onChange}>
          <option className={styles.optionText} value='1'>1</option>
          <option className={styles.optionText} value='2'>2</option>
          <option className={styles.optionText} value='3'>3</option>
          <option className={styles.optionText} value='4'>4</option>
        </select>
        <select className={styles.selectBox} name='type' onChange={onChange}>
          <option className={styles.optionText} value='soft'>Soft</option>
          <option className={styles.optionText} value='hard'>Hard</option>
          <option className={styles.optionText} value='normal'>Normal</option>
        </select>
      </div>
    </div>
  )
}

export default TwoSelectOptions
