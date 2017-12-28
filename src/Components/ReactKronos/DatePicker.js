import React from 'react';
import Kronos from 'react-kronos';

const DatePicker = ({id, label, date, onChangeDateTime}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Kronos
        inputId={id}
        format={'MM-DD-YYYY'}
        date={date}
        onChangeDateTime={onChangeDateTime}
      />
    </div>
  );
}

export default DatePicker;
