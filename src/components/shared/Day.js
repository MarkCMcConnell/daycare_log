import React from 'react';

const Day = ({id, onChange}) => {
  return (
    <div>
      <label htmlFor={id}>My day was... </label>
      <input type="text" id={id} name={id} onChange={onChange} />
    </div>
  );
}

export default Day;
