import React from 'react'
import moment from 'moment'

import styles from './List.css'

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        if (item !== 'bathroom' || 'meals') {
          return (
            <li key={index} className={styles.item}>
              {moment(item.time).format('h:mm a')} - {item.amount || item.type || item.length || item.food}
            </li>
          )
        } else {
          return (
            <li key={index} className={styles.item}>
              {item.times || item.time} - {item.type || item.food}
            </li>
          )
        }
      })}
    </ul>
  )
}

export default List
