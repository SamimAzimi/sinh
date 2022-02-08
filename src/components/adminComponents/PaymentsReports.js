import React,
{ useEffect, useState } from 'react';
import axios from 'axios';


function PaymentsReports() {

    const [paymentRepo, setPaymentRepo] = useState()

    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/admin/paymentsum')
            .then(function (response) {

                setPaymentRepo(response.data)
                console.log(paymentRepo)

            }).catch(err => {
                console.log(err)
            });
    }, [])


    return (


        <div className="allCustomerContainer">
            {paymentRepo && paymentRepo.map((pay) => {
                return (
                    <div className="oneCustomerContainer    ">
                        <h2>Count Days {pay._id.day}</h2>
                        <h2>Year {pay._id.year}</h2>
                        <h2>Total Amount: {pay.totalAmount}</h2>
                        <h2>Room Booked {pay.count} </h2>
                    </div>
                )
            })

            }

        </div>

    )
}

export default PaymentsReports;
