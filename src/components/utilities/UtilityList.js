import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import UtilityDetails from './UtilityDetails'
import M from 'materialize-css'
const axios = require("axios")


class UtilityList extends Component {
    constructor(props){
        super(props);
        this.state={
            utilities:[],
            title:'',
            description:'',
            imgUrl:'',
            quantity:'',
            rates:'',
            availability:''
        }
    }

    componentDidMount(){
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});

        const select = document.querySelectorAll('select');
        M.FormSelect.init(select, {});

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
        axios.post("http://localhost:8080/GetUtilityList",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            that.setState({
                utilities:res.data
            })
        }).catch(function(error){
            console.log(error.response);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        
        const data = {
            title:this.state.title,
            description:this.state.description,
            imgUrl:this.state.imgUrl,
            quantity:this.state.quantity,
            rates:this.state.rates,
            availability:true
        }
        console.log(data);

        axios.put("http://localhost:8080/AddUtility",data,{
            headers:headersInfo
        })
            .then(function(res){
                console.log("Utility Added successfully!");
                alert("Utility Added successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Utility addition un-successful!\nError : ",error.response);
                alert("Utility addition un-successful!");
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
                                <span class="card-title center">Manage Utilities</span>

                                {/* <!-- Modal Trigger --> */}
                                <button data-target="modal1" class="modal-trigger waves-effect btn-flat teal lighten-3 white-text">Add New Utility</button>

                                {/* <!-- Modal1 Structure --> */}
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <h4>Add New Utility</h4>
                                        <form >
                                            <input type="text" placeholder="Title" id="title" onChange={this.handleChange}/>
                                            <input type="text" placeholder="Rates" id="rates" onChange={this.handleChange}/>
                                            <input type="text" placeholder="Description" id="description" onChange={this.handleChange}/>
                                            <input type="tel" placeholder="Quantity" id="quantity" onChange={this.handleChange}/>
                                            <input type="text" placeholder="Image" id="imgUrl" onChange={this.handleChange} />
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="modal-close waves-effect waves-green btn-flat teal lighten-3" onClick={this.handleSubmit} >Add</button>
                                        <button class="modal-close waves-effect waves-green btn-flat teal lighten-3">Cancel</button>
                                    </div>
                                </div>

                                <table class="responsive-table highlight">
                                    <thead>
                                        <tr>
                                            <th class="teal lighten-3">Utility ID</th>
                                            <th class=" teal lighten-4">Title</th>
                                            <th class=" teal lighten-3">Description</th>
                                            <th class=" teal lighten-3">Availability</th>
                                            <th class="teal lighten-4"style={{width: 100+"px"}}>Rates</th>
                                            <th class=" teal lighten-3" style={{width: 200+"px"}} >Image</th>
                                            <th class="teal lighten-4" style={{width: 100+"px"}}>Quantity</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { this.state.utilities && this.state.utilities.map(utility => 
                                        {
                                            return(
                                                <UtilityDetails utility={utility} key={utility.id} />
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

export default UtilityList;