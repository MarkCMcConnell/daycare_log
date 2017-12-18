import React from 'react';

const BathroomTimes = ({bathroom, onChange}) => {
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
    </div>
  );
}

export default BathroomTimes;
