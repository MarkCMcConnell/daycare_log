import React from 'react'

/* Import custom component */
import List from '../List/List'

import styles from './EmailPreview.css'

/* TODO Add functionality to allow user to redirect to and update specific sections of the form */
const EmailPreview = (props) => {
  let bottlesList = []
  let diapersList = []
  let napsList = []
  let bathroomList = []
  let mealsList = []
  let supplyItems

  if (props.infantNaps) {
    napsList = props.infantNaps.filter(nap => nap.time && nap.length)
  } else if (props.toddlerNaps) {
    napsList = props.toddlerNaps.filter(nap => nap.time && nap.length)
  }

  if (props.suppliesList) {
    supplyItems = props.suppliesList.filter((item) => item.isChecked)
  }

  if (props.age === 'infant') {
    const {today, name, parentEmail, day, bottles, diapers, other} = props

    if (bottles) {
      bottlesList = bottles.filter(bottle => bottle.time && bottle.amount)
    }

    if (diapers) {
      diapersList = diapers.filter(diaper => diaper.time && diaper.type)
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
        {bottlesList.length > 0 ? <List data={bottlesList} /> : null }
        {diapersList.length > 0 ? <h3 className={styles.subheading}>Diapers: </h3> : null}
        {diapersList.length > 0 ? <List data={diapersList} /> : null}
        {napsList.length > 0 ? <h3 className={styles.subheading}>Naps: </h3> : null}
        {napsList.length > 0 ? <List data={napsList} /> : null}
        {supplyItems.length > 0 ? <h3 className={styles.subheading}>Items to bring: </h3> : null}
        {supplyItems.length > 0
          ? <ul>
            {supplyItems.map((item, index) => <li key={index} className={styles.details}>{item.type}</li>)}
            {other && <li className={styles.details}>Other - {other}</li>}
          </ul>
          : null}
      </section>
    )
  } else {
    const { today, name, parentEmail, day, meals, bathroom, other } = props

    if (meals) {
      mealsList = meals.filter(meal => meal.food).map(meal => {
        return <li key={meal} className={styles.item}>{`${meal.time} - ${meal.food}`}</li>
      })
    }

    if (bathroom) {
      bathroomList = bathroom.filter(use => use.times && use.type).map((use, index) => {
        return <li key={`bathroom${index}`} className={styles.details}>{use.times} - {use.type}</li>
      })
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
        {mealsList.length > 0 ? <h3 className={styles.subheading}>Meals: </h3> : null}
        {mealsList.length > 0 ? mealsList : null}
        {bathroomList.length > 0 ? <h3 className={styles.subheading}>Bathroom use: </h3> : null}
        {bathroomList}
        {napsList.length > 0 ? <h3 className={styles.subheading}>Naps: </h3> : null}
        {napsList.length > 0 ? <List data={napsList} /> : null}
        {supplyItems.length > 0 ? <h3 className={styles.subheading}>Items to bring: </h3> : null}
        {supplyItems.length > 0
          ? <ul>
            {supplyItems.map((item, index) => <li key={item + index} className={styles.details}>{item.type}</li>)}
            {other && <li className={styles.details}>Other - {other}</li>}
          </ul>
          : null}
      </section>
    )
  }
}

export default EmailPreview
