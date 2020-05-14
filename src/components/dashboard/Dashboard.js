//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react'
import M from 'materialize-css'
import Chart from 'chart.js'
import NavBar from '../layout/Navbar'

class Dashboard extends Component {
    componentDidMount(){
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav,{});

        const chart = document.getElementById("myChart").getContext("2d");
        const chart2 = document.getElementById("myChart2").getContext("2d");
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
        const myChart2 = new Chart(chart2,{
            type:'line',
            data:{
                labels:['monday','tuesday','wednesday','thursday','friday'],
                datasets:[{
                    label:'DataUsers Weekly',
                    data:[50,57,60,52,55],
                    backgroundColor:'#CBE7E3',
                    borderColor:'#000',
                    borderWidth:1
                }]
            },
            options:{
            }
        });
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
                                        <canvas id="myChart2"></canvas>
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