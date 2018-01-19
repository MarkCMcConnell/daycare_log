import React, { Component } from 'react'

import styles from './TwoRadioButtons.css'

class TwoRadioButtons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isChecked: this.props.firstId
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({ isChecked: e.target.value })
  }

  render () {
    const { firstId, secondId, name, onChange} = this.props

    return (
      <div className={styles.toggleContainer}>
        <input
          type='radio'
          id={firstId}
          name={name}
          className={styles.radioInput}
          value={firstId}
          checked={this.state.isChecked === this.props.firstId}
          onClick={this.handleClick}
          onChange={onChange}
        />
        <label
          className={this.state.isChecked === this.props.firstId
            ? `${styles.radioLabel} ${styles.isChecked}` 
            : `${styles.radioLabel}`}
          htmlFor={firstId}
        >
          {firstId}
        </label>
        <input
          type='radio'
          name={name}
          id={secondId}
          className={styles.radioInput}
          value={secondId}
          checked={this.state.isChecked === this.props.secondId}
          onClick={this.handleClick}
          onChange={onChange}
        />
        <label
          className={this.state.isChecked === this.props.secondId
            ? `${styles.radioLabel} ${styles.isChecked}`
            : `${styles.radioLabel}`}
          htmlFor={secondId}
        >
          {secondId}
         </label>
      </div>
    )
  }
}

export default TwoRadioButtons
