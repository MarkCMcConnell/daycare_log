import React from 'react'

import styles from './TextArea.css'

const TextArea = ({label, name, rows, cols, onChange}) => {
  return (
    <textarea
      placeholder={label}
      className={styles.sizing}
      name={name}
      rows={rows}
      cols={cols}
      onChange={onChange}
    />
  )
}

export default TextArea
