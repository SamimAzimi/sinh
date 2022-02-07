import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import '../styles/customerPortal.css'
function CustomerPortal() {
    const [date, setDate] = useState()
    const [self, setSelf] = useState({});
    const [booked, setbooked] = useState()
    useEffect(() => {
        axios.get('http://localhost:4000/users/CustomerRequestDetails', {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
            .then(function (response) {

                setSelf(response.data)


            }).catch(err => {
                console.log(err)
            });


        axios.post('http://localhost:4000/rooms/bookingShow', { "userID": self._id })
            .then((response) => {
                setbooked(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleShowBooked = (e) => {


    }

    const handleCheckout = (e) => {
        if (date && booked._id) {


            axios.post('http://localhost:4000/rooms/checkOut',
                {
                    "userID": self._id,
                    "roomID": booked.room,
                    "checkOutDate": date
                }
            )
                .then((response) => {
                    console.log(response.data)
                    toast.info("Checkout Successfully ")
                })
        }
        else {
            toast.info('Select Checkout Date')
        }
    }

    return (
        <div className="customerPortalContainer">

            <div className="customerBasics">
                <h2><span className="hi">Hi !</span> {self.username}</h2>
                <h2><span className="hi">Credit Card Number: </span> {self.creditCard}</h2>
                <h2><span className="hi">Your Phone Number: </span> {self.phoneNumber}</h2>
            </div>
            <div className="roomBooked">
                {booked &&
                    <div className="ShowBooked">
                        <h2>{booked.username}</h2>
                        <h2>{booked.room}</h2>
                        <h2>{booked.from}</h2>

                    </div>
                }

                <button onClick={handleShowBooked} >show Booked Room</button>

            </div>
            <div className="checkOut">
                <h2>Date : </h2>
                <input type="date" className="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} />
                <button onClick={handleCheckout} >CheckOut</button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CustomerPortal;
