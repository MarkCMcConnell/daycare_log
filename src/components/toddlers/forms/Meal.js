import React from 'react'

const Meal = ({meal}) => {
  var mealTime = '';
  switch (meal) {
    case 'breakfast':
      mealTime = 'Breakfast';
      break;
    case 'amSnack':
      mealTime = 'AM Snack';
      break;
    case 'lunch':
      mealTime = 'Lunch';
      break;
    case 'pmSnack':
      mealTime = 'PM Snack';
      break;
  }

  return (
    <div>
      <label htmlFor={mealTime}>{mealTime}</label>
      <input type= 'text' id={mealTime} name={mealTime} />
    </div>
  );
}

export default Meal;
