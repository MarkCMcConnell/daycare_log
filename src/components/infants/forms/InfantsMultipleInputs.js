import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from '../../shared/TimePicker'

class InfantMultipleInputs extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTimeFormChange = this.handleTimeFormChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  handleTimeFormChange(time, index) {
    let selectedTime = moment(time).format('h:mm a');
    this.props.onChangeDateTime(selectedTime, index);
  }

  render() {
    const inputItems = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={index}>{this.props.firstLabel}</label>
          <TimePicker id={index} time={item.time}
            onChangeDateTime={(time) => this.handleTimeFormChange(time, index)}
          />
          <label htmlFor={index}>{this.props.secondLabel}</label>
          <input type='text' id={index} name={item}
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
