import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import Today from '../shared/Today';
import Name from '../shared/Name';
import Day from '../shared/Day';
import DiaperChanges from './forms/DiaperChanges';
import Bottles from './forms/Bottles';
import NapTime from '../shared/NapTime';
import BringItems from '../shared/BringItems';
import Email from '../shared/Email';
import Submit from '../shared/Submit';

class InfantsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      day: '',
      bottles: [],
      diapers: [],
      naps: [],
      bring: []
    }

  }

  render() {
    return (
      <div>
        <h1>Infants</h1>
        <Link to='/'> Go back</Link>
        <form>
          <Today />
          <Name />
          <Day />
          <Bottles />
          <DiaperChanges />
          <NapTime />
          <BringItems />
          <Email />
          <Submit />
        </form>
      </div>
    );
  }
}

export default InfantsForm;
