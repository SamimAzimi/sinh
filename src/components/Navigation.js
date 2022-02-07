import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/nav.css'
import {
    faAddressBook,
    faHome,
    faInfoCircle,
    faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navigation() {
    return (
        <ul className="navigation">
            <li><NavLink to="/" activeClassName="selected"> <FontAwesomeIcon icon={faHome} /> Home</NavLink></li>
            <li><NavLink to="/rooms" activeClassname="selected"><FontAwesomeIcon icon={faSuitcase} /> Rooms</NavLink></li>
            <li><NavLink to="/aboutus" activeClassname="selected"><FontAwesomeIcon icon={faInfoCircle} /> About Us</NavLink></li>
            <li><NavLink to="/contactus" activeClassname="selected"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</NavLink></li>
        </ul>
    )
}

export default Navigation
