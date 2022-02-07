import React from 'react'
import '../styles/adminportal.css'
import {
    faAddressBook,
    faBan,
    faCreditCard,
    faEnvelope,
    faHotel,
    faMoneyBillWave,
    faPlusCircle,
    faUniversalAccess,
    faUser,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Outlet,
    NavLink
} from "react-router-dom";
function AdminPortal() {
    return (
        <div className="adminPortalContainer">
            <div className="adminheadings">

                <h1 >Admin Portal</h1>
            </div>
            <div className="adminPortalNavbar">
                <ul>
                    <li><NavLink to="/adminportal/" ><FontAwesomeIcon icon={faPlusCircle} /> Add Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/deleteRooms" ><FontAwesomeIcon icon={faBan} /> Delete Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/priceRooms" ><FontAwesomeIcon icon={faMoneyBillWave} /> Price Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/allRooms" ><FontAwesomeIcon icon={faAddressBook} /> All Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/availableRooms" ><FontAwesomeIcon icon={faUniversalAccess} /> Availabe Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/bookedRooms" ><FontAwesomeIcon icon={faHotel} /> Booked Rooms</NavLink></li>
                    <li><NavLink to="/adminportal/paymentsReports" ><FontAwesomeIcon icon={faCreditCard} /> Payments</NavLink></li>
                    <li><NavLink to="/adminportal/addCustomer" ><FontAwesomeIcon icon={faUserTie} /> Add Customer</NavLink></li>
                    <li><NavLink to="/adminportal/allCustomers" ><FontAwesomeIcon icon={faUser} /> All Customer</NavLink></li>
                    <li><NavLink to="/adminportal/customerMessage" ><FontAwesomeIcon icon={faEnvelope} /> Messages</NavLink></li>



                </ul>
            </div>
            <div className="adminPortalOutLets">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPortal