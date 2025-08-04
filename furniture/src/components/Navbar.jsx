import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import CartFunctionality from "./CartFunctioanlity"; // Fix typo in import name

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Fix typo in variable name

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log("Toggle menu called"); // Debug log
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600 transition duration-200";

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/">🛏️ HILYAH</NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
          <NavLink to="/mattress" className={navLinkClass}>
            Mattress
          </NavLink>
          <NavLink to="/bedframes" className={navLinkClass}>
            Bed Frames
          </NavLink>
          <NavLink to="/boxspring" className={navLinkClass}>
            Box Springs
          </NavLink>
          <button onClick={() => setCartOpen(true)}>View Cart</button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-6 text-gray-700 font-medium text-sm">
          <div>
            <NavLink
              to="/mattress"
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Mattress
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/bedframes"
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Bed Frames
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/boxspring"
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Box Springs
            </NavLink>
          </div>
          <div>
            <button onClick={() => setCartOpen(true)}>View Cart</button>
          </div>
        </div>
      )}

      {/* Render CartFunctionality only when cartOpen is true */}
      {cartOpen && (
        <CartFunctionality
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={{}}
        />
      )}
    </div>
  );
};

export default Navbar;