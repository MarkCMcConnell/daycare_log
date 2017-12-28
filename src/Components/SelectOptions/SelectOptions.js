import React from 'react';

export default function SelectOptions({ options, measurement, name, onChange }) {
  let selectOptions = options.map((option, index) => {
    return (
      <option key={index} value={option + measurement}>{option + measurement}</option>
    );
  });

  return (
    <select name={name} onChange={onChange}>
      {selectOptions}
    </select>
  )
}
