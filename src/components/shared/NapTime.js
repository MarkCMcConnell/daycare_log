import React from 'react';

const NapTime = () => {
  return (
    <div>
      <p>Nap Time</p>
      <div>
        <input type="time" name="nap1 " />
        <input type="time" name="nap2 " />
      </div>
      <div>
        <input type="time" name="nap3 " />
        <input type="time" name="nap4 " />
      </div>
    </div>
  );
};

export default NapTime;
