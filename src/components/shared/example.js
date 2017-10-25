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
}

render() {
  return (
    <form>
      <Child data={this.state.data} />
    </form>
  );
}

const Child = (props) => {
  const dataLabels = [ 'Stuff', 'And', 'Things', 'Labels' ];

  const dataForms = props.data.map((data) => {
    return (
      <Grandchild data={data} />
    );
  });

  return (
    {dataForms}
  );
}

const Grandchild = ({key}) => {
  return (
    <div>
      <label hmtlFor={key} >dataLabel</label>
      <input id={key} name={key} />
    </div>
  );
}
