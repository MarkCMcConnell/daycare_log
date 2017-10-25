import React from 'react';

const Email = ({email}) => {
  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" value={email}/>
    </div>
  );
}

export default Email;
