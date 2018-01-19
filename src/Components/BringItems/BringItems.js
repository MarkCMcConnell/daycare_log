import React, { Component } from 'react'

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
      let gridItem = `gridItem${index}`
      return (
        <div className={gridItem} key={index}>
          <input id={item.type} name={item.type} type='checkbox' onChange={(e) => this.handleChange(e, index)} />
          <label htmlFor={item.type}>{item.type}</label>
        </div>
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
