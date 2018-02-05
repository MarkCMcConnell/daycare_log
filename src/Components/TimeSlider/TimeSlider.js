import React, { Component } from 'react'
import moment from 'moment'

/* Import custom components */
import SingleRangeInput from '../SingleRangeInput/SingleRangeInput'
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
    let time

    /* Determine whether the input is for hours and minutes.
       Update time accordingly. */
    if (key === 'hour') {
      time = moment(this.props.time).hour(value)
    }

    if (key === 'minutes') {
      time = moment(this.props.time).minute(value)
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
    const time = moment(this.props.time).format('h:mm a').toString()
    return (
      <div className={styles.container}>
        <h3
          className={styles.btn}
          onClick={this.showModal}
        >
          {time}
        </h3>
        { this.state.showModal &&
          <div className={styles.modal}>
            <h2 className={styles.time}>{time}</h2>
            <div className={styles.hourSlider}>
              <SingleRangeInput
                id='hour'
                name='hour'
                label='Hour'
                min={7}
                max={18}
                step={1}
                defaultValue={12}
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
                defaultValue={30}
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
