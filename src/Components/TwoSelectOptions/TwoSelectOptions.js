import React, { Component } from 'react'

import styles from './TwoSelectOptions.css'

class TwoSelectOptions extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { id } = this.props
    const index = 0
    const key = e.target.name
    const value = e.target.value

    this.props.onSelect(value, index, id, key)
  }

  render () {
    return (
      <div className={styles.container}>
        <h2>Bowel movements</h2>
        <div className={styles.gridContainer2x1}>
          <select className={styles.selectBox} name='times' onChange={(e) => this.handleChange(e)}>
            <option className={styles.optionText} value='' defaultValue />
            <option className={styles.optionText} value='1'>1</option>
            <option className={styles.optionText} value='2'>2</option>
            <option className={styles.optionText} value='3'>3</option>
            <option className={styles.optionText} value='4'>4</option>
          </select>
          <select className={styles.selectBox} name='type' onChange={(e) => this.handleChange(e)}>
            <option className={styles.optionText} value='' defaultValue />
            <option className={styles.optionText} value='soft'>Soft</option>
            <option className={styles.optionText} value='hard'>Hard</option>
            <option className={styles.optionText} value='normal'>Normal</option>
          </select>
        </div>
      </div>
    )
  }
}

export default TwoSelectOptions
