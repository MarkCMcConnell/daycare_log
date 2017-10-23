import React from 'react';

const BringItems = () => {
  return (
    <div>
      <h3>Please bring the following tomorrow</h3>
      <input type="checkbox" id="diapers" />
      <label htmlFor="diapers">Diapers </label>
      <input type="checkbox" id="wipes" />
      <label htmlFor="wipes">Wipes </label>
      <input type="checkbox" id="forumla" />
      <label htmlFor="forumula">Formula </label>
      <input type="checkbox" />
      <label htmlFor="clothes">Change of clothes </label>
      <input type="checkbox" id="ointment" />
      <label htmlFor="ointment">Ointment </label>
      <input type="checkbox" id="other" />
      <label htmlFor="other">Other </label>
      <input type="text" />
    </div>
  );
}


export default BringItems;
