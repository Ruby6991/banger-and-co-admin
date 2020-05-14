import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import UserList from './components/users/UserList'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/users' component={UserList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
