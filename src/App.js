import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* Component imports */
import Form from './Components/Form/Form'
import FormsNav from './Components/FormsNav/FormsNav'
import GeneralInfo from './Components/GeneralInfo/GeneralInfo'
import DailyActivities from './Components/DailyActivities/DailyActivities'
import MultipleInputs from './Components/MultipleInputs/MultipleInputs'
import SuppliesRequest from './Components/SuppliesRequest/SuppliesRequest'
import TimedMultipleInputs from './Components/TimedMultipleInputs/TimedMultipleInputs'
import TwoSelectOptions from './Components/TwoSelectOptions/TwoSelectOptions'
import UserInfo from './Components/UserInfo/UserInfo'
import EmailPreview from './Components/EmailPreview/EmailPreview'

import '../public/assets/stylesheets/App.css'

/* Multi-step form routing */
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FormsNav} />
        <Route path='/forms/:type' component={Form} />
        <Route path='forms/generalinfo' component={GeneralInfo} />
        <Route path='forms/dailyactivities' component={DailyActivities} />
        <Route path='forms/bottles' component={TimedMultipleInputs} />
        <Route path='forms/meals' component={MultipleInputs} />
        <Route path='forms/bathroom' component={TwoSelectOptions} />
        <Route path='forms/infantnaps' component={TimedMultipleInputs} />
        <Route path='forms/toddlernaps' component={TimedMultipleInputs} />
        <Route path='forms/suppliesrequest' component={SuppliesRequest} />
        <Route path='forms/userinfo' component={UserInfo} />
        <Route path='forms/infantconfirmation' component={EmailPreview} />
        <Route path='forms/toddlerconfirmation' component={EmailPreview} />
      </div>
    </Router>
  )
}

export default App
