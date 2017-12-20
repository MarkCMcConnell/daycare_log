import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InfantsForm from './Components/Forms/InfantsForm';
import ToddlersForm from './Components/Forms/ToddlersForm';
import FormsNav from './Components/Forms/FormsNav/FormsNav';

ReactDOM.render(
 <BrowserRouter>
  <div>
    <Switch>
      <Route path='/forms/infants' component={ InfantsForm } />
      <Route path='/forms/toddlers' component={ ToddlersForm } />
      <Route path='/' component={FormsNav} />
    </Switch>
  </div>
</BrowserRouter>
, document.querySelector('.root'));
