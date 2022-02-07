import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios'
function AddCustomer() {

    const [customer, setCustomer] = useState({
        username: "",
        password: "",
        creditCard: "",
        phoneNumber: "",
    });
    const handleRegisterchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCustomer({ ...customer, [name]: value });
        console.log(customer)
    };
    const handleRegistersubmit = async (e) => {
        e.preventDefault();
        if (customer.username && customer.password && customer.creditCard && customer.phoneNumber) {

            await axios.post('https://starhotelapi.herokuapp.com/users/register', {
                "username": customer.username,
                "creditCard": customer.creditCard, "password": customer.password, "phoneNumber": customer.phoneNumber
            })
                .then(function (response) {
                    console.log(response.data)
                    toast.info(response.data)

                });

            setCustomer({ username: "", creditCard: "", password: "", phoneNumber: "" });
        } else {
            toast.info("Please Fill The Form");
        }
    };

    return <form onSubmit={handleRegistersubmit} className="addCustomerContainer">
        <label>Customer Name</label>
        <input value={customer.username}
            onChange={handleRegisterchange}
            type="text"
            name="username" />
        <label>Customer CreditCard Number</label>
        <input type="number"
            value={customer.creditCard}
            onChange={handleRegisterchange}
            name="creditCard" />
        <label>Customer Phone Number</label>
        <input type="text"
            value={customer.phoneNumber}
            onChange={handleRegisterchange}
            name="phoneNumber"
        />
        <label>Customer Password</label>
        <input type='password'
            value={customer.password}
            onChange={handleRegisterchange}
            name="password" />
        <button type="submit">Register</button>
        <ToastContainer />
    </form>
}

export default AddCustomer;
