import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InfantsForm from './components/infants/InfantsForm';
import ToddlersForm from './components/toddlers/ToddlersForm';
import FormsIndex from './components/FormsIndex';

ReactDOM.render(
 <BrowserRouter>
  <div>
    <Switch>
      <Route path='/forms/infants' component={ InfantsForm } />
      <Route path='/forms/toddlers' component={ ToddlersForm } />
      <Route path='/' component={FormsIndex} />
    </Switch>
  </div>
</BrowserRouter>
, document.querySelector('.root'));
