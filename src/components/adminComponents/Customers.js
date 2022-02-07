import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import "../../styles/allCustomers.css"

function Customers() {
    const [allCustomer, setallCustomer] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/users/customers')
            .then(function (response) {

                setallCustomer(response.data)


            }).catch(err => {
                console.log(err)
            });
    }, [])

    const handleDelete = async (e) => {
        await axios.post('http://localhost:4000/users/delOneCustomer', { "id": e }).then(
            (response) => {

                toast.info('Customer Message has Been Deleted Succussfully')
            }

        );
        await axios.get('http://localhost:4000/users/customers')
            .then(function (response) {

                setallCustomer(response.data)


            }).catch(err => {
                console.log(err)
            });


    }
    return <div className="allCustomerContainer">

        {allCustomer && allCustomer.map(customer => {
            return (
                <div className="oneCustomerContainer">

                    <h2>Name: {customer.username}</h2>
                    <h2>Credit Card: {customer.creditCard}</h2>
                    <h2>Phone Number:{customer.phoneNumber}</h2>
                    <div className="allcustbtnGroup">
                        <button type="submit" onClick={() => handleDelete(customer._id)}>Delete</button>
                        {/* <button type="submit" >Edit</button> */}
                    </div>
                </div>
            )
        })}
        <ToastContainer />
    </div>;
}

export default Customers;
