import React from 'react';

const SingleInput = ({id, type, label, onChange}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} onChange={onChange} />
    </div>
  );
}

export default SingleInput;
