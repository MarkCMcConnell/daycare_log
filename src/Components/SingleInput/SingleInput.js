import React from 'react';
import Step from '../Step/Step';

import styles from './SingleInput.css';

const SingleInput = ({label, type, name, onChange, nextStep, prevStep}) => {
  return (
    <div>
      <label className={styles.inputLabel} htmlFor={name}>{label}</label>
      <input className={styles.inputLine} type={type} name={name} onChange={onChange} />
      <Step id='previous' text='Previous' onClick={prevStep} />
      <Step id='next' text='Next' onClick={nextStep} />
    </div>
  );
}

export default SingleInput;
