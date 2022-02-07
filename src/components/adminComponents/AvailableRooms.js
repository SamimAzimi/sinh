import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AvailableRooms() {

    const [availablerooms, setAvailablerooms] = useState()

    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/rooms/availableRooms')
            .then(function (response) {
                setAvailablerooms(response.data)

            }).catch(err => {
                console.log(err)
            });
    }, [])
    return (
        <div className="allCustomerContainer">

            {availablerooms && availablerooms.map(room => {
                return (
                    <div className="oneCustomerContainer">

                        <h2>Room No: {room.roomNo}</h2>
                        <h2>Room Description: {room.roomDescription}</h2>
                        <h2>Room Price:{room.roomPrice}$</h2>
                        <h2>Room Type:{room.roomType}</h2>
                        <h2 className="roomStatus">Status : {room.booked ? "Booked" : "Not Booked"}</h2>
                    </div>
                )
            })}
        </div>

    )
}

export default AvailableRooms;
