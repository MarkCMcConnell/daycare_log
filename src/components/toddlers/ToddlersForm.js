import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import Name from '../shared/Name';
import Day from '../shared/Day';
import NapTime from '../shared/NapTime';
import BringItems from '../shared/BringItems';
import Submit from '../shared/Submit';
import Email from '../shared/Email';
import Meals from './forms/Meals';
import BowelMovements from './forms/BowelMovements';
import Activities from './forms/Activities';

class ToddlersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      {name: ''},
      {day: ''},
      {meals: []},
      {bathroom: []},
      {naps: []},
      {activities: ''},
      {bring: []}
    };
  }

  handleSubmit(event) {

  }

  render() {
    // const meals = [ "Breakfast", "AM Snack", "Lunch", "PM Snack" ];
    // const mealTimes = meals.map((meal, index) => {
    //   return (
    //     <div>
    //       <label htmlFor={meal} key={index}>{meal}</label>
    //       <input type="text" id={meal} key={meal} />
    //     </div>
    //   );
    // });

    return (
      <div>
        <h1>Toddlers</h1>
        <Link to='/'>Go Back</Link>
        <Name />
        <Day />
        <Meals />
        <BowelMovements />
        <NapTime />
        <Activities />
        <BringItems />
        <Email />
        <Submit />
      </div>
    );
  }
}

export default ToddlersForm;
