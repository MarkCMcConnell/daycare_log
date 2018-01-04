import React from 'react'

import SingleInput from '../SingleInput/SingleInput'

import styles from './UserInfo.css'

const UserInfo = ({ onChange }) => {
  // TODO Validation methods

  return (
    <div>
      <SingleInput
        id='providerEmail'
        name='providerEmail'
        type='email'
        label='Provider Email: '
        onChange={onChange}
      />
      <SingleInput
        id='providerUsername'
        name='providerUsername'
        type='text'
        label='Provider Email Username: '
        onChange={onChange}
      />
      <SingleInput
        id='providerPassword'
        name='providerPassword'
        type='password'
        label='Provider Email Password: '
        onChange={onChange}
      />
    </div>
  )
}

export default UserInfo
