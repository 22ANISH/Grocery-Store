
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi"; // Import search icon
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = ({ setSearchQuery }) => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  const activeLinkStyle = "text-green-500 font-bold";
  const defaultLinkStyle = "hover:text-green-500";

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <NavLink to={""}>
          <div className="h-10">
            <h1 className="bg-green-500 text-white text-xl p-2 rounded-md font-bold">The Good Food Co</h1>
          </div>
        </NavLink>

        {/* Search Bar */}
        <div className="flex items-center gap-4 md:gap-7">
          <div className="relative">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="px-4 py-1 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>

          {/* Navigation Links */}
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <NavLink 
              to={""} 
              className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
            >
              Home
            </NavLink>
            <NavLink 
              to={"about"} 
              className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
            >
              About
            </NavLink>
            <NavLink 
              to={"contact"} 
              className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
            >
              Contact
            </NavLink>
          </nav>

          {/* Cart Icon */}
          <div className="text-2xl text-slate-600 relative">
            <NavLink to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </NavLink>
          </div>

          {/* User Icon */}
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" alt="User Profile" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center bg-black">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <NavLink to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2 bg-red-500 p-2 my-2 mx-2 rounded-lg text-white font-bold">
                    New Product
                  </NavLink>
                )}

                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <NavLink to={"login"} className="whitespace-nowrap cursor-pointer px-2 bg-red-500 p-2 my-2 mx-2 rounded-lg text-white font-bold">
                    Login
                  </NavLink>
                )}

                {/* Mobile Links */}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <NavLink 
                    to={""} 
                    className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)} 
                    className=" bg-red-500 p-2 my-2 mx-2 rounded-lg text-white font-bold"
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to={"about"} 
                    className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)} 
                    className=" bg-red-500 p-2 my-2 mx-2 rounded-lg text-white font-bold"
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to={"contact"} 
                    className={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)} 
                    className=" bg-red-500 p-2 my-2 mx-2 rounded-lg text-white font-bold"
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
