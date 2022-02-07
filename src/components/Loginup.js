
import React, { useState, } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import '../styles/login.css'
function Loginup({ updateCustomerLoggedIn, updateAdminLoggedIn }) {
    let navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);
    const [user, setUser] = useState({
        phoneNumber: "",
        password: "",
    });

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

    };
    const handleRegistersubmit = async (e) => {
        e.preventDefault();
        if (customer.username && customer.password && customer.creditCard && customer.phoneNumber) {

            await axios.post('http://localhost:4000/users/register', {
                "username": customer.username,
                "creditCard": customer.creditCard, "password": customer.password, "phoneNumber": customer.phoneNumber
            })
                .then(function (response) {

                    toast.info(response.data)

                });

            setCustomer({ username: "", creditCard: "", password: "", phoneNumber: "" });
            setNavOpen(!navOpen)
        } else {
            toast.info("Please Fill The Form");
        }
    };

    const handleUserChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (user.phoneNumber && user.password) {
            await axios.post('http://localhost:4000/users/login', {
                "phoneNumber": user.phoneNumber,
                "password": user.password
            }).then(
                (response) => {

                    if (response.data.accessToken) {
                        localStorage.setItem("Authorization", response.data.accessToken)
                        localStorage.setItem('userID', response.data.id)
                        if (response.data.admin) {
                            console.log(response.data.admin)
                            updateAdminLoggedIn(true)
                            navigate(response.data.to);
                        } else {
                            updateCustomerLoggedIn(true)
                            navigate(`${response.data.to}`);
                        }
                    }
                    toast.info(response.data)

                }

            ).catch(err => {
                console.log(err)
            });
        } else {
            toast.info("Please fill the Form")
        }

    }



    return (
        <>

            <div className="container .right-panel-active" id="container">
                <div class="form-container   sign-up-container">
                    {navOpen ? (<form onSubmit={handleRegistersubmit}>
                        <h1>Create Account</h1>
                        <input value={customer.username}
                            onChange={handleRegisterchange}
                            type="text"
                            name="username"
                            placeholder="Customer Name" />

                        <input type="number"
                            value={customer.creditCard}
                            onChange={handleRegisterchange}
                            name="creditCard"
                            placeholder="Credit Card" />

                        <input type="text"
                            value={customer.phoneNumber}
                            onChange={handleRegisterchange}
                            name="phoneNumber"
                            placeholder="Phone Number"
                        />

                        <input type='password'
                            value={customer.password}
                            onChange={handleRegisterchange}
                            name="password"
                            placeholder="password" />
                        <button type="submit">Register</button>

                    </form>) : (<form onSubmit={handleLogin} id="signIn">
                        <h1>Sign in</h1>
                        <span>use your account</span>
                        <input type="number" name="phoneNumber" value={user.phoneNumber} onChange={handleUserChange} placeholder="Phone Number" />
                        <input type="password" name="password" value={user.password} onChange={handleUserChange} placeholder="Password" />
                        <button>Sign In</button>
                    </form>)}

                </div>

                <div class="overlay-containers">
                    <div class="overlay ">
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>start journey with us</p>
                            <button class="ghost" id="signUp" onClick={() => setNavOpen(!navOpen)}>{navOpen ? "Sign In" : "Sign Up"}</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    );
}

export default Loginup;

