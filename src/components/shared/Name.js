import React from 'react';

const Name = ({name}) => {
  return (
    <div>
      <label htmlFor={name}>Name </label>
      <input type="text" id={name} name={name} value={name} />
    </div>
  );
}

export default Name;
