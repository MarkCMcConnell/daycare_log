import React, { Component } from 'react';

class Meals extends Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  render () {
    const mealTimes = this.props.meals.map((meal, index) => {
      return (
        <div key={index}>
          <label htmlFor={meal.id}>{meal.time}</label>
          <input type='text' id={meal.id} name={meal} onChange={(e) => this.handleChange(e, index)} />
        </div>
      );
    });

    return (
      <div>
        {mealTimes}
      </div>
    );
  }
}

export default Meals;
