import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// List of Components
import InfantsForm from './Components/Forms/InfantsForm';
import ToddlersForm from './Components/Forms/ToddlersForm';
import FormsNav from './Components/Forms/FormsNav/FormsNav';

// App routing
const App = () => {
  return (
    <Router>
      <div>
        <Route path='/forms/infants' component={ InfantsForm } />
        <Route path='/forms/toddlers' component={ ToddlersForm } />
        <Route path='/' component={FormsNav} />
      </div>
    </Router>
  );
}

export default App;
