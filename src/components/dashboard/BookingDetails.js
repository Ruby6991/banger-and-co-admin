import React from 'react'
import { Component } from 'react'
const axios = require("axios")

class BookingDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.booking.id,
            pickupDateTime:this.props.booking.pickupDateTime,
            dropDateTime:this.props.booking.dropDateTime,
            lateState:this.props.booking.lateState,
            extendedState:this.props.booking.extendedState,
            extendedTime:this.props.booking.extendedTime,
            bookingState:this.props.booking.bookingState,
            bookedTime:this.props.booking.bookedTime,
            payment:this.props.booking.payment,
            booking_utility:this.props.booking.booking_utility,
            vehicle_id:this.props.booking.vehicle_id,
            user_id:this.props.booking.user_id
        }
        this.blacklistUser = this.blacklistUser.bind(this);
    }

    blacklistUser() {
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        if (window.confirm("Are you sure you want to blacklist this user?")) {
            axios.post("http://localhost:8080/BlacklistUser/"+ this.state.user_id,config)
            .then(function(res){
                console.log("User blacklisted successfully!");
                alert("User blacklisted successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("User blacklisting un-successful!\nError : ",error.response);
                alert("User blacklisting  un-successful!");
        })
          } else {
            alert("User blacklisting  cancelled");
          }             
    }

    render(){
        return (
            <tr>
                <td class="teal lighten-4"><i><b>{this.state.id}</b></i></td>
                <td>{this.state.pickupDateTime.split('T')[0]+'-'+this.state.dropDateTime.split('T')[0]}</td>
                <td class="teal lighten-4">{this.state.lateState}</td>
                <td>{this.state.extendedState }<br/>{'Extended Time: '+ this.state.extendedTime}</td>
                <td class="teal lighten-4">{this.state.bookingState}</td>
                <td class="center">
                    Booked Time:{this.state.bookedTime}<br/> 
                    Payment:{this.state.payment}<br/> 
                    booking_utility:{this.state.booking_utility}<br/> 
                    vehicle_id:{this.state.vehicle_id}<br/> 
                {/* <button class="waves-effect waves-light btn-small teal lighten-3" onClick={this.blacklistUser}>Blacklist</button> */}
                </td>
                <td>{this.state.user_id}</td>
                <td class="teal lighten-4"><button class="waves-effect btn-flat grey darken-2 white-text" onClick={this.blacklistUser}>Blacklist</button></td>
            </tr>
        )
    }


}

export default BookingDetails;