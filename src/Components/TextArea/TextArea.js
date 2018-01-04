import React from 'react'
import Step from '../Step/Step'

import styles from './TextArea.css'

const TextArea = ({label, name, rows, cols, onChange, prevStep, nextStep}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        rows={rows}
        cols={cols}
        onChange={onChange}
      />
      <Step id='previous' text='Previous' onClick={prevStep} />
      <Step id='next' text='Next' onClick={nextStep} />
    </div>
  )
}

export default TextArea
