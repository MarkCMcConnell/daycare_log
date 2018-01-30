import React, { Component } from 'react'

/* Import custom components */
import SingleRangeInput from '../SingleRangeInput/SingleRangeInput'
import TwoRadioButtons from '../TwoRadioButtons/TwoRadioButtons'
/* Import CSS styles */
import styles from './TimeSlider.css'

export default class TimeSlider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hour: this.props.hour,
      minutes: this.props.minutes,
      meridiem: this.props.meridiem,
      time: this.props.time,
      showModal: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.showModal = this.showModal.bind(this)
  }

  handleChange (e) {
    const key = e.target.name
    let value = e.target.value
    /* If key is minute, convert any value less than 10 to 'mm' format  */
    if (key === 'minutes' && value < 10) {
      value = `0${value}`
    }
    /* Update state by computing the key returned by e.target.name that is passed
       as key and assign it the value of e.target.value passed in as value.
       Use setState callback to trigger a re-render to show selected time accurately
       on screen */
    this.setState({ [key]: value }, () => {
      /* Concatenate state into a string for time and update this.state.time */
      let time = this.state.hour + ':' + this.state.minutes + ' ' + this.state.meridiem
      this.setState({ time: time })
    })
  }

  handleTimeChange () {
    const { index, id } = this.props
    /* Set showModal to false to hide the overlay when user selects close */
    this.setState({ showModal: false })
    /* Update onTimeChange prop from parent with current time */
    this.props.onTimeChange(this.state.time, index, id, 'time')
  }

  showModal () {
    /* Change this.state.showModal to true to display modal overlay when user
       clicks on button */
    this.setState({ showModal: true })
  }

  render () {
    return (
      <div className={styles.container}>
        <h3
          className={styles.btn}
          onClick={this.showModal}
        >
          {this.state.time}
        </h3>
        { this.state.showModal &&
          <div className={styles.modal}>
            <h2 className={styles.time}>{this.state.time}</h2>
            <div className={styles.hourSlider}>
              <SingleRangeInput
                id='hour'
                name='hour'
                label='Hour'
                min={1}
                max={12}
                step={1}
                defaultValue={7}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.minuteSlider}>
              <SingleRangeInput
                id='minutes'
                name='minutes'
                label='Minutes'
                min={0}
                max={55}
                step={5}
                defaultValue={30}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.meridiem}>
              <TwoRadioButtons
                firstId='AM'
                secondId='PM'
                name='meridiem'
                onChange={this.handleChange}
              />
            </div>
            <h3 className={styles.closeBtn} onClick={this.handleTimeChange}>Close</h3>
          </div>
        }
      </div>
    )
  }
}
