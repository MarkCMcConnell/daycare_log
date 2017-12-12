import React from 'react';
import TimePicker from '../../shared/TimePicker';

export default function Bottles({ index, firstLabel, secondLabel, time, onChange, onChangeDateTime }) {
  return (
    <div>
      <label htmlFor={index}>{firstLabel}</label>
      <TimePicker id={index} time={time}
        onChangeDateTime={onChangeDateTime}
      />
      <label htmlFor={index}>{secondLabel}</label>
      <select id={index} name={index} onChange={onChange}>
        <option value='1 oz.'>1 oz.</option>
        <option value='1.5 oz.'>1.5 oz.</option>
        <option value='2 oz.'>2 oz.</option>
        <option value='2.5 oz.'>2.5 oz.</option>
        <option value='3 oz.'>3 oz.</option>
        <option value='3.5 oz.'>3.5 oz.</option>
        <option value='4 oz.'>4 oz.</option>
        <option value='4.5 oz.'>4.5 oz.</option>
        <option value='5 oz.'>5 oz.</option>
        <option value='5.5 oz.'>5.5 oz.</option>
        <option value='6 oz.'>6 oz.</option>
        <option value='6.5 oz.'>6.5 oz.</option>
        <option value='7 oz.'>7 oz.</option>
        <option value='7.5 oz.'>7.5 oz.</option>
        <option value='8 oz.'>8 oz.</option>
        <option value='8.5 oz.'>8.5 oz.</option>
        <option value='9 oz.'>9 oz.</option>
        <option value='9.5 oz.'>9.5 oz.</option>
        <option value='10 oz.'>10 oz.</option>
      </select>
    </div>
  );
}
