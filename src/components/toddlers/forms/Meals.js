import React from 'react';

const Meals = ({meals, onChange}) => {
  const mealTimes = meals.map((meal, index) => {
    const onChange = event => {
      const newMeals = [...meals];
      newMeals[index] = Object.assign({}, meals[index], { food: event.target.value});
      this.setState({ meals: newMeals});
    }
    return (
      <div key={index}>
        <label htmlFor={meal.id}>{meal.time}</label>
        <input type='text' id={meal.id} name={meal} onChange={onChange} />
      </div>
    );
  });

  return (
    <div>
      {mealTimes}
    </div>
  );
};

export default Meals;
