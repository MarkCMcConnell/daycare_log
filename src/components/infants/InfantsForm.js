import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import DatePicker from '../shared/DatePicker';
import SingleInput from '../shared/SingleInput';
import InfantsMultipleInputs from './forms/InfantsMultipleInputs';
import Diapers from './forms/Diapers';
import BringItems from '../shared/BringItems';
import Submit from '../shared/Submit';

class InfantsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: '',
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
      bring: [],
      parentEmail: '',
      providerEmail: ''
    }

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleInputChange(e) {
    // this.setState({ [e.target.name]: e.target.value});
  }

  handleDateChange() {

  }

  // handleBottlesChange(bottle, index) {
  //   // Set a copy of the current state
  //   let newBottle = [...this.state.bottles];
  //   // Determine whether to update the time or amount key
  //
  //   // Update the array of the bottles state and update
  //   // with new values for time and amount fed
  //   newBottle[index] = {...newBottle[index], time: }
  //   // setState of the bottles state object
  //   this.setState({newBottle});
  // }

  render() {
    return (
      <div>
        <h1>Infants</h1>
        <Link to='/'> Go back</Link>
        <form>
          <DatePicker id='today' name='today' label="Today's Date: "
            onChangeDateTime={this.handleDateChange} />
          <SingleInput id="name" type="text" label="Name: " onChange={this.handleInputChange} />
          <SingleInput id="day" type="text" label="My day was " onChange={this.handleInputChange} />
          <InfantsMultipleInputs
            title="Bottles"
            firstLabel="Time: "
            secondLabel="Amount: "
            items={this.state.bottles}
            onChange={this.handleBottlesChange}
          />
          <Diapers
            title="Diaper Changes"
            firstLabel="Time: "
            secondLabel="Type: "
            items={this.state.diapers}
            onChange={this.handleBottlesChange}
          />
          <InfantsMultipleInputs
            title="Nap Times"
            firstLabel="Time: "
            secondLabel="Length: "
            items={this.state.naps}
            onChange={this.handleBottlesChange}
          />
          <SingleInput id="parentEmail" type="email" label="Parent E-mail: "
            onChange={this.handleInputChange} />
          <SingleInput id="providerEmail" type="email" label="Provider E-mail: "
            onChange={this.handleInputChange} />
          <Submit />
        </form>
      </div>
    );
  }
}

export default InfantsForm;
