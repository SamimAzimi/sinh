import React, { useState } from 'react';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
function PriceRooms() {
    const [priceRoom, setPriceRoom] = useState({
        roomNo: "",
        roomPrice: "",

    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPriceRoom({ ...priceRoom, [name]: value });
    };
    const handlePricesubmit = async (e) => {
        e.preventDefault();
        if (priceRoom.roomNo && priceRoom.roomPrice) {
            await axios.post('https://starhotelapi.herokuapp.com/rooms/updateprice', {
                "roomNo": priceRoom.roomNo,
                "roomPrice": priceRoom.roomPrice,
            })
                .then(function (response) {
                    console.log(response.data)
                    toast.info(response.data)

                });
            setPriceRoom({
                roomNo: "",
                roomPrice: "",

            });
        } else {
            toast.info("Please Fill The Form");
        }
    };


    return <form onSubmit={handlePricesubmit} className="priceRoomContainer">
        <label >New Price</label>
        <input type="number" value={priceRoom.roomPrice} name="roomPrice" onChange={handleChange} />
        <label> Room Number</label>
        <input type="number" value={priceRoom.roomNo} name="roomNo" onChange={handleChange} />
        <button type="submit" >Submit</button>
        <ToastContainer />
    </form>
}

export default PriceRooms;
