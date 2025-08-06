import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 border-b pb-4">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>
            This privacy policy applies to hilyah.ca and all other websites,
            affiliates or products owned by Hilyah Canada. This privacy policy
            explains how we may collect, use or disclose your personal
            information which we would request during the purchase of our
            products, your communication with us or from any of our third party
            platforms.
          </p>

          <p>
            We collect personal information from our customers under the
            following circumstances:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Purchasing furniture/mattress from us:</strong> When you
              make a purchase personal information like your billing address,
              delivery address, contact, name, email address and payment
              information are collected.
            </li>
            <li>
              <strong>Submitting information to us:</strong> We collect
              information you submit to us through reviews, referrals and
              recommendations.
            </li>
            <li>
              <strong>Communication with us:</strong> We collect information
              from you when you communicate with us by email, calling our store
              or subscribing to our newsletter.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6">
            How Hilyah uses your information
          </h2>
          <p>
            We do not monetize your personal information, we use your
            information to enhance our service and products on our website.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>To debug or solve problems on our website.</li>
            <li>
              To improve communication between yourself and our support team.
            </li>
            <li>
              To detect cyber incidents and prevent fraudulent or malicious
              activity.
            </li>
            <li>
              For technological research to improve our service and products on
              our website.
            </li>
            <li>For advertisements such as targeted ads or SMS offers.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6">
            How Hilyah may disclose your information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To Service providers</li>
            <li>Other users</li>
            <li>As required by law</li>
            <li>With your permission under other circumstances</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6">
            Your rights as a customer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to your personal information</li>
            <li>Request correction to your personal information</li>
            <li>Request deletion of your personal information</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6">Cookies</h2>
          <p>
            We may use cookies to enhance your experience on our website. You
            may restrict our cookies when prompted.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">
            Third Party Advertising
          </h2>
          <p>
            Hilyah may use third party advertising for our website. We are not
            responsible for the accurateness of information found on third party
            platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
