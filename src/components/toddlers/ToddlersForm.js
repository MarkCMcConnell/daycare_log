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
import BowelMovements from './forms/BowelMovements';
import Activities from './forms/Activities';

class ToddlersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: '',
      name: ''
      day: '',
      meals: [ {breakfast: ''}, {amSnack: ''}, {lunch: ''}, {pmSnack: ''} ],
      // bathroom: '',
      // type: '',
      // naps: [],
      // activities: '',
      // bring: [],
      // email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.target.preventDefault();
    // this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Toddlers</h1>
        <Link to='/'>Go Back</Link>
        <form onSubmit={this.handleSubmit}>
          <Today today={this.state.today} onChange={this.handleChange} />
          <Name name={this.state.name} onChange={this.handleChange} />
          <Day day={this.state.day} onChange={this.handleChange} />
          <Meals meals={this.state.meals} onChange={this.handleChange} />
          <Submit />
        </form>
      </div>
    );
  }
}

export default ToddlersForm;
