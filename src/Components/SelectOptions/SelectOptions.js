import React from 'react';
import Step from '../Step/Step';

import styles from './SelectOptions.css';

const SelectOptions = ({ options, measurement, name, onChange, nextStep, prevStep }) => {
  let selectOptions = options.map((option, index) => {
    return (
      <option key={index} value={option + measurement}>{option + measurement}</option>
    );
  });

  return (
    <div>
      <select name={name} onChange={onChange}>
        {selectOptions}
      </select>
      <Step id='previous' text='Previous' onClick={prevStep} />
      <Step id='next' text='Next' onClick={nextStep} />
    </div>
  );
}

export default SelectOptions;
