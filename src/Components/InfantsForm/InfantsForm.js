import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
// import axios from 'axios'

import TimeSlider from '../TimeSlider/TimeSlider'

import DatePicker from '../DayPicker/DayPicker'
import SingleInput from '../SingleInput/SingleInput'
import TextArea from '../TextArea/TextArea'
import TimedMultipleInputs from '../TimedMultipleInputs/TimedMultipleInputs'
import BringItems from '../BringItems/BringItems'
import UserInfo from '../UserInfo/UserInfo'
import Button from '../Button/Button'
import Submit from '../Submit/Submit'

import styles from './InfantsForm.css'

class InfantsForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      today: moment().format('MM-DD-YYYY'),
      name: '',
      day: '',
      bottles: [
        { time: '', amount: '' },
        { time: '', amount: '' },
        { time: '', amount: '' },
        { time: '', amount: '' },
        { time: '', amount: '' },
        { time: '', amount: '' }
      ],
      bottlesOptions: ['0.5oz', '1oz', '1.5oz', '2oz', '2.5oz', '3oz', '3.5oz',
        '4oz', '4.5oz', '5oz', '5.5oz', '6oz', '6.5oz', '7oz', '7.5oz', '8oz',
        '8.5oz', '9oz', '9.5oz', '10oz'],
      diapers: [
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' },
        { time: '', type: '' }
      ],
      diapersOptions: ['', 'wet', 'dirty'],
      naps: [
        { time: '', length: '' },
        { time: '', length: '' },
        { time: '', length: '' },
        { time: '', length: '' }
      ],
      napsOptions: ['30 mins', '45 mins', '1 hour', '1.25 hours', '1.5 hours',
        '1.75 hours', '2 hours', '2.25 hours', '2.5 hours', '2.75 hours', '3 hours'],
      bringItems: [
        {type: 'Diapers', isChecked: false},
        {type: 'Wipes', isChecked: false},
        {type: 'Formula', isChecked: false},
        {type: 'Clothes', isChecked: false},
        {type: 'Ointment', isChecked: false}
      ],
      other: '',
      parentEmail: '',
      providerEmail: '',
      providerUsername: '',
      providerPassword: '',
      step: 1
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleMultipleChange = this.handleMultipleChange.bind(this)
    // this.handleMultipleTimeChange = this.handleMultipleTimeChange.bind(this)
    this.handleBringItemsChange = this.handleBringItemsChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
  }

  handleDateChange (selectedDate) {
    this.setState({today: selectedDate})
  }

  //TODO Modify to have this.state.[item] and generalize the key for nested object
  handleMultipleChange (item, index, id, key) {
    let newState = [ ...this.state[id] ]
    newState[index] = { ...newState[index], [key]: item }
    this.setState({ [id]: newState})
  }
  //
  //   if (id === 'bottles') {
  //     let newState = [ ...this.state.bottles ]
  //     newState[index] = { ...newState[index], amount: item }
  //     this.setState({bottles: newState})
  //   } else if (id === 'diapers') {
  //     let newState = [ ...this.state.diapers ]
  //     newState[index] = { ...newState[index], type: item }
  //     this.setState({diapers: newState})
  //   } else {
  //     let newState = [ ...this.state.naps ]
  //     newState[index] = { ...newState[index], length: item }
  //     this.setState({naps: newState})
  //   }
  // }
  //
  // handleMultipleTimeChange (time, index, id) {
    // if (id === 'bottles') {
    //   let newState = [ ...this.state.bottles ]
    //   newState[index] = { ...newState[index], time: time }
    //   this.setState({bottles: newState})
    // } else if (id === 'diapers') {
    //   let newState = [ ...this.state.diapers ]
    //   newState[index] = { ...newState[index], time: time }
    //   this.setState({diapers: newState})
    // } else {
    //   let newState = [ ...this.state.naps ]
    //   newState[index] = { ...newState[index], time: time }
    //   this.setState({naps: newState})
    // }
  // }

  handleBringItemsChange (item, isChecked, index) {
    let newState = [ ...this.state.bringItems ]
    newState[index] = { ...newState[index], type: item, isChecked: isChecked }
    this.setState({bringItems: newState})
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    // axios.post('http://localhost:3000/sendmail/infant', this.state)
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // this.props.history.push('/')
  }

  prevStep () {
    this.setState({
      step: this.state.step - 1
    })
  }

  nextStep () {
    this.setState({
      step: this.state.step + 1
    })
  }

  formStep (currentStep) {
    switch (this.state.step) {
      case 1:
        return (
          <div className={styles.gridContainer1x1}>
            <DatePicker
              className={styles.gridItem}
              id='today'
              date={this.state.today}
              onChange={this.handleDateChange}
            />
            <SingleInput
              className={styles.gridItem}
              id='name'
              type='text'
              label='Child&#39;s name'
              onChange={this.handleInputChange}
            />
            <SingleInput
              className={styles.gridItem}
              id='parentEmail'
              name='parentEmail'
              type='email'
              label='Parent&#39;s Email'
              onChange={this.handleInputChange}
            />
          </div>
        )
      case 2:
        return (
          <div className={styles.gridContainer1x1}>
            <TextArea
              label='My day was: '
              id='myDay'
              name='myDay'
              rows='8'
              cols='25'
              onChange={this.handleInputChange}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <TimedMultipleInputs
              title='Bottles'
              id='bottles'
              rows={6}
              selectLabel='Amount'
              items={this.state.bottles}
              optionsArr={this.state.bottlesOptions}
              onChange={this.handleMultipleChange}
              onChangeTime={this.handleMultipleChange}
            />
          </div>
        )
      case 4:
        return (
          <div>
            <TimedMultipleInputs
              title='Diapers'
              id='diapers'
              rows={8}
              selectLabel='Type'
              items={this.state.diapers}
              optionsArr={this.state.diapersOptions}
              onChange={this.handleMultipleChange}
              onChangeTime={this.handleMultipleChange}
            />
          </div>
        )
      case 5:
        return (
          <div>
            <TimedMultipleInputs
              title='Nap Times'
              id='naps'
              rows={4}
              selectLabel='Length'
              items={this.state.naps}
              optionsArr={this.state.napsOptions}
              onChange={this.handleMultipleChange}
              onChangeTime={this.handleMultipleChange}
            />
          </div>
        )
      case 6:
        return (
          <div className={styles.gridContainer1x2}>
            <BringItems
              title='Please bring the following tomorrow:'
              id='bringItems'
              items={this.state.bringItems}
              onChange={this.handleBringItemsChange}
            />
            <SingleInput
              id='other'
              type='text'
              label='Other: '
              onChange={this.handleInputChange}
            />
          </div>
        )
      case 7:
        return (
          <div>
            <UserInfo
              onChange={this.handleInputChange}
            />
          </div>
        )
      case 8:
        return (
          <div className={styles.formItems}>
            <Button type='submit' text='Send' />
          </div>
        )
      default:
        break
    }
  }

  render () {
    const step = this.state.step

    let nav = null
    if (step === 1) {
      nav = <div className={`${styles.gridContainer1x1} ${styles.navControl}`}>
        <Button id='next' text='Next' onClick={this.nextStep} />
      </div>
    } else if (step > 1 && step < 8) {
      nav = <div className={`${styles.gridContainerEven2x1} ${styles.navControl}`}>
        <Button id='previous' text='Previous' onClick={this.prevStep} />
        <Button id='next' text='Next' onClick={this.nextStep} />
      </div>
    }

    return (
      <div className={styles.formsContainer}>
        <Link className={styles.backButton} to='/'>Start Over</Link>
        <div className={styles.borderTop} />
        <div className={styles.borderTopThin} />
        <section className={styles.formsHeader}>
          <h2 className={styles.titleText}>Infants</h2>
          <h4 className={styles.stepText}>{this.state.step} / 8</h4>
          <form className={styles.formField} onSubmit={this.handleSubmit}>
            {this.formStep(this.state.step)}
          </form>
          {nav}
        </section>
      </div>
    )
  }
}

export default InfantsForm
