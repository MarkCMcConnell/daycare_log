import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { key1: '' },
        { key2: '' },
        { key3: '' },
        { key4: '' }
      ]
    }
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

handleSubmit(event) {
  console.log(this.state);
  event.target.preventDefault();
}

render() {
  return (
    <form>
      <Child data={this.state.data} />
      <input type="submit" onSubmit={this.handleSubmit} />
    </form>
  );
}

const Child = (props) => {
  const dataForms = props.data.map((data) => {
    return (
      <Grandchild data={data} />
    );
  });

  return (
    <div>
      {dataForms}
    </div>
  );
}

const Grandchild = ({key}) => {
  var dataLabel = '';
  switch (key) {
    case 'key1':
      dataLabel = 'Something 1';
      break;
    case 'key2':
      dataLabel = 'Something 2';
      break;
    case 'key3':
      dataLabel = 'Something 3';
      break;
    case 'key4':
      dataLabel = 'Something 4';
      break;
  }

  return (
    <div>
      <label hmtlFor={key} >{dataLabel}</label>
      <input id={key} name={key} />
    </div>
  );
}
