import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* Component imports */
import Form from './Components/Form/Form'
import FormsNav from './Components/FormsNav/FormsNav'

import '../public/assets/stylesheets/App.css'
/* TODO update routes to push to browser history and change URL based on
   form step */
/* Multi-step form routing */
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FormsNav} />
        <Route path='/forms/:type' component={Form} />
      </div>
    </Router>
  )
}

export default App
