import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/userContext";

const Navbar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const hideOut = ["/login", "/signup"];
  if (hideOut.includes(location.pathname)) return null;

  return (
    <nav className="w-full h-16 bg-green-700 text-white flex justify-between items-center px-6 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold hover:scale-110 transition-transform"
      >
        CarbonPrint 🌱
      </Link>

      {/* User Info */}
      {user && (
        <Link
          to="/profile"
          className="flex items-center space-x-3 cursor-pointer"
        >
          <p className="text-sm hidden md:block">Hello, {user.firstname}</p>
          <img
            src={`https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}&background=random`}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-white shadow-sm transition-transform duration-300 hover:scale-110"
          />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
