//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react';
import Navbar from '../layout/Navbar'
import UserDetails from './UserDetails'

class Dashboard extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <div class="users">
                <Navbar/>
                <div class="content bg">
                    <div class="row">
                        <div class="col s12">
                            <div class="card card-bg">
                                <span class="card-title center">Manage Users</span>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Full Name</th>
                                        <th>Date of Birth</th>
                                        <th>Address</th>
                                        <th>Phone Number</th>
                                        <th>Customer State</th>
                                        <th>Documents</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                        <UserDetails/>
                                        <UserDetails/>
                                        <UserDetails/>
                                        <UserDetails/>
                                        <UserDetails/>
                                        <UserDetails/>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default Dashboard;