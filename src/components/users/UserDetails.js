import React from 'react'
import { Component } from 'react'
const axios = require("axios")

class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:this.props.user.email,
            firstName:this.props.user.firstName,
            lastName:this.props.user.lastName,
            dateOfBirth:this.props.user.dateOfBirth,
            address:this.props.user.address,
            phoneNo:this.props.user.phoneNo,
            customerState:this.props.user.customerState
        }
    }

    render(){
        return (
            <tr>
                <td class="teal lighten-4"><i><b>{this.state.email}</b></i></td>
                <td>{this.state.firstName+' '+this.state.lastName}</td>
                <td class="teal lighten-4">{this.state.dateOfBirth!==null?(this.state.dateOfBirth.split('T')[0]):("")}</td>
                <td>{this.state.address}</td>
                <td class="teal lighten-4">{this.state.phoneNo}</td>
                <td class="center">{this.state.customerState} <br/> 
                </td>
                <td class="teal lighten-4"><button class="waves-effect btn-flat grey darken-2 white-text">Docs</button></td>
            </tr>
        )
    }


}

export default UserDetails;