import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube,FaTiktok  } from 'react-icons/fa';
import { FaSquareThreads } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand/Logo */}
        <div>
          <h2 className="text-xl font-bold mb-3">HILYAH</h2>
          <p className="text-sm text-gray-400">
          Welcome to Hilyah, your trusted destination for quality sleep solutions in Canada. With over a years of experience in the industry, we have been committed to providing Canadians with the highest standard of comfort and relaxation through our premium mattresses and furniture.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><HashLink to="/cusservice#contact">Contact Us</HashLink></li>
            <li><HashLink to="/cusservice#faq">FAQs</HashLink></li>
            <li><HashLink to="/cusservice#returns">Return Policy</HashLink></li>
            <li><HashLink to="/cusservice#shipping">Shipping Info</HashLink></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><HashLink to="/info#about">About Us</HashLink></li>
        
            <li><HashLink to="/info#terms">Terms & Conditions</HashLink></li>
            <li><HashLink to="/info#privacy">Privacy Policy</HashLink></li>
          </ul>
        </div>

        {/* ///////news letter */}



        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-2">Get updates on offers and new arrivals.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white text-sm border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm py-2 rounded transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://www.facebook.com/profile.php?id=100070291784620"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaSquareThreads className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
            <a href="#"><FaTiktok  className="hover:text-white" /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} Cloud Comfort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
