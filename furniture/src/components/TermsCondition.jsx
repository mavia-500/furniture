import React from "react";

const TermsCondition = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Please review our terms carefully to understand your rights and
          obligations when using our services.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Overview
          </h2>
          <p className="leading-relaxed text-gray-700">
            This website, operated by Hilyah Canada Inc., is made available to
            you, the user, conditioned upon your acceptance of all terms,
            conditions, policies, and notices stated herein. References to “we”,
            “us”, and “our” throughout the site refer exclusively to Cloud
            Comfort Canada Inc. Our website offers various tools and services,
            which you may use or purchase under the terms outlined in this
            document.
          </p>
        </section>

        {/* User Engagement */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            User Engagement and Agreement
          </h2>
          <p className="leading-relaxed text-gray-700">
            Your visit to our site and/or purchase of products or services
            constitutes your engagement in our “Service” and signifies your
            binding agreement to these Terms of Service (“Terms”), inclusive of
            any additional terms, conditions, and policies referenced herein or
            accessible via hyperlink. These Terms apply to all site users, such
            as browsers, vendors, customers, merchants, and content
            contributors.
          </p>
        </section>

        {/* Terms Modification */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Terms Modification and Updates
          </h2>
          <p className="leading-relaxed text-gray-700">
            We reserve the right to modify or replace any part of these Terms by
            posting updates on our website. It is your responsibility to review
            this page periodically for changes.
          </p>
        </section>

        {/* Sections of Terms */}
        <section className="space-y-8">
          {[
            {
              title: "1. Online Store Terms",
              content:
                "By agreeing to these Terms, you confirm that you are of legal age or have consent for minors to use the site. Use of our products for illegal purposes is prohibited.",
            },
            {
              title: "2. General Conditions",
              content:
                "We reserve the right to refuse service to anyone at any time. You agree not to reproduce or exploit the Service without permission.",
            },
            {
              title: "3. Accuracy of Information",
              content:
                "We are not responsible if information on our site is not current, complete, or accurate. Historical information is for reference only.",
            },
            {
              title: "4. Modifications to Service and Prices",
              content:
                "Prices for our products are subject to change without notice. We may modify or discontinue the Service at any time.",
            },
            {
              title: "5. Products or Services",
              content:
                "Certain products may be available exclusively online with limited quantities. We strive to display product images accurately but cannot guarantee exact color representation.",
            },
            {
              title: "6. Accuracy of Billing and Account Information",
              content:
                "We reserve the right to refuse or cancel orders at our discretion. You must provide accurate and current purchase and account information.",
            },
            {
              title: "7. Governing Law",
              content:
                "These Terms are governed by the laws of 1455 Bristol Rd W Mississauga Ontario CA L5V 1W5.",
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="leading-relaxed text-gray-700">{section.content}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
