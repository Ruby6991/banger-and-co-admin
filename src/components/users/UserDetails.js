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
        // this.blacklistUser = this.blacklistUser.bind(this);
    }

    // blacklistUser() {
    //     const config = {
    //         headers:{
    //             Authorization:'Bearer '+ localStorage.token
    //         }
    //     }
    //     if (window.confirm("Are you sure you want to blacklist this user?")) {
    //         axios.post("http://localhost:8080/BlacklistUser/"+ this.state.email,config)
    //         .then(function(res){
    //             console.log("User blacklisted successfully!");
    //             alert("User blacklisted successfully!");
    //             window.location.reload();
    //         }).catch(function(error){
    //             console.log("User blacklisting un-successful!\nError : ",error.response);
    //             alert("User blacklisting  un-successful!");
    //     })
    //       } else {
    //         alert("User blacklisting  cancelled");
    //       }             
    // }

    render(){
        return (
            <tr>
                <td class="teal lighten-4"><i><b>{this.state.email}</b></i></td>
                <td>{this.state.firstName+' '+this.state.lastName}</td>
                <td class="teal lighten-4">{this.state.dateOfBirth!==null?(this.state.dateOfBirth.split('T')[0]):("")}</td>
                <td>{this.state.address}</td>
                <td class="teal lighten-4">{this.state.phoneNo}</td>
                <td class="center">{this.state.customerState} <br/> 
                {/* <button class="waves-effect waves-light btn-small teal lighten-3" onClick={this.blacklistUser}>Blacklist</button> */}
                </td>
                <td class="teal lighten-4"><button class="waves-effect btn-flat grey darken-2 white-text">Docs</button></td>
            </tr>
        )
    }


}

export default UserDetails;