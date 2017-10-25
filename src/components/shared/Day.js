import React from 'react';

const Day = (props) => {
  return (
    <div>
      <label htmlFor="my-day">My day was... </label>
      <input type="text" id="my-day" name="date" />
    </div>
  );
}

export default Day;
