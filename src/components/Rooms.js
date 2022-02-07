import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import '../styles/rooms.css'

function Rooms() {
    const [rooms, setRooms] = useState()
    let navigate = useNavigate();
    const [date, setDate] = useState()
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://starhotelapi.herokuapp.com/rooms/allRooms',
        })
            .then(function (response) {
                setRooms(response.data)
            });

    }, [])


    const handleBook = (e) => {
        console.log(e)
        if (!localStorage.getItem('userID')) {
            navigate('/login')
        } else {

            axios.post('https://starhotelapi.herokuapp.com/rooms/booking',
                {
                    "userID": localStorage.getItem('userID'),
                    "roomID": e,
                    "fromBookedDate": date,
                })
                .then(function (response) {
                    toast.info('your booked the room successfully')

                }).catch(err => {
                    console.log(err)
                });

            navigate('/customerPortal')
        }
    }

    const handletoggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <>
            <h1 className="roomheading">Rooms Available for Books</h1>
            <div className="roomsContainer">
                {rooms ? rooms.map(room => {
                    return (

                        <div class="room">
                            <div className="roomImage">
                                <img src={`https://starhotelapi.herokuapp.com/${room.imagePath}`} alt="RoomImage" />
                                {/* //btoa(String.fromCharCode(new Uint8Array(room.roomImage.data.data */}
                                {/* <img src={`data:image/png;base64,${new Buffer.from(room.roomImage.data.data).toString('base64')}`} alt="Room Image" /> */}
                            </div>
                            <div className="roomDesc" key={room._id}>
                                <p><span className="roomdescp">Number: </span>{room.roomNo}</p>
                                <p><span className="roomdescp">Type: </span>{room.roomType}</p>
                                <p><span className="roomdescp">Description: </span>{room.roomDescription}</p>
                                <p><span className="roomdescp">Price: </span>{room.roomPrice}$</p>
                                {clicked === room._id &&
                                    <div className="BookClicked">
                                        From : <input type="date" className="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} />
                                        <button className="confirmbtn" onClick={() => handleBook(room._id)}>Confirm</button>
                                    </div>
                                }
                            </div>
                            <button type="submit" onClick={() => handletoggle(room._id)} >Book</button>
                        </div>
                    )
                }) : (
                    <div className="noRoomsAvailable">
                        <h1>No Room Available</h1>
                        <h2>CheckOut Later Date</h2>
                    </div>
                )}
                <ToastContainer />
            </div>
        </>
    )

}

export default Rooms
