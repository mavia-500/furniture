import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">Hilyah</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Your trusted destination for premium sleep solutions in Canada for
          over a decade.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Hilyah</span>, your
          ultimate source for high-quality mattresses and furniture. With over a
          years of industry expertise, we are dedicated to providing Canadians
          with unmatched comfort and durability. Our products are carefully
          crafted to help you achieve better sleep and a more relaxing home
          environment.
        </p>
      </div>

      {/* Mission, Vision, Commitment Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver exceptional comfort and support through innovative sleep
            solutions tailored to the needs of every Canadian household.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be the leading name in premium mattresses and home comfort,
            inspiring healthier and happier lifestyles.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            Our Commitment
          </h3>
          <p className="text-gray-600">
            We prioritize customer satisfaction by offering quality products,
            transparent policies, and exceptional support at every step.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Experience Unmatched Comfort Today
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our collection and find the perfect mattress or furniture for
          your home.
        </p>
        <Link
          to={"/"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;
