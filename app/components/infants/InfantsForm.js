import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';

import DatePicker from '../shared/DatePicker';
import SingleInput from '../shared/SingleInput';
import TimedMultipleInputs from '../shared/TimedMultipleInputs';
import Diapers from './forms/Diapers';
import BringItems from '../shared/BringItems';
import Submit from '../shared/Submit';

class InfantsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment().format('MM-DD-YYYY'),
      name: '',
      day: '',
      bottles: [
        { id: 'bottle1', time: '', amount: ''},
        { id: 'bottle2', time: '', amount: ''},
        { id: 'bottle3', time: '', amount: ''},
        { id: 'bottle4', time: '', amount: ''},
        { id: 'bottle5', time: '', amount: ''},
        { id: 'bottle6', time: '', amount: ''}
      ],
      diapers: [
        { id: 'diaper1', time: '', type: ''},
        { id: 'diaper2', time: '', type: ''},
        { id: 'diaper3', time: '', type: ''},
        { id: 'diaper4', time: '', type: ''},
        { id: 'diaper5', time: '', type: ''},
        { id: 'diaper6', time: '', type: ''},
        { id: 'diaper7', time: '', type: ''},
        { id: 'diaper8', time: '', type: ''},
        { id: 'diaper9', time: '', type: ''},
      ],
      naps: [
        { id: 'nap1' , time: '', length: ''},
        { id: 'nap2' , time: '', length: ''},
        { id: 'nap3' , time: '', length: ''},
        { id: 'nap4' , time: '', length: ''}
      ],
      bringItems: [
        {type: 'Diapers', isChecked: false},
        {type: 'Wipes', isChecked: false},
        {type: 'Forumla', isChecked: false},
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
    let newDiapers = [ ...this.state.diapers ];
    newDiapers[index] = { ...newDiapers[index], type: diaper };
    this.setState({diapers: newDiapers});
  }

  handleDiapersTimeChange(time, index) {
    let newDiapers = [ ...this.state.diapers ];
    newDiapers[index] = { ...newDiapers[index], time: time};
    this.setState({diapers: newDiapers});
  }

  handleBottlesChange(bottle, index) {
    let newBottles = [ ...this.state.bottles ];
    newBottles[index] = { ...newBottles[index], amount: bottle };
    this.setState({bottles: newBottles});
  }

  handleBottlesTimeChange(time, index) {
    let newBottles = [ ...this.state.bottles ];
    newBottles[index] = { ...newBottles[index], time: time };
    this.setState({bottles: newBottles});
  }

  handleNapsChange(nap, index) {
    let newNaps = [ ...this.state.naps ];
    newNaps[index] = { ...newNaps[index], length: nap };
    this.setState({naps: newNaps});
  }

  handleNapsTimeChange(time, index) {
    let newNaps = [ ...this.state.naps ];
    newNaps[index] = { ...newNaps[index], time: time };
    this.setState({naps: newNaps});
  }

  handleBringItemsChange(item, isChecked, index) {
    console.log(item + ' ' + isChecked + ' ' + index);
    let newBringItems = [ ...this.state.bringItems ];
    newBringItems[index] = { ...newBringItems[index], type: item, isChecked: isChecked };
    this.setState({bringItems: newBringItems});
  }

  handleInputChange(event) {
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
            firstLabel='Time: '
            secondLabel='Amount: '
            id='bottles'
            items={this.state.bottles}
            onChange={this.handleBottlesChange}
            onChangeDateTime={this.handleBottlesTimeChange}
          />
          <Diapers
            title='Diaper Changes'
            firstLabel='Time: '
            secondLabel='Type: '
            items={this.state.diapers}
            onChange={this.handleDiapersChange}
            onChangeDateTime={this.handleDiapersTimeChange}
          />
          <TimedMultipleInputs
            title='Nap Times'
            firstLabel='Time: '
            secondLabel='Length: '
            id='naps'
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

export default InfantsForm;
