//Show booking and basic admin stuff(analytics and all)
import React, { Component } from 'react';
import M from 'materialize-css';

class Dashboard extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <div class="content bg">
                    <div class="row">
                        <div class="col s12">
                            <div class="card card-bg white-text">
                                <span class="card-title">Data Members</span>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Item Name</th>
                                        <th>Item Price</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                        <td>$7.00</td>
                                    </tr>
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

export default Dashboard;