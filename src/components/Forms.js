
import { toast } from "react-toastify";
import React, { useState } from "react";
import axios from 'axios'
import {
    faComments,
    faEnvelope,
    faPaperPlane,
    faPen,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/forms.css'
function Forms() {
    const [person, setPerson] = useState({
        fname: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (person.fname && person.email && person.subject && person.message) {

            await axios.post('https://starhotelapi.herokuapp.com/messages/message', {
                "fname": person.fname,
                "email": person.email, "subject": person.subject, "message": person.message
            })
                .then(function (response) {
                    console.log(response.data)
                    toast.info(response.data)

                });
            // const contactmessageRef = fire.database().ref("messages");

            // contactmessageRef.push(person, (error) => {
            //     if (error) {
            //         toast.info("kindly submit the form again");
            //     } else {
            //         toast.info("Your Message has been sent to Kamiyab Super Market");
            //     }
            // });
            toast.info("Thank You for your message , we will contact you shortly");
            setPerson({ fname: "", email: "", subject: "", message: "" });
        } else {
            toast.info("Please Fill The Form");
        }
    };
    return (
        <>
            <form onSubmit={handlesubmit} className="contactusform">
                <label htmlFor="name"><FontAwesomeIcon className="ficon" icon={faUser} />  Name:</label>
                <input
                    value={person.fname}
                    onChange={handleChange}
                    type="text"
                    name="fname"
                />
                <label htmlFor="email"><FontAwesomeIcon className="ficon" icon={faEnvelope} />  Email:</label>
                <input
                    value={person.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                />
                <label htmlFor="subject"><FontAwesomeIcon className="ficon" icon={faPen} /> Subject: </label>
                <input
                    value={person.subject}
                    onChange={handleChange}
                    type="text"
                    name="subject"
                />
                <label htmlFor="message"><FontAwesomeIcon className="ficon" icon={faComments} /> Message:</label>
                <textarea
                    value={person.message}
                    onChange={handleChange}
                    type="textarea"
                    name="message"
                    className="message"
                />
                <button type="submit" className="submitbtn">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                </button>
            </form>

        </>
    )
}

export default Forms;
