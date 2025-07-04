import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: userData = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user.email}`);
      return res.data;
    },
  });

    return (
        <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50   h-full md:pt-6 lg:pt-6">
            <Helmet>
        <title>Profile | Dashboard | Green Tech</title>
      </Helmet>
           <div className="bg-white dark:bg-gray-800 shadow-xl p-4  md:p-6  w-[95%] max-w-4xl mx-auto rounded-lg transition-colors duration-300">
      

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Personal Information
        </h3>
        <Link
          to="/dashboard/updatedProfile"
          className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition transform hover:scale-110"
          aria-label="Edit Profile"
        >
          <FaEdit className="text-2xl md:text-3xl" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Profile Image */}
        <figure className="flex-shrink-0">
          <img
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            src={userData.photoURL || user?.photoURL}
            alt={userData.displayName || "User Profile"}
          />
        </figure>

        {/* Info Section */}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="grid grid-cols-[100px_10px_1fr] gap-y-3 md:gap-y-5 md:gap-x-6 w-full">
            {/* Labels */}
            <div className="text-gray-600 dark:text-gray-400 font-medium select-none">
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Gender</p>
            </div>

            {/* Separator */}
            <div className="text-gray-600 dark:text-gray-400 font-medium select-none">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>

            {/* Data */}
            <div className="text-gray-800 dark:text-gray-100 font-semibold break-words whitespace-normal w-full overflow-hidden">
              <p className="break-words">{userData.displayName || "Not Set"}</p>
              <p className="break-words">{userData.email || "Not Set"}</p>
              <p className="break-words">{userData.phone || "Undefined"}</p>
              <p className="break-words">{userData.gender || "Undefined"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
      </div>
   
  );
};

export default Profile;
