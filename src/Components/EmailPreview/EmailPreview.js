import React from 'react'

/* Import custom component */
import List from '../List/List'

import styles from './EmailPreview.css'

/* TODO Add functionality to allow user to redirect to and update specific sections of the form */
const EmailPreview = ({today, name, parentEmail, day, bottles, diapers, infantNaps, meals, bathroom, toddlerNaps, suppliesList, other}) => {
  const supplyItems = suppliesList.filter((item) => item.isChecked)
  let bottlesList = []
  let diapersList = []
  let napsList = []
  let mealsList = []
  let bathroomList = []

  if (bottles) {
    bottlesList = bottles.filter(bottle => bottle.time && bottle.amount)
  } else {
    mealsList = meals.filter(meal => meal.food)
  }

  if (diapers) {
    diapersList = diapers.filter(diaper => diaper.time && diaper.type)
  }

  if (infantNaps) {
    napsList = infantNaps.filter(nap => nap.time && nap.length)
  } else {
    napsList = toddlerNaps.filter(nap => nap.time && nap.length)
  }

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
      {mealsList.length > 0 ? <h3 className={styles.subheading}>Meals: </h3> : null}
      <List data={mealsList} />
      {diapersList.length > 0 ? <h3 className={styles.subheading}>Diapers: </h3> : null}
      <List data={diapersList} />
      {bathroom ? <h3 className={styles.subheading}>Bathroom use: </h3> : null}
      {bathroom
        ? <li className={styles.item}>{bathroom.times} - {bathroom.type}</li>
        : null}
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
