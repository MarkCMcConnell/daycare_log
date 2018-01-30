/* Base imports */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
// import axios from 'axios'

/* Component imports */
import GeneralInfo from '../GeneralInfo/GeneralInfo'
import DailyActivities from '../DailyActivities/DailyActivities'
import SuppliesRequest from '../SuppliesRequest/SuppliesRequest'
import TimesAndOptions from '../TimesAndOptions/TimesAndOptions'
import UserInfo from '../UserInfo/UserInfo'
import Confirmation from '../Confirmation/Confirmation'
import Button from '../Button/Button'

/* CSS import */
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
      bottlesOptions: ['', '0.5oz', '1oz', '1.5oz', '2oz', '2.5oz', '3oz', '3.5oz',
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

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleMultipleChange = this.handleMultipleChange.bind(this)
    this.handleSuppliesListChange = this.handleSuppliesListChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
  }

  handleDateChange (selectedDate) {
    this.setState({today: selectedDate})
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleMultipleChange (item, index, id, key) {
    let newState = [ ...this.state[id] ]
    newState[index] = { ...newState[index], [key]: item }
    this.setState({ [id]: newState })
  }

  handleSuppliesListChange (item, isChecked, index) {
    let newState = [ ...this.state.suppliesList ]
    newState[index] = { ...newState[index], type: item, isChecked: isChecked }
    this.setState({suppliesList: newState})
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

  nextStep () {
    this.setState({
      step: this.state.step + 1
    })
  }

  prevStep () {
    this.setState({
      step: this.state.step - 1
    })
  }

  /* TODO Refactor to work for both infants and toddlers based on state set by
    props passed from FormsNav */
  formStep (currentStep) {
    switch (this.state.step) {
      case 1:
        return (
          <GeneralInfo
            date={this.state.today}
            onChange={this.handleInputChange}
            onDateChange={this.handleDateChange}
          />
        )
      case 2:
        return (
          <DailyActivities
            name='day'
            onChange={this.handleInputChange}
          />
        )
      case 3:
        return (
          <TimesAndOptions
            title='Bottles'
            id='bottles'
            rows={6}
            selectLabel='Amount'
            items={this.state.bottles}
            optionsArr={this.state.bottlesOptions}
            onChange={this.handleMultipleChange}
            onChangeTime={this.handleMultipleChange}
          />
        )
      case 4:
        return (
          <TimesAndOptions
            title='Diapers'
            id='diapers'
            rows={8}
            selectLabel='Type'
            items={this.state.diapers}
            optionsArr={this.state.diapersOptions}
            onChange={this.handleMultipleChange}
            onChangeTime={this.handleMultipleChange}
          />
        )
      case 5:
        return (
          <TimesAndOptions
            title='Naps'
            id='naps'
            rows={4}
            selectLabel='Length'
            items={this.state.naps}
            optionsArr={this.state.napsOptions}
            onChange={this.handleMultipleChange}
            onChangeTime={this.handleMultipleChange}
          />
        )
      case 6:
        return (
          <SuppliesRequest
            id='suppliesList'
            items={this.state.suppliesList}
            onChange={this.handleInputChange}
            onListChange={this.handleSuppliesListChange}
          />
        )
      case 7:
        return (
          <UserInfo
            onChange={this.handleInputChange}
          />
        )
      case 8:
        const {
          today, name, parentEmail, day, bottles, diapers, naps, suppliesList, other
        } = this.state
        return (
          <Confirmation
            today={today}
            name={name}
            parentEmail={parentEmail}
            day={day}
            bottles={bottles}
            diapers={diapers}
            naps={naps}
            suppliesList={suppliesList}
            other={other}
          />
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
    } else {
      nav = <div className={`${styles.gridContainerEven2x1} ${styles.navControl}`}>
        <Button id='previous' text='Previous' onClick={this.prevStep} />
        <Button type='submit' text='Send' />
      </div>
    }

    return (
      <div className={styles.formsContainer}>
        <Link className={styles.backButton} to='/'>&larr;</Link>
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
