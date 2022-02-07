import React from 'react'
import pic from "../assets/Founder.jpg";
import '../styles/aboutus.css'
import Fade from "react-reveal/Fade";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AboutUs() {
    return (
        <Fade left cascade>
            <div className="contactuspage">
                <h1>Why this industry?</h1>
                <p>
                    I chose to be in this industry because there is no better feeling than
                    being part of someone’s Travel journey. It is our goal to attract visitors from around the globe and various markets,
                    including the leisure, corporate, military, and wholesaler markets, individual and group travel.
                    We welcome them to our country, host them in style, cater to their needs and encourage them to return.

                </p>
                <h1>
                    <FontAwesomeIcon className="goalIcon" icon={faBullseye} /> Our
                    Goal/Mission:
                </h1>
                <p>
                    <b> A memorable stay </b>
                    The mission of our hotel is to provide outstanding lodging facilities and services to our guests.
                    Our hotel focuses on individual business and leisure travel,
                    as well as travel associated with groups meetings .
                    we emphasise high quality standards in our rooms and food and beverage divisions
                </p>
                <h1>Founder Profile</h1>
                <div className="founderDiv">
                    <div className="founderpic">
                        <img src={pic} alt="founder" />
                    </div>
                    <div>
                        <h1 className="founderName">Nazir Rashidi</h1>
                        <h3 className="foundertitle">
                            Founder/CEO of Star International Hotel
                        </h3>
                        <p className="founderMessage">
                            After graduating from computer science in 2021. i knew
                            my desire to work and serve other people and help them
                            with thier travel journey , i myself a little bit of travel
                            and love to travel . so for my passion i founded this hotel
                            to server poeple
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
