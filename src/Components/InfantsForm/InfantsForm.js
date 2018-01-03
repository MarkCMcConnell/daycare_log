import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

import DatePicker from '../ReactKronos/DatePicker';
import SingleInput from '../SingleInput/SingleInput';
import TextArea from '../TextArea/TextArea';
import TimedMultipleInputs from '../TimedMultipleInputs/TimedMultipleInputs';
import BringItems from '../BringItems/BringItems';
import UserInfo from '../UserInfo/UserInfo';
import Step from '../Step/Step';
import Submit from '../Submit/Submit';

import styles from './InfantsForm.css';

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
      providerPassword: '',
      step: 1
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMultipleChange = this.handleMultipleChange.bind(this);
    this.handleMultipleTimeChange = this.handleMultipleTimeChange.bind(this);
    this.handleBringItemsChange = this.handleBringItemsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  prevStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  handleDateChange(selectedDate) {
    this.setState({today: selectedDate});
  }

  handleMultipleChange(item, index, id) {
    if(id === 'bottles') {
      let newState = [ ...this.state.bottles ];
      newState[index] = { ...newState[index], amount: item };
      this.setState({bottles: newState});
    } else if (id === 'diapers') {
      let newState = [ ...this.state.diapers ];
      newState[index] = { ...newState[index], type: item };
      this.setState({diapers: newState});
    } else {
      let newState = [ ...this.state.naps ];
      newState[index] = { ...newState[index], length: item };
      this.setState({naps: newState});
    }
  }

  handleMultipleTimeChange(time, index, id) {
    if(id === 'bottles') {
      let newState = [ ...this.state.bottles ];
      newState[index] = { ...newState[index], time: time };
      this.setState({bottles: newState});
    } else if (id === 'diapers') {
      let newState = [ ...this.state.diapers ];
      newState[index] = { ...newState[index], time: time };
      this.setState({diapers: newState});
    } else {
      let newState = [ ...this.state.naps ];
      newState[index] = { ...newState[index], time: time };
      this.setState({naps: newState});
    }
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
    // axios.post('http://localhost:3000/sendmail/infant', this.state)
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // this.props.history.push('/');
  }

  render() {
    switch(this.state.step) {
      case 1:
        return (
          <div>
            <DatePicker
              id='today'
              type='text'
              label="Today's Date: "
              date={this.state.today}
              onChangeDateTime={this.handleDateChange}
            />
            <Step id='next' text='Next' onClick={this.nextStep} />
          </div>
        );
      case 2:
        return (
          <SingleInput
            id='name'
            type='text'
            label='Name: '
            onChange={this.handleInputChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 3:
        return (
          <TextArea
            label="My day was: "
            id='myDay'
            name='myDay'
            rows='4'
            cols='40'
            onChange={this.handleInputChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 4:
        return (
          <div>
            <TimedMultipleInputs
              title='Bottles'
              id='bottles'
              items={this.state.bottles}
              onChange={this.handleMultipleChange}
              onChangeDateTime={this.handleMultipleTimeChange}
            />
            <Step id='previous' text='Previous' onClick={this.prevStep} />
            <Step id='next' text='Next' onClick={this.nextStep} />
          </div>
        );
      case 5:
        return (
          <div>
            <TimedMultipleInputs
              title='Diapers'
              id='diapers'
              items={this.state.diapers}
              onChange={this.handleMultipleChange}
              onChangeDateTime={this.handleMultipleTimeChange}
            />
            <Step id='previous' text='Previous' onClick={this.prevStep} />
            <Step id='next' text='Next' onClick={this.nextStep} />
          </div>
        );
      case 6:
        return (
          <div>
            <TimedMultipleInputs
              title='Nap Times'
              id='naps'
              items={this.state.naps}
              onChange={this.hanMultipleChange}
              onChangeDateTime={this.handleMultipleTimeChange}
            />
            <Step id='previous' text='Previous' onClick={this.prevStep} />
            <Step id='next' text='Next' onClick={this.nextStep} />
          </div>
        );
      case 7:
        return (
          <div>
            <BringItems
              title='Please bring the following tomorrow.'
              id='bringItems'
              items={this.state.bringItems}
              onChange={this.handleBringItemsChange}
            />
            <SingleInput
              id='other'
              type='text'
              label='Other: '
              onChange={this.handleInputChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
            />
          </div>
        );
      case 8:
        return (
          <SingleInput
            id='parentEmail'
            type='email'
            label='Parent Email: '
            onChange={this.handleInputChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 9:
        return (
          <div>
            <UserInfo
              onChange={this.handleInputChange}
            />
            <Step id='previous' text='Previous' onClick={this.prevStep} />
            <Step id='next' text='Next' onClick={this.nextStep} />
          </div>
        );
      case 10:
        return (
          <Submit id='submit' />
        );
      default:
        break;
    }
  }
}

export default InfantsForm;
