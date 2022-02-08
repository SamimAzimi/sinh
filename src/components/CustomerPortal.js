import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import '../styles/customerPortal.css'
function CustomerPortal() {
    const [date, setDate] = useState()
    const [self, setSelf] = useState({});
    const [preCheckOutPay, setPreCheckOutPay] = useState([]);
    const [booked, setbooked] = useState()
    const [re, Setre] = useState(1)


    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/users/CustomerRequestDetails', {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
            .then(function (response) {

                setSelf(response.data)


            }).catch(err => {
                console.log(err)
            });

        axios.post('https://starhotelapi.herokuapp.com/rooms/bookingShow', { "userID": self._id })
            .then((response) => {
                setbooked(response.data)

            }).catch(err => {
                console.log(err)
            })


    }, [re])


    const handleDateSelect = (e, roombook) => {
        setDate(e.target.value)

        const data1 = new Date(roombook.from).getTime()
        const data2 = new Date(e.target.value).getTime()
        const days = (data2 - data1) / (1000 * 3600 * 24)
        const total = days * roombook.room.roomPrice;
        setPreCheckOutPay({ id: roombook.room._id, precheckoutpayment: total, dt: e.target.value })
        Setre(re + 1)
        console.log('e', e, 'total', total, 'pay', preCheckOutPay)
    }
    const handleCheckout = (e) => {
        console.log(e, 'check', preCheckOutPay)
        if (date && e) {

            axios.post('https://starhotelapi.herokuapp.com/rooms/checkOut',
                {
                    "userID": e.username,
                    "roomID": e.room._id,
                    "checkOutDate": date
                }
            )
                .then((response) => {
                    console.log(response.data)
                    toast.info(response.data)
                    Setre(re + 1)
                }).catch(err => {
                    console.log(err)
                })
        }
        else {
            toast.info('Select Checkout Date')
        }
    }

    return (
        <div className="customerPortalContainer">


            {self &&
                <div className="customerBasics">

                    <h2><span className="hi">Hi !</span> {self.username}</h2>
                    <h2><span className="hi">Credit Card Number: </span> {self.creditCard}</h2>
                    <h2><span className="hi">Your Phone Number: </span> {self.phoneNumber}</h2>
                </div>
            }
            <div className="roomBooked">
                {booked && booked.map((roombook) => {
                    return (
                        <div className="oneRoomBooked">
                            <h2><span className="oneRoomBookedHeading">Room No: </span>{roombook.room.roomNo}</h2>
                            <h2><span className="oneRoomBookedHeading">Description: </span>{roombook.room.roomDescription}</h2>
                            <h2><span className="oneRoomBookedHeading">Price / 24: </span>{roombook.room.roomPrice}</h2>
                            <h2><span className="oneRoomBookedHeading">Booked From : </span>{roombook.from}</h2>
                            <h2><span className="oneRoomBookedHeading">Check Out: </span>{roombook.to ? roombook.to :
                                <input type="date" className="date" name="date"
                                    onChange={(e) => handleDateSelect(e, roombook)} value={date} />}</h2>
                            <h2 >{roombook.payment ? <span className="oneRoomBookedHeading">"Paid " {roombook.payment}</span> : (

                                <span className="payments">Payment:    {preCheckOutPay.id == roombook._id && preCheckOutPay.precheckoutpayment}</span>
                            )
                            }

                            </h2>
                            {roombook.payment ? <h1>Checked Out </h1> : <button onClick={() => handleCheckout(roombook)} >CheckOut</button>}
                        </div>
                    )
                })

                }


            </div>

            <ToastContainer />
        </div>
    );
}

export default CustomerPortal;
