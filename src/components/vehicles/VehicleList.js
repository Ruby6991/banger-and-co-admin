import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import VehicleDetails from './VehicleDetails'
const axios = require("axios")

class VehicleList extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicles:[]
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
        axios.post("http://localhost:8080/GetVehicleList",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            that.setState({
                vehicles:res.data
            })
        }).catch(function(error){
            console.log(error.response);
        })
    }
    render() {
        return (
            <div class="vehicles">
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
                                <span class="card-title center">Manage Vehicles</span>
                                <button class="waves-effect btn-flat teal lighten-3 white-text"><b>Add New Vehicle</b></button>
                                <table class="responsive-table highlight">
                                    <thead>
                                        <tr>
                                            <th class="teal lighten-3">Vehicle ID</th>
                                            <th class=" teal lighten-4">Model</th>
                                            <th class="teal lighten-3">Rates</th>
                                            <th class=" teal lighten-4">Description</th>
                                            <th class="teal lighten-3">Quantity</th>
                                            <th class=" teal lighten-4">Fuel Type</th>
                                            <th class="teal lighten-3">Mileage</th>
                                            <th class=" teal lighten-4">Service Date</th>
                                            <th class="teal lighten-3">Availability</th>
                                            <th class=" teal lighten-4">License No</th>
                                            <th class="teal lighten-3">Image</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { this.state.vehicles && this.state.vehicles.map(vehicle => 
                                        {
                                            return(
                                                <VehicleDetails vehicle={vehicle} key={vehicle.id} />
                                            )
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

export default VehicleList;