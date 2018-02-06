import React, { Component } from 'react'

import TimeSlider from '../TimeSlider/TimeSlider'
import SelectOptions from '../SelectOptions/SelectOptions'

import styles from './TimedMultipleInputs.css'

const TimedMultipleInputs = ({ title, items, rows, id, selectLabel, optionsArr, onSelect, onChangeTime }) => {
  const inputItems = items.map((item, index) => {
    return [
      <div key='1'>
        <TimeSlider
          id={id}
          index={index}
          time={item.time}
          onChangeTime={onChangeTime}
        />
      </div>,
      <div key='2'>
        <SelectOptions
          id={id}
          index={index}
          options={optionsArr}
          name={selectLabel}
          onSelect={onSelect}
        />
      </div>
    ]
  })

  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.gridContainerEven2x1}>
        <h3 className={styles.heading}>Time</h3>
        <h3 className={styles.heading}>{selectLabel}</h3>
      </div>
      {
        rows === 8
          ? <div className={styles.gridContainer2x8}>{inputItems}</div>
          : (rows === 6)
            ? <div className={styles.gridContainer2x6}>{inputItems}</div>
            : <div className={styles.gridContainer2x4}>{inputItems}</div>
      }
    </section>
  )
}

export default TimedMultipleInputs
