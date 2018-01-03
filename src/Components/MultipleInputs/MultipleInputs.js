import React, { Component } from 'react';
import SingleInput from '../SingleInput/SingleInput';
import Step from '../Step/Step';

import styles from './MultipleInputs.css';

class MultipleInputs extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  render () {
    const inputItems = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <SingleInput
            label={item.time}
            type='text'
            name={item}
            onChange={(e) => this.handleChange(e, index)}
          />
        </div>
      );
    });

    return (
      <div>
        {inputItems}
        <Step id='previous' text='Previous' onClick={this.props.prevStep} />
        <Step id='next' text='Next' onClick={this.props.nextStep} />
      </div>
    );
  }
}

export default MultipleInputs;
