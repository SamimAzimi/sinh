import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios'
import FormData from 'form-data'
import '../../styles/adminComp.css'

function AddRooms() {
    const [room, setRoom] = useState({
        roomNo: "",
        roomType: "",
        roomDescription: "",
        roomPrice: "",

    });

    const [file, setFile] = useState();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRoom({ ...room, [name]: value });
    };
    const handleImageChange = (e) => {
        setFile(e.target.files[0])

    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (room.roomNo && room.roomType && room.roomDescription && room.roomPrice) {
            var form = new FormData();
            form.append('roomImage', file)
            form.append('roomNo', room.roomNo);
            form.append('roomType', room.roomType);
            form.append('roomDescription', room.roomDescription);
            form.append('roomPrice', room.roomPrice);
            await axios.post('http://localhost:4000/rooms/addRooms', form)
                .then(function (response) {
                    console.log(response.data)
                    toast.info(response.data)

                })
            toast.info("Room Added Successfully");
            setRoom({
                roomNo: "",
                roomType: "",
                roomDescription: "",
                roomPrice: "",
                roomImage: "",
            });
        } else {
            toast.info("Please Fill The Form");
        }
    };

    return <div>
        <form onSubmit={handlesubmit} className="addroomsContainers">
            <label > Room Number:</label>
            <input type="text" value={room.roomNo}
                onChange={handleChange} name="roomNo" />
            <label > Room Type:</label>
            <input type="text" name="roomType" onChange={handleChange} value={room.roomType} />
            <label > Room Price:</label>
            <input type="text" name="roomPrice" onChange={handleChange} value={room.roomPrice} />
            <label > Room Description:</label>
            <input type="text" name="roomDescription" onChange={handleChange} value={room.roomDescription} />
            <label > Room Image</label>
            <input type="file" name="file" onChange={handleImageChange} />
            <button type="submit" >Submit</button>

        </form>
        <ToastContainer />
    </div>;
}

export default AddRooms;
