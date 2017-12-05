import React, { Component } from 'react';
import TimePicker from '../../shared/TimePicker';

class Diapers extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  handleTimeChange(time, index) {
    let selectedTime = moment(time).format('h:mm a');
    this.props.onChangeDateTime(selectedTime, index);
  }

  render() {
    const inputItems = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={item.id}>{this.props.firstLabel}</label>
          <TimePicker id={index} time={item.time}
            onChangeDateTime={(time) => this.handleTimeChange(time, index)}
          />
          <select name='type' onChange={(e) => this.handleChange(e, index)}>
            <option value='wet'>Wet</option>
            <option value='dirty'>Dirty</option>
          </select>
        </div>
      )
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        {inputItems}
      </div>
    );
  }
}

export default Diapers;
