import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredClients from './pages/RegisteredClients';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/registeredclients' component={RegisteredClients} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    )
  }

}

export default App;
