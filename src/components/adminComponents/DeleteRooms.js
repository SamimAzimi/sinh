import React, { useState } from 'react';
import '../../styles/adminComp.css'
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios'
function DeleteRooms() {
    const [delRoom, setDelRoom] = useState({
        roomNo: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDelRoom({ ...delRoom, [name]: value });
    };
    const handleDeletesubmit = async (e) => {
        e.preventDefault();
        if (delRoom.roomNo) {

            await axios.post('http://localhost:4000/rooms/deleteRoom', { "roomNo": delRoom.roomNo })
                .then(function (response) {

                    toast.info(response.data)

                }).catch(err => {
                    console.log(err)
                })

            setDelRoom({
                roomNo: "",
            });
        } else {
            toast.info("Please Fill The Form");
        }
    };
    return <div>
        <form onSubmit={handleDeletesubmit} className="deleteRoomContainer">

            <label>Room Number</label>
            <input type="number" value={delRoom.roomNo} onChange={handleChange} name="roomNo" />
            <button type="submit" > Delete  </button>
        </form>
        <ToastContainer />
    </div>
}

export default DeleteRooms;
