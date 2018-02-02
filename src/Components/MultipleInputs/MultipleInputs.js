import React, { Component } from 'react'
import SingleInput from '../SingleInput/SingleInput'

import styles from './MultipleInputs.css'

class MultipleInputs extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, index, id, key) {
    this.props.onChange(e.target.value, index, id, key)
  }

  render () {
    const inputItems = this.props.items.map((item, index) => {
      const { id, label } = this.props
      return (
        <SingleInput
          key={index}
          className={styles.gridItem}
          label={item.time}
          type='text'
          name={item}
          onChange={(e) => this.handleChange(e, index, id, label)}
        />
      )
    })

    return (
      <div className={styles.gridContainer1x1}>
        <h2 className={styles.heading}>{this.props.title}</h2>
        {inputItems}
      </div>
    )
  }
}

export default MultipleInputs
