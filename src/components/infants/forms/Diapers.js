import React, { Component } from 'react';

class Diapers extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.value, index);
  }

  render() {
    const inputItems = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={item.id}>{this.props.firstLabel}</label>
          <input id={item.id} name={item}
            onChange={(e) => this.handleChange(e, index)} />
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
