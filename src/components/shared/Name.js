import React from 'react';

const Name = ({id, onChange}) => {
  return (
    <div>
      <label htmlFor={id}>Name: </label>
      <input type="text" id={id} name={id} onChange={onChange} />
    </div>
  );
}

export default Name;
