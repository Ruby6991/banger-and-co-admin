import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import UserList from './components/users/UserList'
import VehicleList from './components/vehicles/VehicleList'
import UtilityList from './components/utilities/UtilityList'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/vehicles' component={VehicleList}/>
            <Route exact path='/utilities' component={UtilityList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
