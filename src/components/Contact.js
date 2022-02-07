import React, { useState } from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import { ToastContainer, } from "react-toastify";
import "mapbox-gl/dist/mapbox-gl.css";
import { faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Forms from './Forms.js'
import '../styles/contactus.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Contact() {

    const [viewport, setViewport] = useState({
        width: window.innerWidth / 2,
        height: window.innerHeight / 2,
        latitude: 44.0,
        longitude: -79.0,
        zoom: 7,
    });


    function handleSocialMediaClick(link) {
        window.open(link, "_blank");
    }
    const settings = {
        dragPan: true,
        dragRotate: false,
        scrollZoom: false,
        touchZoom: false,
        touchRotate: false,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 3,
        maxZoom: 8,
    };
    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
    const location = {
        "name": "Vaughan",
        "address": "Canada",
        "latitude": 43.850441,
        "longitude": -79.511368
    }
    const SIZE = 20;
    return (
        <>
            <div className="contactSection">

                <Forms />
                <div className="map">
                    <ReactMapGL
                        {...viewport}
                        {...settings}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        mapboxApiAccessToken={
                            "pk.eyJ1IjoiaXRzc2N0byIsImEiOiJja3AyZXF3YzkweDV6MnZ0ZWlybDltZjhhIn0.Q6-NrYiizpfKP11JRtMbrA"
                        }
                        onViewportChange={(nextViewport) => setViewport(nextViewport)}
                    >
                        <Marker
                            key="Unique"
                            longitude={location.longitude}
                            latitude={location.latitude}
                        >
                            <svg
                                height={SIZE}
                                viewBox="0 0 24 24"
                                style={{
                                    cursor: "pointer",
                                    fill: "#d00",
                                    stroke: "none",
                                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                                }}

                            >
                                <path d={ICON} />
                            </svg>
                        </Marker> </ReactMapGL>
                </div>
                <div className="contactusinfo mocial">
                    <h1>Contact US</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                            Email:
                            <a href="mailto:Star.International@gmail.com">Star.International@gmail.com</a>
                        </li>
                        <li><FontAwesomeIcon icon={faPhone} />  Phone: +8613197771472</li>
                        <li className="socialMediaList">
                            Social Media:
                            <FontAwesomeIcon
                                className="socialMedia"
                                onClick={() => {
                                    handleSocialMediaClick(
                                        "https://www.instagram.com/prolific_fw/"
                                    );
                                }}
                                icon={faInstagram}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Contact;
