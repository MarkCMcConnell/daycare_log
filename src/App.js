import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// List of Components
import InfantsForm from './Components/InfantsForm/InfantsForm'
import ToddlersForm from './Components/ToddlersForm/ToddlersForm'
import FormsNav from './Components/FormsNav/FormsNav'

import '../public/assets/stylesheets/App.css'

// App routing
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FormsNav} />
        <Route path='/forms/infants' component={InfantsForm} />
        <Route path='/forms/toddlers' component={ToddlersForm} />
      </div>
    </Router>
  )
}

export default App
