import {Switch, Redirect, Route} from 'react-router-dom'

import Login from './components/LoginPage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
