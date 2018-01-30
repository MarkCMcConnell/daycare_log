import React from 'react'

/* Component import */
import TextArea from '../TextArea/TextArea'

const DailyActivities = ({ name, onChange }) => {
  return (
    <TextArea
      label='My day was: '
      id='myDay'
      name={name}
      rows='8'
      cols='25'
      onChange={onChange}
    />
  )
}

export default DailyActivities
