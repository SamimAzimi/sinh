
import { Navigate, Outlet } from 'react-router-dom'

function AdminPrivateRoute({ isAdminLoggedIn }) {

    return isAdminLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminPrivateRoute;
