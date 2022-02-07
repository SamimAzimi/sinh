
import { Navigate, Outlet } from 'react-router-dom'

function CustomerPrivateRoutes({ isCustomerLoggedIn }) {


    return isCustomerLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default CustomerPrivateRoutes;
