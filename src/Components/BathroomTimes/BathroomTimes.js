import React from 'react';
import Step from '../Step/Step';

import styles from './BathroomTimes.css';

const BathroomTimes = ({onChange, prevStep, nextStep}) => {
  return (
    <div>
      <span>Bowel movements for the day</span>
      <select name='times' onChange={onChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <select name='type' onChange={onChange}>
        <option value='soft'>Soft</option>
        <option value='hard'>Hard</option>
        <option value='normal'>Normal</option>
      </select>
      <Step id='previous' text='Previous' onClick={prevStep} />
      <Step id='next' text='Next' onClick={nextStep} />
    </div>
  );
}

export default BathroomTimes;
