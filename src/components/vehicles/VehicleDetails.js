import React from 'react'

const VehicleDetails = ({vehicle}) => {
    return (
        <tr>
            <td class="teal lighten-4">
                <i>{vehicle.id}</i><br/>
                <button class="waves-effect waves-light btn-small teal lighten-3">Update</button><br/>
                <button class="waves-effect waves-light btn-small teal lighten-3">Delete</button>
            </td>
            <td>{vehicle.model}</td>
            <td>{vehicle.rates}</td>
            <td>{vehicle.description}</td>
            <td>{vehicle.quantity}</td>
            <td>{vehicle.fuelType}</td>
            <td>{vehicle.mileage}</td>
            <td>{vehicle.serviceDate!==null?(vehicle.dateOfBirth.split('T')[0]):("")}</td>
            <td>{vehicle.availability}</td>
            <td>{vehicle.licenseNo}</td>
            <td>{vehicle.imgUrl}</td>
        </tr>
    )
}

export default VehicleDetails;