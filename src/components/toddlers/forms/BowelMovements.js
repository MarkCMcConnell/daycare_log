import React from 'react';

const BowelMovements = ({bathroom, type}) => {
  return (
    <div>
      <span>Bowel movements for the day</span>
      <select name='times'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <select name='type'>
        <option value='soft'>Soft</option>
        <option value='hard'>Hard</option>
        <option value='normal'>Normal</option>
      </select>
    </div>
  );
}

export default BowelMovements;
