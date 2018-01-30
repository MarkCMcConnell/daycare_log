import React from 'react'

/* Import form components */
import DatePicker from '../DayPicker/DayPicker'
import SingleInput from '../SingleInput/SingleInput'

/* Import CSS sheets */
import styles from './GeneralInfo.css'

const GeneralInfo = ({ date, onChange, onDateChange }) => {
  return (
    <section className={styles.gridContainer1x1}>
      <DatePicker
        className={styles.gridItem}
        id='today'
        date={date}
        onDateChange={onDateChange}
      />
      <SingleInput
        className={styles.gridItem}
        id='name'
        name='name'
        type='text'
        label='Child&#39;s name'
        onChange={onChange}
      />
      <SingleInput
        className={styles.gridItem}
        id='parentEmail'
        name='parentEmail'
        type='email'
        label='Parent&#39;s Email'
        onChange={onChange}
      />
    </section>
  )
}

export default GeneralInfo
