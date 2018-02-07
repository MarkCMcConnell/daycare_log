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
        <Route path='/forms/:type/generalinfo' component={Form} />
        <Route path='/forms/:type/meals' component={Form} />
        <Route path='/forms/:type/bathroom' component={Form} />
        <Route path='/forms/:type/naps' component={Form} />
        <Route path='/forms/:type/supplies' component={Form} />
        <Route path='/forms/:type/userinfo' component={Form} />
        <Route path='/forms/:type/preview' component={Form} />
        <Route path='/forms/:typegeneralinfo' component={Form} />
      </div>
    </Router>
  )
}

export default App
