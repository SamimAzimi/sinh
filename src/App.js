import './styles/root.css'
import React, { useEffect, useState } from 'react'
import Nav from './components/Navigation.js'
import Header from './components/Header.js'
import "react-toastify/dist/ReactToastify.css";
// import Footer from './components/Footer.js'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home.js'
import AboutUs from './components/AboutUs.js'
import Rooms from './components/Rooms.js'
import AdminPortal from './components/AdminPortal.js'
import Contact from './components/Contact.js'
import Login from './components/Loginup.js'
import CustomerPortal from './components/CustomerPortal.js'
import NotFound from './components/NotFound.js'
//admin portal components
import AddRooms from './components/adminComponents/AddRooms.js'
import AvailableRooms from './components/adminComponents/AvailableRooms.js'
import BookedRooms from './components/adminComponents/BookedRooms.js'
import DeleteRooms from './components/adminComponents/DeleteRooms.js'
import PaymentReports from './components/adminComponents/PaymentsReports.js'
import PriceRooms from './components/adminComponents/PriceRooms.js'
import AddCustomer from './components/adminComponents/AddCustomer.js'
import CustomerMessage from './components/adminComponents/CustomerMessage.js'
import AllCustomer from './components/adminComponents/Customers.js'
import AllRooms from './components/adminComponents/AllRooms.js'
// private Routes 
import AdminRoutes from './components/Private/AdminPrivateRoute.js'
import CustomerRoutes from './components/Private/CustomerPrivateRoutes.js'
function App() {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem('userID') && localStorage.getItem('Authorization')) {
      setIsCustomerLoggedIn(true)
    } else {
      setIsCustomerLoggedIn(false)
    }
  }, [])
  return (
    <>
      <Header updateCustomerLoggedIn={setIsCustomerLoggedIn} updateAdminLoggedIn={setIsAdminLoggedIn} />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="rooms" element={<Rooms />} />
        <Route element={<AdminRoutes isAdminLoggedIn={isAdminLoggedIn} />} >
          <Route path="/adminportal" element={<AdminPortal />} >
            <Route exact path="/adminportal/" element={<AddRooms />} />
            <Route exact path="/adminportal/deleteRooms" element={<DeleteRooms />} />
            <Route exact path="/adminportal/priceRooms" element={<PriceRooms />} />
            <Route exact path="/adminportal/availableRooms" element={<AvailableRooms />} />
            <Route exact path="/adminportal/bookedRooms" element={<BookedRooms />} />
            <Route exact path="/adminportal/paymentsReports" element={<PaymentReports />} />
            <Route exact path="/adminportal/addCustomer" element={<AddCustomer />} />
            <Route exact path="/adminportal/customerMessage" element={<CustomerMessage />} />
            <Route exact path="/adminportal/allCustomers" element={<AllCustomer />} />
            <Route exact path="/adminportal/allRooms" element={<AllRooms />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login updateCustomerLoggedIn={setIsCustomerLoggedIn} updateAdminLoggedIn={setIsAdminLoggedIn} />} />
        <Route element={<CustomerRoutes isCustomerLoggedIn={isCustomerLoggedIn} />} >
          <Route path="/customerPortal" element={<CustomerPortal />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
