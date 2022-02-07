import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import '../styles/header.css'
import { toast, ToastContainer } from 'react-toastify'
import { BiMenuAltRight, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { MdOutlinePayment, MdClose } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
function Header({ updateCustomerLoggedIn, updateAdminLoggedIn }) {
    const [hide, setshow] = useState()
    let navigate = useNavigate();
    const handleToggle = () => {

        setshow(!hide)
    }
    const handleLogOut = () => {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('userID')
        toast.info('Log Out Successfully')

        updateCustomerLoggedIn(false)
        updateAdminLoggedIn(false)
        navigate("/")
    }
    return (
        <header>
            <div className="logoHeader">
                <img src={Logo} alt="logo" />
            </div>
            <h1>Star International Hotel</h1>


            <div className="CustomerSection">
                <h1 onClick={handleToggle} className="humberger">{hide ? <MdClose /> : <BiMenuAltRight />}</h1>

                {hide && <div className="sideMenu">
                    <div className="Sign">
                        {localStorage.getItem("Authorization") ? <h4 className="SideMenueHeadings" onClick={handleLogOut}><BiLogOutCircle />  Sign Out</h4> : <h4 className="SideMenueHeadings" ><BiLogInCircle /><NavLink to="/login">  Login</NavLink></h4>}
                        <h4 className="SideMenueHeadings" ><FiLogIn /><NavLink to="/adminportal"> Admin Portal</NavLink></h4>
                    </div>
                    <div className="login">
                        <h4 className="SideMenueHeadings"> <MdOutlinePayment /><NavLink to='/customerPortal'> Customer Portal</NavLink></h4>

                    </div>
                </div>

                }

            </div>
            <ToastContainer />
        </header>
    )
}

export default Header
