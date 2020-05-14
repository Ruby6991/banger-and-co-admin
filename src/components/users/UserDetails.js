import React from 'react'

const UserDetails = ({user}) => {
    return (
        <tr>
            <td class="teal lighten-4"><i><b>{user.email}</b></i></td>
            <td>{user.firstName+' '+user.lastName}</td>
            <td>{user.dateOfBirth!==null?(user.dateOfBirth.split('T')[0]):("")}</td>
            <td>{user.address}</td>
            <td>{user.phoneNo}</td>
            <td>{user.customerState} <br/> <button class="waves-effect waves-light btn-small teal lighten-3">Blacklist</button></td>
            <td><button class="waves-effect btn-flat teal lighten-3 white-text">Docs</button></td>
        </tr>
    )
}

export default UserDetails;