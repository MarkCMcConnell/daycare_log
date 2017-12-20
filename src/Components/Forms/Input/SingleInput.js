import React from 'react';

const SingleInput = ({label, type, name, onChange}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
}

export default SingleInput;
