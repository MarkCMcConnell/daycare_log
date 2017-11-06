import React, { Component } from 'react';
import moment from 'moment';
import Kronos from 'react-kronos';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(datetime) {
    // Parse MomentJS object to get a formatted date in MM-DD-YYYY
    datetime = moment(datetime).format('MM-DD-YYYY').toString();
    console.log(datetime);
    this.props.onChangeDateTime(datetime);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Kronos
          inputId={this.props.id}
          name={this.props.name}
          format={ 'MM-DD-YYYY'}
          onChangeDateTime={this.handleChange}
        />
      </div>
    );
  }
}

export default DatePicker;
