import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookedRooms() {
    const [bookedrooms, setBookedrooms] = useState();
    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/rooms/BookedRooms')
            .then(function (response) {
                setBookedrooms(response.data)

            }).catch(err => {
                console.log(err)
            });
    }, [])
    return (
        <div className="allCustomerContainer">

            {bookedrooms && bookedrooms.map(room => {
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
        </div>)
}

export default BookedRooms;
