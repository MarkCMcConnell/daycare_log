import React, { Component } from 'react';
import moment from 'moment';
import Kronos from 'react-kronos';

class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(datetime) {
    // Parse MomentJS object to get a formatted date in MM-DD-YYYY
    datetime = moment(datetime).format('hh:mm a').toString();
    console.log(datetime);
    this.props.onChangeDateTime(datetime);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Kronos
          time={this.props.time}
          inputId={this.props.id}
          name={this.props.name}
          format={'h:mm a'}
          timeStep={5}
          options={{ format: { hour: 'hh:mm' } }}
          onChangeDateTime={this.handleChange}
        />
      </div>
    );
  }
}

export default TimePicker;
