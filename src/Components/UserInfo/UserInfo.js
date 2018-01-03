import React, { Component } from 'react';

import SingleInput from '../SingleInput/SingleInput';

import styles from './UserInfo.css';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  //TODO Validation methods

  render() {
    return (
      <div>
        <SingleInput
          id="providerEmail"
          type="email"
          label="Provider Email: "
          onChange={onChange}
        />
        <SingleInput
          id="providerUsername"
          type="text"
          label="Provider Email Username: "
          onChange={onChange}
        />
        <SingleInput
          id="providerPassword"
          type="password"
          label="Provider Email Password: "
          onChange={onChange}
        />
      </div>
    );
  }
}
