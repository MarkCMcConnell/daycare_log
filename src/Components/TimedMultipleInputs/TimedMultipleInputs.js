import React, { Component } from 'react'

import TimeSlider from '../TimeSlider/TimeSlider'
import SelectOptions from '../SelectOptions/SelectOptions'

import styles from './TimedMultipleInputs.css'

class TimedMultipleInputs extends Component {
  constructor (props) {
    super(props)

    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleTimeChange (time, index, id, key) {
    /* Update onChangeTime prop from parent form */
    this.props.onChangeTime(time, index, id, key)
  }

  handleChange (option, index, id, key) {
    /* Update onChange prop to pass to parent component */
    this.props.onSelect(option, index, id, key)
  }

  render () {
    const inputItems = this.props.items.map((item, index) => {
      const { id, selectLabel, optionsArr, onSelect } = this.props

      return [
        <div key='1'>
          <TimeSlider
            id={id}
            index={index}
            time={item.time}
            onTimeChange={this.handleTimeChange}
          />
        </div>,
        <div key='2'>
          <SelectOptions
            id={id}
            index={index}
            options={optionsArr}
            name={selectLabel}
            onChange={onSelect}
          />
        </div>
      ]
    })

    return (
      <section className={styles.mainContainer}>
        <h2 className={styles.heading}>{this.props.title}</h2>
        <div className={styles.gridContainerEven2x1}>
          <h3 className={styles.heading}>Time</h3>
          <h3 className={styles.heading}>{this.props.selectLabel}</h3>
        </div>
        {
          this.props.rows === 8
            ? <div className={styles.gridContainer2x8}>{inputItems}</div>
            : (this.props.rows === 6)
              ? <div className={styles.gridContainer2x6}>{inputItems}</div>
              : <div className={styles.gridContainer2x4}>{inputItems}</div>
        }
      </section>
    )
  }
}

export default TimedMultipleInputs
