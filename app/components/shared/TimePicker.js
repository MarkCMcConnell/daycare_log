import React, { Component } from 'react';
import moment from 'moment';
import Kronos from 'react-kronos';

const TimePicker = ({id, time, onChangeDateTime }) => {
  return (
    <div>
      <Kronos
        time={time}
        id={id}
        format={'h:mm a'}
        timeStep={5}
        options={{ format: { hour: 'hh:mm' } }}
        onChangeDateTime={onChangeDateTime}
      />
    </div>
  );
}

export default TimePicker;
