import React from 'react'

/* Import custom component */
import List from '../List/List'

import styles from './EmailPreview.css'

/* TODO Add functionality to allow user to redirect to and update specific sections of the form */
const EmailPreview = ({ today, name, parentEmail, day, bottles, diapers, naps, suppliesList, other }) => {
  const supplyItems = suppliesList.filter((item) => item.isChecked)
  const bottlesList = bottles.filter(bottle => bottle.time)
  const diapersList = diapers.filter(diaper => diaper.time)
  const napsList = naps.filter(nap => nap.time)

  return (
    <section className={styles.container}>
      {today && <h3 className={styles.subheading}>{today}</h3>}
      {name && <h3 className={styles.subheading}>{name}</h3>}
      {parentEmail && <h3 className={styles.subheading}>{parentEmail}</h3>}
      {
        day ? <div>
          <h3 className={styles.subheading}>My day was: </h3>
          <span className={styles.details}>{day}</span>
        </div> : null
      }
      {bottlesList.length > 0 ? <h3 className={styles.subheading}>Bottles: </h3> : null}
      <List data={bottlesList} />
      {diapersList.length > 0 ? <h3 className={styles.subheading}>Diapers: </h3> : null}
      <List data={diapersList} />
      {napsList.length > 0 ? <h3 className={styles.subheading}>Naps: </h3> : null}
      <List data={napsList} />
      {supplyItems.length > 0 ? <h3 className={styles.subheading}>Items to bring: </h3> : null}
      <ul>
        {supplyItems.map((item, index) => <li key={index} className={styles.details}>{item.type}</li>)}
        {other && <li className={styles.details}>Other - {other}</li>}
      </ul>
    </section>
  )
}

export default EmailPreview
