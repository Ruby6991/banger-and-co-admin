import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import UserList from './components/users/UserList'
import VehicleList from './components/vehicles/VehicleList'
import UtilityList from './components/utilities/UtilityList'
import UpdateVehicle from './components/vehicles/UpdateVehicle';
import UpdateBooking from './components/dashboard/UpdateBooking';
import UpdateUtility from './components/utilities/UpdateUtility';
import UserDocs from './components/users/UserDocs';
import CompetitorInfo from './components/dashboard/CompetitorInfo';

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
            <Route exact path='/updateVehicle' component={UpdateVehicle}/>
            <Route exact path='/updateBooking' component={UpdateBooking}/>
            <Route exact path='/updateUtility' component={UpdateUtility}/>
            <Route exact path='/userDocs' component={UserDocs}/>
            <Route exact path='/competitorInfo' component={CompetitorInfo}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
