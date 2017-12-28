import React, { Component } from 'react';

class BringItems extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index) {
    this.props.onChange(e.target.name, e.target.checked, index);
  }

  render() {
    const checkbox = this.props.items.map((item, index) => {
      return (
        <div key={index}>
          <input id={item.type} name={item.type} type="checkbox" onChange={(e) => this.handleChange(e, index)} />
          <label htmlFor={item.type}>{item.type}</label>
        </div>
      );
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        {checkbox}
      </div>
    );
  }
}


export default BringItems;
