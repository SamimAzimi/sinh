import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import '../../styles/customerMessage.css'
import {
    faEnvelope,
    faEnvelopeOpenText,
    faRetweet,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomerMessage() {


    const [message, setMessage] = useState();


    const handleDeleteMessage = async (e) => {

        await axios.post('https://starhotelapi.herokuapp.com/messages/delMessage', { "id": e }).then(
            (response) => {
                toast.info('Customer Message has Been Deleted Succussfully')
            }
        );

        axios.get('https://starhotelapi.herokuapp.com/messages/message')
            .then(response => {

                setMessage(response.data)

            })


    }
    useEffect(() => {
        axios.get('https://starhotelapi.herokuapp.com/messages/message')
            .then(response => {

                setMessage(response.data)

            })

    }, [])

    return (
        <div className="messageContainers">
            {message && message.map((msg) => {
                return (
                    <div className="msgs" key={msg._id}>
                        <div className="msgGroup1">
                            <h2 className="senderName"><FontAwesomeIcon icon={faUser} /> {msg.name}</h2>
                            <h2><FontAwesomeIcon icon={faEnvelope} /> {msg.email}</h2>
                        </div>
                        <h2 className="msgSubject"><FontAwesomeIcon icon={faRetweet} /> {msg.subject}</h2>
                        <p className="msgContents"><FontAwesomeIcon icon={faEnvelopeOpenText} /> {msg.Message}</p>
                        <button type="submit" onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
                    </div>
                )
            })}
            <ToastContainer />
        </div>
    )
}

export default CustomerMessage;
