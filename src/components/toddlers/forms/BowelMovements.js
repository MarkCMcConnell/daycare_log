import React from 'react';

const BowelMovements = () => {
  return (
    <div>
      <span>Bowel movements for the day</span>
      <input type="checkbox" id="1" />
      <label htmlFor="1">1</label>
      <input type="checkbox" id="2" />
      <label htmlFor="2">2</label>
      <input type="checkbox" id="3" />
      <label htmlFor="3">3</label>
      <input type="checkbox" id="4" />
      <label htmlFor="4">4</label>
      <input type="checkbox" id="hard" />
      <label htmlFor="hard">Hard</label>
      <input type="checkbox" id="soft" />
      <label htmlFor="soft">Soft</label>
      <input type="checkbox" id="normal" />
      <label htmlFor="normal">Normal</label>

    </div>
  );
}

export default BowelMovements;
