import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import Today from '../shared/Today';
import Name from '../shared/Name';
import Day from '../shared/Day';
import NapTime from '../shared/NapTime';
import BringItems from '../shared/BringItems';
import Submit from '../shared/Submit';
import Email from '../shared/Email';
import Meals from './forms/Meals';
import BathroomTimes from './forms/BathroomTimes';
import Activities from './forms/Activities';

class ToddlersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: '',
      name: '',
      day: '',
      meals: [
        {id: 'breakfast', time: 'Breakfast', food: ''},
        {id: 'amSnack', time: 'AM Snack', food: ''},
        {id: 'lunch', time: 'Lunch', food: ''},
        {id: 'pmSnack', time: 'PM Snack', food: ''}
      ],
      bathroom: {
        times: '',
        type: ''
      }
      // type: '',
      // naps: [],
      // activities: '',
      // bring: [],
      // email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMealChange = this.handleMealChange.bind(this);
    this.handleBathroomChange = this.handleBathroomChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleMealChange(meal, index) {
    let newMeals = [ ...this.state.meals ];
    newMeals[index] = { ...newMeals[index], food: meal};
    this.setState({meals: newMeals});
  }

  handleBathroomChange(e) {
    const bathroom = Object.assign({}, this.state.bathroom);
    if (e.target.name === 'times') {
      bathroom.times = e.target.value;
      this.setState({bathroom});
    } else {
      bathroom.type = e.target.value;
      this.setState({bathroom});
    }
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    // this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Toddlers</h1>
        <Link to='/'>Go Back</Link>
        <form onSubmit={this.handleSubmit}>
          <Today id="today" onChange={this.handleInputChange} />
          <Name id="name" onChange={this.handleInputChange} />
          <Day id="day" onChange={this.handleInputChange} />
          <Meals meals={this.state.meals} onChange={this.handleMealChange} />
          <BathroomTimes
            bathroom={this.state.bathroom}
            onChange={this.handleBathroomChange} />
          <Submit />
        </form>
      </div>
    );
  }
}

export default ToddlersForm;
