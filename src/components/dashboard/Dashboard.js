//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react';
import M from 'materialize-css';
import Chart from 'chart.js'

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
                    backgroundColor:'rgba(0,0,0,0)',
                    borderColor:'#fff',
                    borderWidth:1,
                }]
            },
            options:{
                legend:{
                    labels:{
                        fontColor:'fff',
                    }
                }
            }
        });
        const myChart2 = new Chart(chart2,{
            type:'line',
            data:{
                labels:['monday','tuesday','wednesday','thursday','friday'],
                datasets:[{
                    label:'DataUsers Weekly',
                    data:[50,57,60,52,55],
                    borderColor:'#fff',
                    borderWidth:1
                }]
            },
            options:{
                legend:{
                    labels:{
                        fontColor:'#fff',
                    }
                }
            }
        });
    }
    render() {
        return (
            <div>
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper">
                        <a href="#" class="brand-logo center">Admin</a>
                        <a href="#" class="sidenav-trigger" data-target="slide-out"><i class="material-icons">menu</i></a>
                        </div>
                    </nav>
                </div>
                <ul class="sidenav sidenav-fixed bg" id="slide-out">
                    <li>
                        <div class="user-view">
                            <div class="background">
                            <img src="https://images.unsplash.com/photo-1515941764020-6c7f138beb65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="100%" height="105%"/>
                            </div>
                            <a href="#" ><img src="https://f0.pngfuel.com/png/782/114/profile-icon-png-clip-art.png" class="circle"/></a>
                            <a href="#" class="white-text name">Mayacircle</a>
                            <a href="#" class="white-text email">Mayacircle@email.com</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="white-text"><i class="white-text material-icons">home</i>Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="white-text"><i class="white-text material-icons">mail</i>DataMembers</a>
                    </li>
                </ul>
                <div class="content">
                    <div class="container">

                        <div class="row">
                            <div class="col s12">
                                <h1 class="white-text">Dashboard</h1>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg white-text">
                                    <div class="card-content">
                                        <p>Revenue</p>
                                        <h5>$150,100.00</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_up</i><br/>
                                        <b class="green-text">%12</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg white-text">
                                    <div class="card-content">
                                        <p>Users</p>
                                        <h5>50,000</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_down</i><br/>
                                        <b class="red-text">%10</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg white-text">
                                    <div class="card-content">
                                        <p>Clicks</p>
                                        <h5>10,500</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_up</i><br/>
                                        <b class="green-text">%20</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 l3 m6">
                                <div class="card center card-bg white-text">
                                    <div class="card-content">
                                        <p>Conversation Rate</p>
                                        <h5>0, 50%</h5>
                                        <i class="material-icons small green-text">keyboard_arrow_down</i><br/>
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