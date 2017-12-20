import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

import DatePicker from './Shared/DatePicker';
import SingleInput from './Input/SingleInput';
import TimedMultipleInputs from './Shared/TimedMultipleInputs';
import BringItems from './Shared/BringItems';
import Submit from './Shared/Submit';

class InfantsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment().format('MM-DD-YYYY'),
      name: '',
      day: '',
      bottles: [
        { time: '', amount: ''},
        { time: '', amount: ''},
        { time: '', amount: ''},
        { time: '', amount: ''},
        { time: '', amount: ''},
        { time: '', amount: ''}
      ],
      diapers: [
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
        { time: '', type: ''},
      ],
      naps: [
        { time: '', length: ''},
        { time: '', length: ''},
        { time: '', length: ''},
        { time: '', length: ''}
      ],
      bringItems: [
        {type: 'Diapers', isChecked: false},
        {type: 'Wipes', isChecked: false},
        {type: 'Formula', isChecked: false},
        {type: 'Change of clothes', isChecked: false},
        {type: 'Ointment', isChecked: false}
      ],
      other: '',
      parentEmail: '',
      providerEmail: '',
      providerUsername: '',
      providerPassword: ''
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDiapersChange = this.handleDiapersChange.bind(this);
    this.handleDiapersTimeChange = this.handleDiapersTimeChange.bind(this);
    this.handleBottlesChange = this.handleBottlesChange.bind(this);
    this.handleBottlesTimeChange = this.handleBottlesTimeChange.bind(this);
    this.handleNapsChange = this.handleNapsChange.bind(this);
    this.handleNapsTimeChange = this.handleNapsTimeChange.bind(this);
    this.handleBringItemsChange = this.handleBringItemsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(selectedDate) {
    this.setState({today: selectedDate});
  }

  handleDiapersChange(diaper, index) {
    let newState = [ ...this.state.diapers ];
    newState[index] = { ...newState[index], type: diaper };
    this.setState({diapers: newState});
  }

  handleDiapersTimeChange(time, index) {
    let newState = [ ...this.state.diapers ];
    newState[index] = { ...newState[index], time: time};
    this.setState({diapers: newState});
  }

  handleBottlesChange(bottle, index) {
    let newState = [ ...this.state.bottles ];
    newState[index] = { ...newState[index], amount: bottle };
    this.setState({bottles: newState});
  }

  handleBottlesTimeChange(time, index) {
    let newState = [ ...this.state.bottles ];
    newState[index] = { ...newState[index], time: time };
    this.setState({bottles: newState});
  }

  handleNapsChange(nap, index) {
    let newState = [ ...this.state.naps ];
    newState[index] = { ...newState[index], length: nap };
    this.setState({naps: newState});
  }

  handleNapsTimeChange(time, index) {
    let newState = [ ...this.state.naps ];
    newState[index] = { ...newState[index], time: time };
    this.setState({naps: newState});
  }

  handleBringItemsChange(item, isChecked, index) {
    let newState = [ ...this.state.bringItems ];
    newState[index] = { ...newState[index], type: item, isChecked: isChecked };
    this.setState({bringItems: newState});
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/sendmail/infant', this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Infants</h1>
        <Link to='/'> Go back</Link>
        <form onSubmit={this.handleSubmit}>
          <DatePicker
            id='today'
            type='text'
            label="Today's Date: "
            date={this.state.today}
            onChangeDateTime={this.handleDateChange} />
          <SingleInput
            id='name'
            type='text'
            label='Name: '
            onChange={this.handleInputChange} />
          <SingleInput
            id='day'
            type='text'
            label='My day was '
            onChange={this.handleInputChange} />
          <TimedMultipleInputs
            title='Bottles'
            id='bottles'
            items={this.state.bottles}
            onChange={this.handleBottlesChange}
            onChangeDateTime={this.handleBottlesTimeChange}
          />
          <TimedMultipleInputs
            title='Diapers'
            id='diapers'
            time={this.state.diapers.time}
            items={this.state.diapers}
            onChange={this.handleDiapersChange}
            onChangeDateTime={this.handleDiapersTimeChange}
          />
          <TimedMultipleInputs
            title='Nap Times'
            id='naps'
            time={this.state.naps.time}
            items={this.state.naps}
            onChange={this.handleNapsChange}
            onChangeDateTime={this.handleNapsTimeChange}
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
            id='parentEmail'
            type='email'
            label='Parent Email: '
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
            type="password"
            label="Provider Email Password: "
            onChange={this.handleInputChange}
          />
          <Submit />
        </form>
      </div>
    );
  }
}

export default InfantsForm;
