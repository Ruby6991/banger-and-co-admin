import React, { Component } from 'react';
import M from "materialize-css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const axios = require("axios");


class VehicleDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.vehicle.id,
            rates:this.props.vehicle.rates,
            description:this.props.vehicle.description,
            quantity:this.props.vehicle.quantity,
            mileage:this.props.vehicle.mileage,
            serviceDate:this.props.vehicle.serviceDate,
            imgUrl:this.props.vehicle.imgUrl
        }
        this.handleDate = this.handleDate.bind(this);
    }

    componentDidMount(){
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});

        const select = document.querySelectorAll('select');
        M.FormSelect.init(select, {});

        const that = this;
        const datepicker=document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepicker,{
            selectMonths: true, 
            selectYears: 100, 
            format: "yyyy-mm-dd",
            setDefaultDate: true,
            autoClose:true,
            onSet:that.handleDate,
            onSelect: function(date) {
                var splitDate = date.toString().split("-"),
                    newdate = splitDate[0].split(" "),
                    editedDate = newdate[1]+"-"+newdate[2]+'-'+newdate[3],
                    finalDate = new Date(editedDate);
                that.setState({
                    serviceDate : finalDate
                })
              }
        });

        localStorage.setItem("vehicleID",this.props.vehicle.id);
    }

    handleDate = (date) => {
        var splitDate = date.toString().split("-"),
                    newdate = splitDate[0].split(" "),
                    editedDate = newdate[1]+"-"+newdate[2]+'-'+newdate[3],
                    finalDate = new Date(editedDate);
        this.setState({
            serviceDate: finalDate
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.vehicle);
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        
        const data = {
            rates:this.state.rates,
            description:this.state.description,
            quantity:this.state.quantity,
            mileage:this.state.mileage,
            serviceDate:this.state.serviceDate,
            imgUrl:this.state.imgUrl
        }
        console.log(data);

        axios.put("http://localhost:8080/UpdateVehicle/"+ localStorage.vehicleID,data,config)
            .then(function(res){
                console.log("Profile updated successfully!");
                alert("Profile updated successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Profile update un-successful!\nError : ",error.response);
                alert("Profile update un-successful!");
         })
    }

    handleDelete() {
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            axios.delete("http://localhost:8080/DeleteVehicle/"+ localStorage.vehicleID,config)
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

    render() {
        return (
            <tr>
                <td class="center">
                    <i><b>{this.props.vehicle.id}</b></i><br/><br/>
                    <button data-target="modal2" class="modal-trigger waves-effect waves-light btn-small red lighten-2">Update</button><br/><br/>

                    {/* <!-- Modal2 Structure --> */}
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>Update Vehicle</h4>
                            <form>
                                <div class="input-field">
                                    <input type="text" placeholder={this.state.rates} id="rates" onChange={this.handleChange}/>
                                    <label for="rates">Rates</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder={this.state.description} id="description" onChange={this.handleChange}/>
                                    <label for="description">Description</label>
                                </div>
                                <div class="input-field">
                                    <input type="tel" placeholder={this.state.quantity} id="quantity" onChange={this.handleChange}/>
                                    <label for="quantity">Quantity</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder={this.state.mileage} id="mileage" onChange={this.handleChange} />
                                    <label for="mileage">Mileage</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" class="datepicker" placeholder={this.state.serviceDate} id="serviceDate" onChange={this.handleChange}/>
                                    <label for="serviceDate">Service Date</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder={this.state.imgUrl} id="imgUrl" onChange={this.handleChange} />
                                    <label for="serviceDate">Image URL</label>
                                </div>
                               
                                
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close waves-effect waves-green btn-flat teal lighten-3" onClick={this.handleSubmit} >Update</button>
                            <button class="modal-close waves-effect waves-green btn-flat teal lighten-3">Cancel</button>
                        </div>
                    </div>

                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleDelete}>Delete</button>
                </td>
                <td class="teal lighten-4 center">{this.props.vehicle.model}</td>
                <td class="center">{this.props.vehicle.category}</td>
                <td class="teal lighten-4 center">{this.state.rates} Euros</td>
                <td><img class="responsive-img" src={this.state.imgUrl} alt=""/><br/>
                    {this.state.description}</td>
                
                <td class="teal lighten-4"><b>Quantity: </b>{this.state.quantity}
                <br/><b>Fuel Type: </b>{this.props.vehicle.fuelType}
                <br/><b>Mileage: </b>{this.state.mileage}
                <br/><b>Service Date: </b>{this.state.serviceDate!==null?(this.state.serviceDate.toString().split('T')[0]):("")}
                <br/><b>Availability: </b>{this.props.vehicle.availability===true?"Avaialable":"Unavaialable"}
                <br/><b>License No: </b>{this.props.vehicle.licenseNo}</td>

            </tr>
        )
    }
}

export default VehicleDetails;