import React, { Component } from 'react';
import M from "materialize-css";
import { Redirect } from "react-router-dom";
const axios = require("axios");


class VehicleDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.vehicle.id,
            rates:this.props.vehicle.rates,
            description:this.props.vehicle.description,
            mileage:this.props.vehicle.mileage,
            serviceDate:this.props.vehicle.serviceDate,
            imgUrl:this.props.vehicle.imgUrl,
            updateVehicle:false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});

        const select = document.querySelectorAll('select');
        M.FormSelect.init(select, {});
    }

    handleDelete() {
        //ADD VALIDATION
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            axios.delete("http://localhost:8080/DeleteVehicle/"+ this.state.id,config)
            .then(function(res){
                console.log("Vehicle deleted successfully!");
                alert("Vehicle deleted successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Vehicle delete un-successful!\nError : ",error.response);
                alert("Vehicle delete un-successful!");
        })
          } else {
            alert("Vehicle deletion cancelled");
          }             
    }

    handleUpdate() {
        this.setState({
            updateVehicle:true
        })
    }

    render() {
        return (
            <tr>
                {
                   this.state.updateVehicle?(
                       <Redirect to={{
                            state: {id:this.state.id},
                            pathname: '/updateVehicle'
                          }}/>
                   ):("")
                }
                <td class="center">
                    <i><b>{this.state.id}</b></i><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleUpdate}>Update</button><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleDelete}>Delete</button>
                </td>
                <td class="teal lighten-4 center">
                    {this.props.vehicle.model}<br/><br/>
                    <textarea style={{width:200+"px",height:125+"px"}} type="text" placeholder={this.state.description} id="description" onChange={this.handleChange} />

                </td>
                <td class="center">{this.props.vehicle.category}</td>
                <td class="teal lighten-4 center">
                    <input class="center" type="text" placeholder={this.state.rates} id="rates" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/> Euros
                </td>
                <td>
                    <img class="responsive-img" src={this.state.imgUrl} alt=""/><br/>
                    <input type="text" placeholder="New Image URL" id="imgUrl" onChange={this.handleChange} style={{height:25+"px"}}/>
                </td>
                
                <td class="teal lighten-4"><b>Fuel Type: </b>{this.props.vehicle.fuelType}
                <br/><b>Mileage: </b><input type="text" placeholder={this.state.mileage} id="mileage" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/>
                <br/><b>Service Date: </b>
                <input 
                    type="text" 
                    class="datepicker" 
                    placeholder={this.state.serviceDate!==null?(this.state.serviceDate.toString().split('T')[0]):("")} 
                    id="serviceDate" 
                    style={{width: 100+"px",height:25+"px"}}
                />
                <br/><b>Availability: </b>{this.props.vehicle.availability===true?"Available":"Unavailable"}
                <br/><b>License No: </b>{this.props.vehicle.licenseNo}</td>

            </tr>
        )
    }
}

export default VehicleDetails;