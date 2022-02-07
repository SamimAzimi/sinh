import React from 'react'
import '../styles/footer.css'
import Logo from '../assets/logo.png'


function Footer() {
    return (
        <footer>
            <div className="logoImageFooter">
                <img src={Logo} alt="logo" />
            </div>

            <ul>
                <li>+8613197771472</li>
                <li>IceLand</li>
                <li>star.International@gmail.com</li>
            </ul>
        </footer>
    )
}

export default Footer
