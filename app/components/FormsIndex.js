import React from 'react';
import { Link } from 'react-router-dom';

import InfantsForm from './infants/InfantsForm';
import ToddlersForm from './toddlers/ToddlersForm';

const FormsIndex = () => {

  return(
    <div>
      <h1>Hello, Abi!</h1>
      <h3>Choose a form</h3>
      <div>
        <Link to='/forms/infants'>
          <button>Infants</button>
        </Link>
        <Link to='/forms/toddlers'>
          <button>Toddlers</button>
        </Link>
      </div>
    </div>
  );
}

export default FormsIndex;
