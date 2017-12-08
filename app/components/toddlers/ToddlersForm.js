import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

import SingleInput from '../shared/SingleInput';
import MultipleInputs from '../shared/MultipleInputs';
import TimedMultipleInputs from '../shared/TimedMultipleInputs';
import BathroomTimes from './forms/BathroomTimes';
import BringItems from '../shared/BringItems';
import DatePicker from '../shared/DatePicker';
import Submit from '../shared/Submit';

class ToddlersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment().format('MM-DD-YYYY'),
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
      },
      naps: [
        {id: 'Morning', time: '', length: ''},
        {id: 'Afternoon', time: '', length: ''}
      ],
      activities: '',
      bringItems: [
        {type: 'Diapers', isChecked: false},
        {type: 'Wipes', isChecked: false},
        {type: 'Forumla', isChecked: false},
        {type: 'Change of clothes', isChecked: false},
        {type: 'Ointment', isChecked: false}
      ],
      other: '',
      providerEmail: '',
      providerUsername: '',
      providerPassword: '',
      parentEmail: ''
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMealChange = this.handleMealChange.bind(this);
    this.handleBathroomChange = this.handleBathroomChange.bind(this);
    this.handleNapsChange = this.handleNapsChange.bind(this);
    this.handleBringItemsChange = this.handleBringItemsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(selectedDate) {
    this.setState({today: selectedDate});
  }

  handleInputChange(event) {
    // Learning application of computed object keys
    this.setState({ [event.target.name]: event.target.value });
  }

  handleMealChange(meal, index) {
    // Learning application of ES6 spread operator
    let newMeals = [ ...this.state.meals ];
    newMeals[index] = { ...newMeals[index], food: meal};
    this.setState({meals: newMeals});
  }

  handleBathroomChange(e) {
    // Learning application of Object.assign()
    const bathroom = Object.assign({}, this.state.bathroom);
    if (e.target.name === 'times') {
      bathroom.times = e.target.value;
      this.setState({bathroom});
    } else {
      bathroom.type = e.target.value;
      this.setState({bathroom});
    }
  }

  handleNapsChange(nap, index) {
    let newNaps = [ ...this.state.naps ];
    newNaps[index] = { ...newNaps[index], length: nap };
    this.setState({naps: newNaps});
  }

  handleBringItemsChange(item, isChecked, index) {
    let newBringItems = [ ...this.state.bringItems ];
    newBringItems[index] = { ...newBringItems[index], type: item, isChecked: isChecked };
    this.setState({bringItems: newBringItems});
  }

  handleSubmit(event) {
    event.preventDefault();
    let info = this.state;
    axios.post('http://localhost:3000/sendmail/toddler', info)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Toddlers</h1>
        <Link to='/'>Go Back</Link>
        <form onSubmit={this.handleSubmit}>
          <DatePicker
            id="today"
            type="text"
            label="Today's Date: "
            date={this.state.today}
            onChangeDateTime={this.handleDateChange}
          />
          <SingleInput
            id="name"
            type="text"
            label="Name: "
            onChange={this.handleInputChange}
          />
          <SingleInput
            id="day"
            type="text"
            label="My day was "
            onChange={this.handleInputChange}
          />
          <MultipleInputs
            items={this.state.meals}
            onChange={this.handleMealChange}
          />
          <BathroomTimes
            bathroom={this.state.bathroom}
            onChange={this.handleBathroomChange}
          />
          <TimedMultipleInputs
            title='Nap Times'
            firstLabel='Time: '
            secondLabel='Length: '
            id='naps'
            items={this.state.naps}
            onChange={this.handleNapsChange}
          />
          <SingleInput
            id="activities"
            type="text"
            label="What I did today: "
            onChange={this.handleInputChange}
          />
          <BringItems
            title='Please bring the following tomorrow.'
            items={this.state.bringItems}
            onChange={this.handleBringItemsChange}
          />
          <SingleInput
            id='other'
            type='text'
            label='Other: '
            onChange={this.handleInputChange}
          />
          <SingleInput
            id="parentEmail"
            type="email"
            label="Parent Email: "
            onChange={this.handleInputChange}
          />
          <SingleInput
            id="providerEmail"
            type="email"
            label="Provider Email: "
            onChange={this.handleInputChange}
          />
          <SingleInput
            id="providerUsername"
            type="text"
            label="Provider Email Username: "
            onChange={this.handleInputChange}
          />
          <SingleInput
            id="providerPassword"
            type="text"
            label="Provider Email Password: "
            onChange={this.handleInputChange}
          />
          <Submit />
        </form>
      </div>
    );
  }
}

export default ToddlersForm;
