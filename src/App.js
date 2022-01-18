import './style/root.css'
import React from 'react'
// import Nav from './components/Navigation.js'
// import Header from './components/Header.js'
// import Footer from './components/Footer.js'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home.js'
import ContactUs from './components/contactus.js'
import AboutUs from './components/AboutUs.js'
import Services from './components/Services.js'
import CustomerPortal from './components/CustomerPortal.js'
import commingsoon from './assets/commingsoon.jpeg'
function App() {
  return (
    <>
      <img src={commingsoon} alt="CommingSoon" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="customerportal" element={<CustomerPortal />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
