import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'

import 'react-day-picker/lib/style.css'
import styles from './DayPicker.css'

class DatePicker extends Component {
  constructor (props) {
    super(props)

    this.handleDayChange = this.handleDayChange.bind(this)
  }

  handleDayChange (day) {
    this.props.onChange(day)
  }

  render () {
    return (
      <div>
        <label className={styles.pickerLabel} htmlFor={this.props.id}>Today's Date: </label>
        <DayPickerInput
          className={styles.pickerInput}
          id={this.props.id}
          onDayClick={this.handleDayChange}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={this.props.date}
          dayPickerProps={{
            todayButton: 'Today'
          }}
        />
      </div>
    )
  }
}

export default DatePicker
