//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import UserDetails from './UserDetails'
const axios = require("axios")

class UserList extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        const that = this;
        console.log(localStorage);
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const data = {
            email:localStorage.email
        }
        console.log(headersInfo);
        axios.post("http://localhost:8080/GetUserList",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            that.setState({
                users:res.data
            })
        }).catch(function(error){
            console.log(error.response);
        })
    }
    render() {
        return (
            <div class="users">
                <Navbar/>
                <nav>
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field teal lighten-3">
                            <input id="search" type="search" required/>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div class="content bg">
                    <div class="row">
                        <div class="col s12">
                            <div class="card card-bg">
                                <span class="card-title center">Manage Users</span>
                                <table class="responsive-table highlight">
                                    <thead>
                                    <tr>
                                        <th class="teal lighten-3">User ID</th>
                                        <th class=" teal lighten-4">Full Name</th>
                                        <th class="teal lighten-3">Date of Birth</th>
                                        <th class=" teal lighten-4">Address</th>
                                        <th class="teal lighten-3">Phone Number</th>
                                        <th class=" teal lighten-4">Customer State</th>
                                        <th class="teal lighten-3">Documents</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                        { this.state.users && this.state.users.map(user => 
                                        {
                                            if(user.userType!=='Admin')
                                            {
                                                return(
                                                    <UserDetails user={user} key={user.id} />
                                                )
                                            }
                                        })}
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

export default UserList;