import React, { Component } from 'react'

import styles from './SelectOptions.css'

class SelectOptions extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { index, id, name } = this.props
    const option = e.target.value
    /* Convert the label name to lowercase to match state key in parent */
    let key = name.toLowerCase()

    this.props.onSelect(option, index, id, key)
  }

  render () {
    return (
      <select className={styles.selectBox} name={this.props.name} onChange={this.handleChange}>
        {this.props.options.map((option, index) => {
          /* Set default value as an empty string choice */
          if (option === '') {
            return (
              <option
                className={styles.optionText}
                key={index}
                value={option}
                defaultValue
              >
                {option}
              </option>
            )
          } else {
            return (
              <option
                className={styles.optionText}
                key={index}
                value={option}
              >
                {option}
              </option>
            )
          }
        })}
      </select>
    )
  }
}

export default SelectOptions
