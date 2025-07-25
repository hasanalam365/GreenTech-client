import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdChangeCircle, MdDashboard, MdForwardToInbox, MdHomeWork } from "react-icons/md";
import useUser from "../../hooks/useUser";
import { BiMenuAltRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
import { FaRegHeart } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import { SiPowerpages } from "react-icons/si";
import { IoIosAddCircle, IoIosCloudDone } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { MdProductionQuantityLimits } from "react-icons/md";

const DashboardNav = ({ setIsOpenNav, isOpenNav, userData, isAdmin }) => {
    const { user, signOutUser } = useAuth();

    const handleLogOut = () => {
        signOutUser();
    };

    // userData check
    if (!userData || !userData.email) {
        return (
            <div className="flex justify-center items-center h-20 w-60 dark:bg-gray-50 dark:text-gray-800">
                <span>Loading user...</span>
            </div>
        );
    }

    return (
      


  
        <div className="flex flex-row-reverse justify-between ">
            <Helmet>
                <title>Dashboard | Green Tech </title>
            </Helmet>
            {/* Mobile toggle button */}
            <div className="md:hidden lg:hidden">
                <button onClick={() => setIsOpenNav(!isOpenNav)} className="mt-5 mr-5">
                    {!isOpenNav ? (
                        <GiHamburgerMenu className="text-2xl" />
                    ) : (
                        <BiMenuAltRight className="text-2xl" />
                    )}
                </button>
            </div>

            {/* Small device navigation */}
            <div className="z-30">
                {isOpenNav && (
                    <div className="h-screen block md:hidden lg:hidden p-3 space-y-2 w-60 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center p-2 space-x-4">
                            <img
                                src={userData.photoURL ? userData.photoURL : user.photoURL}
                                alt=""
                                className="w-12 h-12 rounded-full dark:bg-gray-500"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{userData.displayName}</h2>
                                <span className="flex items-center space-x-1">
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="text-xs hover:underline dark:text-gray-600"
                                    >
                                        {userData.email}
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="divide-y dark:divide-gray-300">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li>
                                    <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                                        <MdHomeWork className="text-xl" />
                                        <span>Homepage</span>
                                    </Link>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard"
                                        onClick={() => setIsOpenNav(false)}
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <MdDashboard className="text-lg" />
                                        <span>Dashboard</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <Link
                                        onClick={() => setIsOpenNav(false)}
                                        to="/dashboard/checkout"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <IoBagCheckOutline className="text-xl" />
                                        <span>Checkout</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setIsOpenNav(false)}
                                        to="/dashboard/orderTrack"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                                            <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                                            <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                                        </svg>
                                        <span>Orders Track</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setIsOpenNav(false)}
                                        to="/dashboard/wishlist"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <FaRegHeart />
                                        <span>Wishlist</span>
                                    </Link>
                                </li>

                                {/* Admin links: Only show if isAdmin === true */}
                                {isAdmin && (
                                    <>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/all-orders"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <SiPowerpages className="text-xl" />
                                                <span>Pending Orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/confirm-orders"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <IoIosCloudDone className="text-xl" />
                                                <span>Confirm Orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/order-status"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <IoIosCloudDone className="text-xl" />
                                                <span>All Order Status</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/allusers"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <FaUsers className="text-xl" />
                                                <span>All Users</span>
                                            </Link>
                                        </li>
                                        <li>
                                    <NavLink
                                        to="/dashboard/all-messages"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <MdForwardToInbox className="text-xl" />
                                       
                                        <span>Messages</span>
                                    </NavLink>
                                </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/add-product"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <IoIosAddCircle className="text-xl" />
                                                <span>Add Product</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/all-products"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                           
                                                <MdProductionQuantityLimits className="text-xl" />
                                                <span>All Products</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/update-product"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                                <MdChangeCircle className="text-xl" />
                                                <span>Update Product</span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <ul className="pt-4 pb-2 space-y-1 text-sm">
                                <li>
                                    <Link
                                        onClick={() => setIsOpenNav(false)}
                                        to="/dashboard/profile"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <FaRegUser className="text-lg" />
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z" />
                                            <rect width="32" height="64" x="256" y="232" />
                                        </svg>
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* Medium and large device navigation */}
            <div className="hidden md:block lg:block h-full p-3 space-y-2 w-60 md:w-[180px] lg:w-60 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex flex-col items-center justify-center p-2 space-x-4">
                    <img
                        src={userData.photoURL ? userData.photoURL : user.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                        <h2 className="font-medium text-center">{userData.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="text-xs hover:underline dark:text-gray-600"
                            >
                                {userData.email}
                            </a>
                        </span>
                    </div>
                </div>
                <div className="divide-y dark:divide-gray-300">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                            >
                                <MdHomeWork className="text-xl" />
                                <span>Homepage</span>
                            </NavLink>
                        </li>

                        <li className="dark:bg-gray-100 dark:text-gray-900">
                            <NavLink
                                to="/dashboard"
                                onClick={() => setIsOpenNav(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                                end
                            >
                                <MdDashboard className="text-lg" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard/checkout"
                                onClick={() => setIsOpenNav(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                            >
                                <IoBagCheckOutline className="text-xl" />
                                <span>Checkout</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/orderTrack"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current dark:text-gray-600"
                                >
                                    <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                                    <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                                    <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                                </svg>
                                <span>Orders Track</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/wishlist"
                                onClick={() => setIsOpenNav(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                            >
                                <FaRegHeart />
                                <span>Wishlist</span>
                            </NavLink>
                        </li>

                        {/* Admin Links */}
                        {isAdmin && (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/all-orders"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <SiPowerpages className="text-xl" />
                                        <span>Pending Orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/confirm-orders"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <IoIosCloudDone className="text-xl" />
                                        <span>Confirm Orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/order-status"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <IoIosCloudDone className="text-xl" />
                                        <span>All Order Status</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allusers"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <FaUsers className="text-xl" />
                                        <span>All Users</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/all-messages"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <MdForwardToInbox className="text-xl" />
                                       
                                        <span>Messages</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/add-product"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <IoIosAddCircle className="text-xl" />
                                        <span>Add Product</span>
                                    </NavLink>
                                </li>
                                <li>
                                            <Link
                                                onClick={() => setIsOpenNav(false)}
                                                to="/dashboard/all-products"
                                                className="flex items-center p-2 space-x-3 rounded-md"
                                            >
                                           
                                                <MdProductionQuantityLimits className="text-xl" />
                                                <span>All Products</span>
                                            </Link>
                                        </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/update-product"
                                        onClick={() => setIsOpenNav(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                                : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                        }
                                    >
                                        <MdChangeCircle className="text-xl" />
                                        <span>Update Product</span>
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <NavLink
                                to="/dashboard/profile"
                                onClick={() => setIsOpenNav(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-600 flex items-center p-2 space-x-3 rounded-md"
                                        : "dark:bg-gray-100 dark:text-gray-900 flex items-center p-2 space-x-3 rounded-md"
                                }
                            >
                                <FaRegUser className="text-lg" />
                                <span>Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={handleLogOut}
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current dark:text-gray-600"
                                >
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z" />
                                    <rect width="32" height="64" x="256" y="232" />
                                </svg>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;
