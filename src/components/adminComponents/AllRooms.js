import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'

function AllRooms() {
    const [allrooms, setAllrooms] = useState();

    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/rooms/allRooms')
            .then(function (response) {
                setAllrooms(response.data)

            }).catch(err => {
                console.log(err)
            });
    }, [])
    const handleRoomDelete = async (e) => {
        await axios.post('https://starhotelapi.herokuapp.com/rooms/deleteRoom', { "roomNo": e })
            .then(function (response) {

                toast.info(response.data)

            }).catch(err => {
                console.log(err)
            })

        axios.get('https://starhotelapi.herokuapp.com/rooms/allRooms')
            .then(function (response) {
                setAllrooms(response.data)

            }).catch(err => {
                console.log(err)
            });
    }
    return (
        <div className="allCustomerContainer">

            {allrooms && allrooms.map(room => {
                return (
                    <div className="oneCustomerContainer">

                        <h2>Room No: {room.roomNo}</h2>
                        <h2>Room Des: {room.roomDescription}</h2>
                        <h2>Room Price:{room.roomPrice.numberDecimal}</h2>
                        <h2>Room Type:{room.roomType}</h2>
                        <div className="allcustbtnGroup">
                            <button type="submit" onClick={() => handleRoomDelete(room.roomNo)} >Delete</button>

                        </div>
                    </div>
                )
            })}
            <ToastContainer />
        </div>
    );
}

export default AllRooms;
