import React from 'react'

/* Components import */
import EmailPreview from '../EmailPreview/EmailPreview'

const Confirmation = ({ today, name, parentEmail, day, bottles, diapers, naps, suppliesList, other }) => {
  return (
    <EmailPreview
      today={today}
      name={name}
      parentEmail={parentEmail}
      day={day}
      bottles={bottles}
      diapers={diapers}
      naps={naps}
      suppliesList={suppliesList}
      other={other}
    />
  )
}

export default Confirmation
