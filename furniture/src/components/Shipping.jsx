import React from "react";

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Shipping Information
      </h1>

      {/* Intro */}
      <p className="text-gray-600 text-center mb-6">
        We ensure fast and reliable delivery so your products reach you in
        perfect condition and on time.
      </p>

      {/* Shipping Details */}
      <div className="space-y-6">
        {/* Same Day Delivery */}
        <div className="p-5 bg-gray-50 rounded-xl hover:shadow transition duration-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Same-Day Delivery
          </h2>
          <p className="text-gray-600">
            Enjoy the convenience of our same-day delivery service. For orders
            placed before <span className="font-medium">12 PM EST</span>, we
            guarantee delivery on the same day. Orders placed after 12 PM EST
            will be delivered the very next day.
          </p>
        </div>

        {/* Shipping Charges */}
        <div className="p-5 bg-gray-50 rounded-xl hover:shadow transition duration-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Shipping Charges
          </h2>
          <p className="text-gray-600">
            Our shipping charges range between{" "}
            <span className="font-medium">$20 - $50</span> depending on your
            location and order size.
          </p>
        </div>

        {/* Contact Process */}
        <div className="p-5 bg-gray-50 rounded-xl hover:shadow transition duration-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Delivery Confirmation
          </h2>
          <p className="text-gray-600">
            After placing your order, we will promptly contact you at the phone
            number provided during checkout to verify the details and arrange a
            convenient delivery time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
