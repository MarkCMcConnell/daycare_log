import React from 'react'

import styles from './List.css'

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return <li key={index} className={styles.item}>{item.time} - {item.amount || item.type || item.length}</li>
      })}
    </ul>
  )
}

export default List
