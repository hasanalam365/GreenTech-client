import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (loading || isAdminLoading) {
        return  <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <span className="ml-4 text-green-600 font-semibold">Loading...</span>
    </div>
    }

    if (user || isAdmin) {
        return children
    }


    return <Navigate to='/login' state={location?.pathname || '/'} replace></Navigate>
};

export default AdminRoute;