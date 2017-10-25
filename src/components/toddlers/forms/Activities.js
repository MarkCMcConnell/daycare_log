import React from 'react';

const Activities = ({activities}) => {
  return (
    <div>
      <p>What I did today</p>
      <textarea name={activities}></textarea>
    </div>
  );
}

export default Activities;
