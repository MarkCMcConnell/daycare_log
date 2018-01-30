import React from 'react'
/* Component imports */
import SingleInput from '../SingleInput/SingleInput'
import SuppliesList from '../SuppliesList/SuppliesList'

import styles from './SuppliesRequest.css'

const SuppliesRequest = ({ id, items, onChange, onListChange }) => {
  return (
    <section>
      <SuppliesList
        title='Items Needed'
        id={id}
        items={items}
        onListChange={onListChange}
      />
      <div className={styles.gridContainer1x1}>
        <SingleInput
          id='other'
          name='other'
          type='text'
          label='Other: '
          onChange={onChange}
        />
      </div>
    </section>
  )
}

export default SuppliesRequest
