import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import useCartList from "../../hooks/useCartList";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Navbar = ({ setOpenCart, openCart, setSearch }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [data] = useCartList();
  const axiosPublic = useAxiosPublic();
  const { signOutUser, user } = useAuth();
  const menuRef = useRef(null);

  const { data: userData = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleLogout = () => {
    signOutUser();
  };

  // Close mobile nav if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = (
    <>
      {[
        { label: "Home", to: "/" },
        { label: "Brands", to: "/brands" },
        { label: "Categories", to: "/categories" },
        { label: "Blogs", to: "/blogs" },
        { label: "About", to: "/about-us" },
      ].map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => setNavOpen(false)}
          className={({ isActive }) =>
            `hover:text-green-500 transition duration-200 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <li>{label}</li>
        </NavLink>
      ))}
    </>
  );

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 px-4 bg-white shadow-md backdrop-blur-md">
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="lg:hidden" ref={menuRef}>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl text-gray-700"
          >
            ☰
          </button>

          {navOpen && (
            <ul className="absolute top-full left-0 w-full p-4 bg-white shadow-lg rounded-b-xl z-50 space-y-2 text-gray-800 text-base font-medium">
              {navLinks}
              <hr />
              <NavLink
                to="/dashboard"
                onClick={() => setNavOpen(false)}
                className="block"
              >
                Dashboard
              </NavLink>
              {user?.email ? (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setNavOpen(false);
                    }}
                    className="block w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" onClick={() => setNavOpen(false)}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/" className="ml-2">
          <img
            src="https://i.ibb.co/4Zdz1LPN/navLogo.png"
            className="w-[120px] h-[50px]"
            alt="Green Tech"
          />
        </Link>
      </div>

      {/* Desktop nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 gap-6 text-gray-700 font-semibold">
          {navLinks}
        </ul>
        <div className="ml-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow text-black"
              placeholder="Search Products"
            />
            <IoSearch />
          </label>
        </div>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-4 text-gray-700">
        {/* Cart */}
        <button onClick={() => setOpenCart(!openCart)} className="relative">
          <HiOutlineShoppingCart className="text-2xl" />
          <div className="absolute -right-3 bottom-4 bg-green-500 rounded-full text-white text-xs px-1">
            {data.length || 0}
          </div>
        </button>

        {/* Profile */}
        <button onClick={() => setIsOpenProfile(!isOpenProfile)}>
          {user?.email ? (
            <img
              src={userData.photoURL || user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-green-500"
            />
          ) : (
            <CgProfile className="text-2xl" />
          )}
        </button>

        {isOpenProfile && (
          <div className="absolute top-16 right-4 p-4 bg-white rounded-lg shadow-md z-50 text-sm">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              {user?.email ? (
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
