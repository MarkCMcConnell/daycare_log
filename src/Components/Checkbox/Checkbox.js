import React, { Component } from 'react'

import styles from './Checkbox.css'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({ isActive: e.target.checked })
  }

  render () {
    const { id, index, onChange } = this.props
    const gridItem = `gridItem${index}`

    return (
      <div className={styles[`${gridItem}`]}>
        <input
          id={id}
          className={styles.checkboxInput}
          type='checkbox'
          name={id}
          value={id}
          checked={this.state.isActive}
          onChange={onChange}
          onClick={this.handleClick}
        />
        <label
          className={this.state.isActive
            ? `${styles.checkboxLabel} ${styles.isChecked}`
            : `${styles.checkboxLabel}`}
          htmlFor={id}
        >
          {id}
        </label>
      </div>
    )
  }
}

export default Checkbox
