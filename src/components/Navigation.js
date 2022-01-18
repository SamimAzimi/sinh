import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/nav.css'
function Navigation() {
    return (
        <ul className="navigation">
            <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/services" activeClassname="selected">Services</NavLink></li>
            <li><NavLink to="/aboutus" activeClassname="selected">About Us</NavLink></li>
            <li><NavLink to="/contactus" activeClassname="selected">Contact Us</NavLink></li>
            <li><NavLink to="/customerportal" activeClassname="selected">Customer Portal</NavLink></li>
        </ul>
    )
}

export default Navigation
