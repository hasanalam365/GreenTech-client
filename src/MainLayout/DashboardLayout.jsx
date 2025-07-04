import { Outlet } from "react-router-dom";
import DashboardNav from "../Dashboard/Dashboard/DashboardNav";
import { useState } from "react";
import useUser from "../hooks/useUser";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);

    const [userData, refetch] = useUser();
    const [isAdmin, isLoading] = useAdmin();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            <span className="ml-4 text-green-600 font-semibold">Loading...</span>
        </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <DashboardNav
                    isOpenNav={isOpenNav}
                    setIsOpenNav={setIsOpenNav}
                    userData={userData}
                    isAdmin={isAdmin}
                />
            </div>
            <div className={`${isOpenNav && 'hidden'} w-full px-0 md:px-2`}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
