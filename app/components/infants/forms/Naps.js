import React from 'react';
import TimePicker from '../.././shared/TimePicker';

export default function Naps({ index, firstLabel, secondLabel, time, onChange, onChangeDateTime }) {
  return (
    <div>
      <label htmlFor={index}>{firstLabel}</label>
      <TimePicker id={index} time={time}
        onChangeDateTime={onChangeDateTime}
      />
      <label htmlFor={index}>{secondLabel}</label>
      <select id={index} name={index} onChange={onChange}>
        <option value='30 minutes'>30 minutes</option>
        <option value='45 minutes'>45 minutes</option>
        <option value='1 hour'>1 hour</option>
        <option value='1.25 hours'>1.25 hours</option>
        <option value='1.5 hours'>1.5 hours</option>
        <option value='1.75 hours'>1.75 hours</option>
        <option value='2 hours'>2 hours</option>
        <option value='2.25 hours'>2.25 hours</option>
        <option value='2.5 hours'>2.5 hours</option>
        <option value='2.75 hours'>2.75 hours</option>
        <option value='3 hours'>3 hours</option>
      </select>
    </div>
  );
}
