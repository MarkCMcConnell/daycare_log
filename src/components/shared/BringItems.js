import React from 'react';

const BringItems = () => {
  return (
    <div>
      <h3>Please bring the following tomorrow</h3>
      <input type="checkbox" id="diapers" name="diapers" />
      <label htmlFor="diapers">Diapers </label>
      <input type="checkbox" id="wipes" name="wipes" />
      <label htmlFor="wipes">Wipes </label>
      <input type="checkbox" id="forumla" name="formula" />
      <label htmlFor="forumula">Formula </label>
      <input type="checkbox" id="clothes" name="" />
      <label htmlFor="clothes">Change of clothes </label>
      <input type="checkbox" id="ointment" name="" />
      <label htmlFor="ointment">Ointment </label>
      <label htmlFor="other">Other </label>
      <input type="text" name="" />
    </div>
  );
}


export default BringItems;
