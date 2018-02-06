import React from 'react'
import moment from 'moment'

import styles from './List.css'

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            {moment(item.time).format('h:mm a')} - {item.amount || item.type || item.length || item.food}
          </li>
        )
      })}
    </ul>
  )
}

export default List
