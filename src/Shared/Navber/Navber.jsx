import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import useCartList from "../../hooks/useCartList";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { IoSearch } from "react-icons/io5";

const Navber = ({ setOpenCart, openCart, setSearch }) => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [data] = useCartList();
    const axiosPublic = useAxiosPublic();
    const { signOutUser, user } = useAuth();
    const [navOpen, setNavOpen] = useState(false);

    const { data: userData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user.email}`);
            return res.data;
        }
    });

    const hangleLogOut = () => {
        signOutUser();
    };

    const navLinks = <>
        <NavLink to="/" onClick={() => setNavOpen(false)} className='hover:text-[#077A7D]'>
            <li>Home</li>
        </NavLink>
        <NavLink to='/brands' onClick={() => setNavOpen(false)} className='hover:text-[#077A7D]'>
            <li>Brands</li>
        </NavLink>
        <NavLink to='/categories' onClick={() => setNavOpen(false)} className='hover:text-[#077A7D]'>
            <li>Categories</li>
        </NavLink>
        <NavLink to="/blogs" onClick={() => setNavOpen(false)} className='hover:text-[#077A7D]'>
            <li>Blogs</li>
        </NavLink>
        
        <NavLink to="/about-us" onClick={() => setNavOpen(false)} className='hover:text-[#077A7D]'>
            <li>About</li>
        </NavLink>
    </>;

    return (
        <div className="navbar bg-[#0D1B2A] fixed top-0 left-0 w-full z-50 px-2 md:px-4 lg:px-6">
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Dropdown Menu */}
                    {navOpen && (
                        <ul
                            tabIndex={0}
                            className="menu absolute top-12 left-0 bg-base-100 w-[90vw] max-w-xs p-4 shadow-lg rounded-md text-lg font-medium text-[#0D1B2A] z-50 space-y-2"
                        >
                            {navLinks}
                            <div className="divider"></div>
                            <NavLink to='/dashboard'><li>Dashboard</li></NavLink>

                            {user?.email ? (
                                <li className="hover:text-orange-600 ">
                                    <button onClick={hangleLogOut} className="pl-0">Logout</button>
                                </li>
                            ) : (
                                <li className="hover:text-orange-600 ">
                                    <Link to="/login" className="pl-0">Login</Link>
                                </li>
                            )}
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <Link to='/' className="hover:scale-105 ml-2">
                    <img src="https://i.ibb.co/4Zdz1LPN/navLogo.png" className="w-[100px] md:w-[120px] lg:w-[170px] h-[50px]" alt="Green Tech" />
                </Link>
            </div>

            {/* Search input - medium only */}
            <div className="hidden md:block lg:hidden">
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="w-[115px] md:w-[250px]" placeholder="Search Products" />
                    <IoSearch />
                </label>
            </div>

            {/* Center links - large devices */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium text-white">
                    {navLinks}
                </ul>
                <label className="input input-bordered flex items-center gap-2 ml-5">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow text-black" placeholder="Search Products" />
                    <IoSearch />
                </label>
            </div>

            {/* Right icons */}
            <div className="navbar-end text-white">
                <div className="flex items-center gap-4 ml-5 mr-2">
                    {/* Mobile Search Input */}
                    <div className="block md:hidden">
                        <label className="input input-bordered flex items-center gap-2">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="w-[80px] text-black" placeholder="Search" />
                            <IoSearch />
                        </label>
                    </div>

                    {/* Profile */}
                    <button onClick={() => setIsOpenProfile(!isOpenProfile)} className="hidden md:block">
                        {user?.email ? (
                            <img className="w-[40px] h-[40px] rounded-full" src={userData.photoURL || user.photoURL} alt="User" />
                        ) : (
                            <CgProfile className="text-xl" />
                        )}
                    </button>

                    {/* Cart */}
                    <button onClick={() => setOpenCart(!openCart)} className="relative">
                        <HiOutlineShoppingCart className="text-2xl" />
                        <div className="absolute -right-3 bottom-5 bg-secondary rounded-full text-white">
                            <p className="p-1">{data.length || 0}</p>
                        </div>
                    </button>
                </div>

                {/* Profile dropdown */}
                {isOpenProfile && (
                    <div className="absolute z-50 p-4 bg-green-100 top-16 right-4 rounded-lg shadow-md">
                        <ul className="font-medium space-y-1 text-[#0D1B2A]">
                            <li className="hover:text-orange-600">
                                <Link to="/dashboard">My Profile</Link>
                            </li>
                            {user?.email ? (
                                <li className="hover:text-orange-600">
                                    <button onClick={hangleLogOut}>Logout</button>
                                </li>
                            ) : (
                                <li className="hover:text-orange-600">
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navber;
