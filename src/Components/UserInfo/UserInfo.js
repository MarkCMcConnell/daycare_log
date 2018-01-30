import React from 'react'

import SingleInput from '../SingleInput/SingleInput'

import styles from './UserInfo.css'

const UserInfo = ({ onChange }) => {
  // TODO Validation methods

  return (
    <div className={styles.gridContainer1x1}>
      <SingleInput
        className={styles.gridItem}
        id='providerEmail'
        name='providerEmail'
        type='email'
        label='Provider Email: '
        onChange={onChange}
      />
      <SingleInput
        className={styles.gridItem}
        id='providerUsername'
        name='providerUsername'
        type='text'
        label='Provider Email Username: '
        onChange={onChange}
      />
      <SingleInput
        className={styles.gridItem}
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
