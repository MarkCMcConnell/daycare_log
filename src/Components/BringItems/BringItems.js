import React, { Component } from 'react'

import Checkbox from '../Checkbox/Checkbox'

import styles from './BringItems.css'

class BringItems extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, index) {
    this.props.onChange(e.target.name, e.target.checked, index)
  }

  render () {
    const checkbox = this.props.items.map((item, index) => {

      return (
        <Checkbox
          id={item.type}
          index={index}
          key={`${item.type} + ${index}`}
          onChange={(e) => this.handleChange(e, index)}
        />
      )
    })

    return (
      <div className={styles.container}>
        <h3 className={styles.titleText}>{this.props.title}</h3>
        {checkbox}
      </div>
    )
  }
}

export default BringItems
