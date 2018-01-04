import React from 'react'

import styles from './Step.css'

const Step = ({ text, onClick }) => {
  return (
    <h4 className={styles.stepBtn} onClick={onClick}>{text}</h4>
  )
}

export default Step
