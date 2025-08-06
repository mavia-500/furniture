import React from "react";
import Faqs from "../components/Faqs";
import ReturnPolicy from "../components/ReturnPolicy";
import Shipping from "../components/Shipping";
const CustomerService = () => {
  return (
    <div className="mt-20">
      <div
        id="contact"
        className="w-full bg-gray-50 py-12 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-wide">
          SUPPORT
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Our dedicated customer services team is always ready to assist with
          any queries related to our products and services. Feel free to reach
          out to us anytime—we’ll do our best to help you.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Support Email:
            <a
              href="mailto:hilyah@gmail.com"
              className="text-blue-600 hover:underline ml-1 font-medium"
            >
              hilyah967@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div id="faq">
        <Faqs />
      </div>
      <div id="returns">
        <ReturnPolicy />
      </div>
      <div id="shipping">
        <Shipping />
      </div>
    </div>
  );
};

export default CustomerService;
