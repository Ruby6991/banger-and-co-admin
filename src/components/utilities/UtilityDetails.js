import React, { Component } from 'react';
import M from "materialize-css";
const axios = require("axios");


class UtilityDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.utility.id,
            rates:this.props.utility.rates,
            description:this.props.utility.description,
            quantity:this.props.utility.quantity,
            imgUrl:this.props.utility.imgUrl,
            title:this.props.title
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});

        const select = document.querySelectorAll('select');
        M.FormSelect.init(select, {});
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleUpdate = () => {
        console.log(this.state);
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        
        const data = {
            rates:this.state.rates,
            description:this.state.description,
            quantity:this.state.quantity,
            imgUrl:this.state.imgUrl,
            title:this.props.title
        }
        console.log(data);

        axios.put("http://localhost:8080/UpdateUtility/"+ this.state.id,data,config)
            .then(function(res){
                console.log("Utility updated successfully!");
                alert("Utility updated successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Utility update un-successful!\nError : ",error.response);
                alert("Utility update un-successful!");
         })
    }

    handleDelete() {
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            axios.delete("http://localhost:8080/DeleteUtility/"+ this.state.id,config)
            .then(function(res){
                console.log("Utility deleted successfully!");
                alert("Utility deleted successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Utility delete un-successful!\nError : ",error.response);
                alert("Utility delete un-successful!");
        })
          } else {
            alert("Utility deletion cancelled");
          }             
    }

    render() {
        return (
            <tr>
                <td class="center">
                    <i><b>{this.props.vehicle.id}</b></i><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleUpdate}>Update</button><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleDelete}>Delete</button>
                </td>
                <td class="teal lighten-4 center">
                    {this.props.utility.title}</td>
                <td class="teal lighten-4 center">
                    <textarea style={{width:200+"px",height:125+"px"}} type="text" placeholder={this.state.description} id="description" onChange={this.handleChange} />
                </td>
                <td class="teal lighten-4 center">
                    {this.props.utility.availability===true?"Available":"Unavailable"}
                </td>
                <td class="teal lighten-4 center">
                    <input type="text" placeholder={this.state.rates} id="rates" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/> Euros
                </td>
                <td>
                    <img class="responsive-img" src={this.state.imgUrl} alt=""/><br/>
                    <input type="text" placeholder="New Image URL" id="imgUrl" onChange={this.handleChange} style={{height:25+"px"}}/>
                </td>
                <td class="teal lighten-4">
                    <input type="tel" placeholder={this.state.quantity} id="quantity" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/>
                </td>

            </tr>
        )
    }
}

export default UtilityDetails;