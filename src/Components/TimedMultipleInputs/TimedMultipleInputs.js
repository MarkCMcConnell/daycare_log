import React, { Component } from 'react'
import moment from 'moment'

import Time from '../TimePicker/TimePicker'
import SelectOptions from '../SelectOptions/SelectOptions'

import styles from './TimedMultipleInputs.css'

class InfantMultipleInputs extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleTimeFormChange = this.handleTimeFormChange.bind(this)
  }

  handleChange (e, index, id) {
    this.props.onChange(e.target.value, index, id)
  }

  handleTimeFormChange (time, index, id) {
    let selectedTime = moment(time).format('h:mm a')
    this.props.onChangeTime(selectedTime, index, id)
  }

  render () {
    const inputItems = this.props.items.map((item, index) => {
      if (this.props.id === 'bottles') {
        let optionsArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

        return [
          <div key='time'>
            <label htmlFor={index}>Time: </label>
            <Time id={index} time={item.time}
              onChangeTime={(time) => this.handleTimeFormChange(time, index, this.props.id)}
            />
          </div>,
          <div key='amount'>
            <label htmlFor={index}>{this.props.selectLabel}</label>
            <SelectOptions
              options={optionsArr}
              measurement='oz'
              name={item}
              onChange={(e) => this.handleChange(e, index, this.props.id)}
            />
          </div>
        ]
      } else if (this.props.id === 'diapers') {
        let optionsArr = ['', 'wet', 'dirty']
        // TODO Change label for SelectOptions to match the type
        return [
          <div key='1'>
            <label htmlFor={index}>Time: </label>
            <Time id={index} time={item.time}
              onChangeTime={(time) => this.handleTimeFormChange(time, index, this.props.id)}
            />
          </div>,
          <div key='2'>
            <label htmlFor={index}>{this.props.selectLabel}</label>
            <SelectOptions
              options={optionsArr}
              measurement=''
              name={item}
              onChange={(e) => this.handleChange(e, index, this.props.id)}
            />
          </div>
        ]
      } else {
        let optionsArr = ['30 minutes', '45 minutes', '1 hour', '1.25 hours',
          '1.5 hours', '1.75 hours', '2 hours', '2.25 hours', '2.5 hours', '2.75 hours', '3 hours']
        return [
          <div key='1'>
            <label htmlFor={index}>Time: </label>
            <Time id={index} time={item.time}
              onChangeTime={(time) => this.handleTimeFormChange(time, index, this.props.id)}
            />
          </div>,
          <div key='2'>
            <label htmlFor={index}>{this.props.selectLabel}</label>
            <SelectOptions
              options={optionsArr}
              measurement=''
              name={item}
              onChange={(e) => this.handleChange(e, index, this.props.id)}
            />
          </div>
        ]
      }
    })

    return (
      <section className={styles.mainContainer}>
        <h3>{this.props.title}</h3>
        {
          (this.props.rows === 8)
            ? <div className={styles.gridContainer2x8}>{inputItems}</div>
            : (this.props.rows === 6)
              ? <div className={styles.gridContainer2x6}>{inputItems}</div>
              : <div className={styles.gridContainer2x4}>{inputItems}</div>
        }
      </section>
    )
  }
}

export default InfantMultipleInputs
