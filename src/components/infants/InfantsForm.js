import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
      bring: [],
      parentEmail: '',
      providerEmail: ''
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDiapersChange = this.handleDiapersChange.bind(this);
    this.handleBottlesChange = this.handleBottlesChange.bind(this);
    this.handleBottlesTimeChange = this.handleBottlesTimeChange.bind(this);
    this.handleNapsChange = this.handleNapsChange.bind(this);
    this.handleNapsTimeChange = this.handleNapsTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(selectedDate) {
    this.setState({today: selectedDate});
  }

  handleInputChange(e) {
    // this.setState({ [e.target.name]: e.target.value});
  }

  handleDiapersChange(e, index) {

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
          <DatePicker id="today" type="text" label="Today's Date: " date={this.state.today}
            onChangeDateTime={this.handleDateChange} />
          <SingleInput id="name" type="text" label="Name: " onChange={this.handleInputChange} />
          <SingleInput id="day" type="text" label="My day was " onChange={this.handleInputChange} />

          <InfantsMultipleInputs
            title="Bottles"
            firstLabel="Time: "
            secondLabel="Amount: "
            items={this.state.bottles}
            onChange={this.handleBottlesChange}
            onChangeDateTime={this.handleBottlesTimeChange}
          />

          <Diapers
            title="Diaper Changes"
            firstLabel="Time: "
            secondLabel="Type: "
            items={this.state.diapers}
            onChange={this.handleDiapersChange}
          />

          <InfantsMultipleInputs
            title="Nap Times"
            firstLabel="Time: "
            secondLabel="Length: "
            items={this.state.naps}
            onChange={this.handleNapsChange}
            onChangeDateTime={this.handleNapsTimeChange}
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
