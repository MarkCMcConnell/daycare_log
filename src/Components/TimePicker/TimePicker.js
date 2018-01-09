import React, { Component } from 'react'
import TimePicker from 'react-times'

import 'react-times/css/material/default.css'
import styles from './TimePicker.css';

class Time extends Component {
  constructor (props) {
    super(props)

    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  // TODO: Add in functionality for updating time

  handleTimeChange (time) {
    console.log(time)
    this.props.onChangeTime(time)
  }

  render () {
    return (
      <div>
        <TimePicker
          theme='material'
          timeMode='12'
          withoutIcon
          minuteStep={5}
          limitDrag
          onTimeChange={this.handleTimeChange}
        />
      </div>
    )
  }
}

export default Time
