import React, { Component } from 'react'
import moment from 'moment'

/* Import custom components */
import SingleRangeInput from '../SingleRangeInput/SingleRangeInput'
import TwoRadioButtons from '../TwoRadioButtons/TwoRadioButtons'
/* Import CSS styles */
import styles from './TimeSlider.css'

export default class TimeSlider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showModal = this.showModal.bind(this)
  }

  handleTimeChange (e) {
    const { index, id } = this.props
    const key = e.target.name
    let value = e.target.value
    let time = ''

    if (key === 'hour') {
      time = moment().set('hour', value).format('h:mm A')
    }
    /* If key is minute, convert any value less than 10 to 'mm' format  */
    if (key === 'minutes') {
      time = moment().minute(value).format('h:mm A')
    }

    if (key === 'meridiem') {
      time = moment().set('A', value).format('h:mm A')
    }
    /* Update onTimeChange prop from parent with current time */
    this.props.onTimeChange(time, index, id, 'time')
  }

  hideModal () {
    this.setState({ showModal: false })
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
          {this.props.time}
        </h3>
        { this.state.showModal &&
          <div className={styles.modal}>
            <h2 className={styles.time}>{this.props.time}</h2>
            <div className={styles.hourSlider}>
              <SingleRangeInput
                id='hour'
                name='hour'
                label='Hour'
                min={1}
                max={12}
                step={1}
                onChange={this.handleTimeChange}
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
                onChange={this.handleTimeChange}
              />
            </div>
            <div className={styles.meridiem}>
              <TwoRadioButtons
                firstId='AM'
                secondId='PM'
                name='meridiem'
                onChange={this.handleTimeChange}
              />
            </div>
            <h3 className={styles.closeBtn} onClick={this.hideModal}>Close</h3>
          </div>
        }
      </div>
    )
  }
}
