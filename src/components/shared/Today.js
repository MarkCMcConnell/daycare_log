import React from 'react';

const Today = ({day}) => {
  return(
    <div>
      <label htmlFor="dateToday">Date: </label>
      <input type="date" name="dateToday" id="dateToday" value={day} />
    </div>
  );
}

export default Today;
