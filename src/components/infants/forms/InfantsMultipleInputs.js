import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from '../../shared/TimePicker'

class InfantMultipleInputs extends Component {
  constructor(props) {
    super(props);

    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  handleTimeChange(time, index) {
    
  }

  render() {
    const inputItems = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={item.id}>{this.props.firstLabel}</label>
          <TimePicker id={item.id} name={item.name} time={item.time}
            onChange={this.handleTimeChange}
            onChangeDateTime={(time) => this.handleTimeChange(time, index)} />
          <label htmlFor={item.id}>{this.props.secondLabel}</label>
          <input type='text' id={item.id} name={item}
            onChange={(e) => this.handleChange(e, index)} />
        </div>
      );
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        {inputItems}
      </div>
    );
  }
}

export default InfantMultipleInputs;
