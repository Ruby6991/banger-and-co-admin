import React from 'react'
import { Component } from 'react'
import { Redirect } from "react-router-dom";
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
            customerState:this.props.user.customerState,
            license:this.props.user.driversLicense,
            viewDocs:false
        }
        this.viewDocs = this.viewDocs.bind(this);
    }

    viewDocs(){
        this.setState({
            viewDocs:true
        })
    }

    render(){
        return (
            <tr>
                {
                   this.state.viewDocs?(
                    <Redirect to={{
                            state: {
                                id:this.state.email,
                                firstName:this.state.firstName,
                                lastName:this.state.lastName,
                                license:this.state.license},
                            pathname: '/userDocs'
                          }}/>
                   ):("")
                }
                <td class="teal lighten-4"><i><b>{this.state.email}</b></i></td>
                <td>{this.state.firstName+' '+this.state.lastName}</td>
                <td class="teal lighten-4">{this.state.dateOfBirth!==null?(this.state.dateOfBirth.split('T')[0]):("")}</td>
                <td>{this.state.address}</td>
                <td class="teal lighten-4">{this.state.phoneNo}</td>
                <td class="center">{this.state.customerState} <br/> 
                </td>
                <td class="teal lighten-4"><button class="waves-effect btn-flat grey darken-2 white-text" onClick={this.viewDocs}>Docs</button></td>
            </tr>
        )
    }


}

export default UserDetails;