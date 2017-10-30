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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
          <Meals meals={this.state.meals} onChange={this.handleSelectChange} />
          <BathroomTimes
            bathroom={this.state.bathroom}
            onChange={this.handleChage} />
          <Submit />
        </form>
      </div>
    );
  }
}

export default ToddlersForm;
