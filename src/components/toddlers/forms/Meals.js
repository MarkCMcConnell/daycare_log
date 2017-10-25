import React from 'react';
import Meal from './Meal';

const Meals = (props) => {
  const mealTimes = props.meals.map((meal) => {
    return <Meal meal={meal} />
  });

  return (
    <div>
      {mealTimes}
    </div>
  );
};

export default Meals;
