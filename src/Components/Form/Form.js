/* Base imports */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

/* Component imports */
import GeneralInfo from '../GeneralInfo/GeneralInfo'
import DailyActivities from '../DailyActivities/DailyActivities'
import MultipleInputs from '../MultipleInputs/MultipleInputs'
import SuppliesRequest from '../SuppliesRequest/SuppliesRequest'
import TimedMultipleInputs from '../TimedMultipleInputs/TimedMultipleInputs'
import TwoSelectOptions from '../TwoSelectOptions/TwoSelectOptions'
import UserInfo from '../UserInfo/UserInfo'
import EmailPreview from '../EmailPreview/EmailPreview'
import Button from '../Button/Button'

/* CSS import */
import styles from './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      age: props.match.params.type,
      today: moment().format('MM-DD-YYYY'),
      name: '',
      day: '',
      bathroom: [
        { times: '', type: '' }
      ],
      bottles: [
        { time: moment('12:30', 'HH:mm'), amount: '' },
        { time: moment('12:30', 'HH:mm'), amount: '' },
        { time: moment('12:30', 'HH:mm'), amount: '' },
        { time: moment('12:30', 'HH:mm'), amount: '' },
        { time: moment('12:30', 'HH:mm'), amount: '' },
        { time: moment('12:30', 'HH:mm'), amount: '' }
      ],
      bottlesOptions: ['', '0.5oz', '1oz', '1.5oz', '2oz', '2.5oz', '3oz', '3.5oz',
        '4oz', '4.5oz', '5oz', '5.5oz', '6oz', '6.5oz', '7oz', '7.5oz', '8oz',
        '8.5oz', '9oz', '9.5oz', '10oz'],
      diapers: [
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' },
        { time: moment('12:30', 'HH:mm'), type: '' }
      ],
      diapersOptions: ['', 'Wet', 'Dirty'],
      meals: [
        {id: 'breakfast', time: 'Breakfast', food: ''},
        {id: 'amSnack', time: 'AM Snack', food: ''},
        {id: 'lunch', time: 'Lunch', food: ''},
        {id: 'pmSnack', time: 'PM Snack', food: ''}
      ],
      infantNaps: [
        { time: moment('12:30', 'HH:mm'), length: '' },
        { time: moment('12:30', 'HH:mm'), length: '' },
        { time: moment('12:30', 'HH:mm'), length: '' },
        { time: moment('12:30', 'HH:mm'), length: '' }
      ],
      toddlerNaps: [
        {time: moment('12:30', 'HH:mm'), length: ''},
        {time: moment('12:30', 'HH:mm'), length: ''}
      ],
      napsOptions: ['', '30 mins', '45 mins', '1 hour', '1.25 hours', '1.5 hours',
        '1.75 hours', '2 hours', '2.25 hours', '2.5 hours', '2.75 hours', '3 hours'],
      suppliesList: [
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

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleMultipleChange = this.handleMultipleChange.bind(this)
    this.handleSuppliesListChange = this.handleSuppliesListChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.formStep = this.formStep.bind(this)
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleMultipleChange (item, index, id, key) {
    /* Clone state into a new object then use spread operator to merge in changes */
    let newState = [ ...this.state[id] ]
    newState[index] = { ...newState[index], [key]: item }
    this.setState({ [id]: newState })
  }

  handleSuppliesListChange (item, isChecked, index) {
    let newState = [ ...this.state.suppliesList ]
    newState[index] = { ...newState[index], type: item, isChecked: isChecked }
    this.setState({suppliesList: newState})
  }

  handleTimeChange (time, index, id, key) {
    let newState = [ ...this.state[id] ]
    newState[index] = { ...newState[index], [key]: time }
    this.setState({ [id]: newState })
  }

  handleSubmit (e) {
    e.preventDefault()

    /* Route the POST to the appropriate email template */
    if (this.state.age === 'infant') {
      axios.post('http://localhost:3000/sendmail/infant', this.state)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.props.history.push('/')
    } else {
      axios.post('http://localhost:3000/sendmail/toddler', this.state)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.props.history.push('/')
    }
  }
  /* nextStep and prevStep changes this.state.step, which gets passed to
     formStep */
  nextStep (e) {
    e.preventDefault()
    this.setState({
      step: this.state.step + 1
    })
  }

  prevStep (e) {
    e.preventDefault()
    this.setState({
      step: this.state.step - 1
    })
  }

  formStep (currentStep) {
    const { age, step } = this.state
    let nav = null

    /* Determine which set of buttons to render based upon which step of the form
       is currently being rendered */
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
    /* The switch statement is set to progress back and forth through the multi-step
       form based upon this.state.step.
       Certain steps are evaluated to determine whether the form components should
       render an infant-specific or toddler-specific form component.
    */
    switch (step) {
      case 1:
        return [
          <GeneralInfo
            date={this.state.today}
            onChange={this.handleInputChange}
            onPrevClick={this.prevStep}
            onNextClick={this.nextStep}
          />,
          nav
        ]
      case 2:
        return [
          <DailyActivities
            name='day'
            onChange={this.handleInputChange}
          />,
          nav
        ]
      case 3:
        if (age === 'infant') {
          return [
            <TimedMultipleInputs
              title='Bottles'
              id='bottles'
              rows={6}
              selectLabel='Amount'
              items={this.state.bottles}
              optionsArr={this.state.bottlesOptions}
              onSelect={this.handleMultipleChange}
              onChangeTime={this.handleTimeChange}
            />,
            nav
          ]
        } else {
          return [
            <MultipleInputs
              title='Meals'
              id='meals'
              label='food'
              items={this.state.meals}
              onChange={this.handleMultipleChange}
            />,
            nav
          ]
        }
      case 4:
        if (age === 'infant') {
          return [
            <TimedMultipleInputs
              title='Diapers'
              id='diapers'
              rows={8}
              selectLabel='Type'
              items={this.state.diapers}
              optionsArr={this.state.diapersOptions}
              onSelect={this.handleMultipleChange}
              onChangeTime={this.handleTimeChange}
            />,
            nav
          ]
        } else {
          return [
            <TwoSelectOptions
              id='bathroom'
              onSelect={this.handleMultipleChange}
            />,
            nav
          ]
        }
      case 5:
        if (age === 'infant') {
          return [
            <TimedMultipleInputs
              title='Naps'
              id='infantNaps'
              rows={4}
              selectLabel='Length'
              items={this.state.infantNaps}
              optionsArr={this.state.napsOptions}
              onSelect={this.handleMultipleChange}
              onChangeTime={this.handleTimeChange}
            />,
            nav
          ]
        } else {
          return [
            <TimedMultipleInputs
              title='Naps'
              id='toddlerNaps'
              rows={2}
              selectLabel='Length'
              items={this.state.toddlerNaps}
              optionsArr={this.state.napsOptions}
              onSelect={this.handleMultipleChange}
              onChangeTime={this.handleTimeChange}
            />,
            nav
          ]
        }
      case 6:
        return [
          <SuppliesRequest
            id='suppliesList'
            items={this.state.suppliesList}
            onChange={this.handleInputChange}
            onListChange={this.handleSuppliesListChange}
          />,
          nav
        ]
      case 7:
        return [
          <UserInfo
            onChange={this.handleInputChange}
          />,
          nav
        ]
      case 8:
        if (age === 'infant') {
          const {
            age, today, name, parentEmail, day, bottles, diapers, infantNaps, suppliesList, other
          } = this.state

          return [
            <EmailPreview
              age={age}
              today={today}
              name={name}
              parentEmail={parentEmail}
              day={day}
              bottles={bottles}
              diapers={diapers}
              infantNaps={infantNaps}
              suppliesList={suppliesList}
              other={other}
            />,
            <div className={`${styles.gridContainerEven2x1} ${styles.navControl}`}>
              <Button id='previous' text='Previous' onClick={this.prevStep} />
              <Button type='submit' text='Send' />
            </div>
          ]
        } else {
          const {
            age, today, name, parentEmail, day, meals, bathroom, toddlerNaps, suppliesList, other
          } = this.state

          return [
            <EmailPreview
              age={age}
              today={today}
              name={name}
              parentEmail={parentEmail}
              day={day}
              meals={meals}
              bathroom={bathroom}
              toddlerNaps={toddlerNaps}
              suppliesList={suppliesList}
              other={other}
            />,
            <div className={`${styles.gridContainerEven2x1} ${styles.navControl}`}>
              <Button id='previous' text='Previous' onClick={this.prevStep} />
              <Button type='submit' text='Send' />
            </div>
          ]
        }
      default:
        break
    }
  }

  render () {
    return (
      <div className={styles.formsContainer}>
        <Link className={styles.backButton} to='/'>Back</Link>
        <div className={styles.borderTop} />
        <div className={styles.borderTopThin} />
        <section className={styles.formsHeader}>
          <h2 className={styles.titleText}>{this.state.age[0].toUpperCase() + this.state.age.slice(1)}</h2>
          <h4 className={styles.stepText}>{this.state.step} / 8</h4>
          <form className={styles.formField} onSubmit={this.handleSubmit}>
            {this.formStep(this.state.step)}
          </form>
        </section>
      </div>
    )
  }
}

export default Form
