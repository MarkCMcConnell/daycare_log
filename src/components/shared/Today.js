import React from 'react';

const Today = ({id, onChange}) => {
  return(
    <div>
      <label htmlFor={id}>Today's Date</label>
      <input type="date" id={id} name={id} onChange={onChange} />
    </div>
  );
}

export default Today;
