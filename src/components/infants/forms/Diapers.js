import React, { Component } from 'react';
import TimePicker from '../../shared/TimePicker';
import moment from 'moment';

export default function Diapers({ firstLabel, time, index, onChange, onChangeDateTime }) {
  return (
    <div>
      <label htmlFor={index}>{firstLabel}</label>
      <TimePicker id={index} time={time}
        onChangeDateTime={onChangeDateTime}
      />
      <select name='type' onChange={onChange}>
        <option value=''></option>
        <option value='wet'>Wet</option>
        <option value='dirty'>Dirty</option>
      </select>
    </div>
  );
}
