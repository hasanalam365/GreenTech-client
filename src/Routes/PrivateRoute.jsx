import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return  <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <span className="ml-4 text-green-600 font-semibold">Loading...</span>
    </div>
    }

    if (user) {
        return children
    }


    return <Navigate to='/login' state={location?.pathname || '/'} replace></Navigate>
};

export default PrivateRoute;