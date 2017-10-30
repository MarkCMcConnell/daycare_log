import React from 'react';

const Activities = ({id, activities, onChange}) => {
  return (
    <div>
      <p>What I did today</p>
      <textarea name={activities} onChange={onChange}></textarea>
    </div>
  );
}

export default Activities;
