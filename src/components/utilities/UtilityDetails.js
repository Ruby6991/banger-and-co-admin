import React, { Component } from 'react';
import M from "materialize-css";
const axios = require("axios");


class UtilityDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.utility.id,
            utilityRate:this.props.utility.utilityRate,
            quantity:this.props.utility.quantity,
            utilityImg:this.props.utility.utilityImg,
            utilityName:this.props.utility.utilityName
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
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
            utilityRate:this.state.utilityRate,
            quantity:this.state.quantity,
            utilityImg:this.state.utilityImg,
            utilityName:this.state.utilityName
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
                    <i><b>{this.props.utility.id}</b></i><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleUpdate}>Update</button><br/><br/>
                    <button class="waves-effect waves-light btn-small red lighten-2" onClick={this.handleDelete}>Delete</button>
                </td>
                <td class="teal lighten-4 center">
                    {this.props.utility.utilityName}</td>
                <td class="center">
                    {this.props.utility.utilityAvailability===true?"Available":"Unavailable"}
                </td>
                <td class="teal lighten-4 center">
                    <input class="center" type="text" placeholder={this.state.utilityRate} id="utilityRate" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/> Euros
                </td>
                <td class="center">
                    <img class="responsive-img" src={this.state.utilityImg} alt=""/><br/>
                    <input type="text" placeholder="New Image URL" id="utilityImg" onChange={this.handleChange} style={{height:25+"px"}}/>
                </td>
                <td class="teal lighten-4 center">
                    <input class="center" type="tel" placeholder={this.state.quantity} id="quantity" onChange={this.handleChange} style={{width: 50+"px",height:25+"px"}}/>
                </td>

            </tr>
        )
    }
}

export default UtilityDetails;