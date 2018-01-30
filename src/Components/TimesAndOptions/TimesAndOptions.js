import React from 'react'
/* Component import */
import TimedMultipleInputs from '../TimedMultipleInputs/TimedMultipleInputs'

const TimesAndOptions = ({ title, id, rows, selectLabel, items, optionsArr, onChange, onChangeTime }) => {
  return (
    <TimedMultipleInputs
      title={title}
      id={id}
      name={id}
      rows={rows}
      selectLabel={selectLabel}
      items={items}
      optionsArr={optionsArr}
      onChange={onChange}
      onChangeTime={onChangeTime}
    />
  )
}

export default TimesAndOptions
