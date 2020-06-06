//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react'
import M from 'materialize-css'
import Chart from 'chart.js'
import NavBar from '../layout/Navbar'
import BookingDetails from './BookingDetails'
const axios = require("axios")

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            bookings:[],
            searchResult:'',
            view:true
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount(){
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav,{});

        const chart = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(chart,{
            type:'bar',
            data:{
                labels:['january','february','march','april','may','june','july'],
                datasets:[{
                    label:'DataVisitors',
                    data:[1009,1010,1200,1000,1050,1060,1010],
                    // backgroundColor:'rgba(0,0,0,0)',
                    backgroundColor:'#CBE7E3',
                    borderColor:'#000',
                    borderWidth:1,
                }]
            },
            options:{
            }
        });

        const that = this;
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }

        const data = {
            email:localStorage.email
        }

        axios.post("http://localhost:8080/GetBookingList",data,config)
        .then(function(res){
            console.log(res.data);
            that.setState({
                bookings:res.data.reverse()
            })
        }).catch(function(error){
            console.log(error.response);
        })
    }

    handleSearch = (e) => {
        const that=this;
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        axios.get("http://localhost:8080/GetBooking/"+ e.target.value,config
        ).then(function(res){
            console.log(res.data);
            that.setState({
                searchResult:res.data,
                view:false
            })
        }).catch(function(error){
            console.log(error);
        })
    }

    handleClose = (e) => {
        this.setState({
            view:true,
            searchResult:''
        })
    }

    render() {
        return (
            <div class="dashboard">
                <NavBar/>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg">
                                    <div class="card-content">
                                        <p>Revenue</p>
                                        <h5>$150,100</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_up</i><br/>
                                        <b class="green-text">%12</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg">
                                    <div class="card-content">
                                        <p>Users</p>
                                        <h5>50,000</h5>
                                        <i class="material-icons small red-text">keyboard_arrow_down</i><br/>
                                        <b class="red-text">%10</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg">
                                    <div class="card-content">
                                        <p>Bookings</p>
                                        <h5>10,500</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_up</i><br/>
                                        <b class="green-text">%20</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg">
                                    <div class="card-content">
                                        <p>Cancellations</p>
                                        <h5>0, 50%</h5>
                                        <i class="material-icons small red-text">keyboard_arrow_down</i><br/>
                                        <b class="red-text">%5</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l12 m6">
                                <div class="card card-bg">
                                    <div class="card-content">
                                        <canvas id="myChart">s</canvas>
                                    </div>

                                </div>

                            </div>
                            <div class="col s12 l12 m6">
                                <div class="card card-bg">
                                    <div class="card-content">
                                        <span class="card-title center">Bookings</span>
                                        <nav>
                                            <div class="nav-wrapper">
                                                <form>
                                                    <div class="input-field teal lighten-3">
                                                    <input id="search" type="search" onChange={this.handleSearch} required/>
                                                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                                    <i class="material-icons" onClick={this.handleClose}>close</i>
                                                    </div>
                                                </form>
                                            </div>
                                        </nav>
                                        <table class="responsive-table highlight">
                                            <thead>
                                            <tr>
                                                <th class="teal lighten-4">Booking ID</th>
                                                <th class=" teal lighten-3"style={{width: 150+"px"}}>Booking Duration</th>
                                                <th class="teal lighten-4">Late State</th>
                                                <th class=" teal lighten-3">Extended State & Extended Time</th>
                                                <th class="teal lighten-4">Booking State</th>
                                                <th class="teal lighten-3">User</th>
                                                <th class="teal lighten-4" style={{width: 100+"px"}}>Vehicle</th>
                                                <th class="teal lighten-3">Utilities</th>
                                                {/* <th class=" teal lighten-4">More</th> */}
                                            </tr>
                                            </thead>

                                            <tbody>
                                                {this.state.view?(
                                                    this.state.bookings && this.state.bookings.map(booking => 
                                                {
                                                        return(
                                                            <BookingDetails booking={booking} key={booking.id} />
                                                        )
                                                })
                                                ):(
                                                    <BookingDetails user={this.state.searchResult} key={this.state.searchResult.id} /> 
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default Dashboard;