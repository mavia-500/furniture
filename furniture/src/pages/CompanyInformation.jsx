import React from "react";
import TermsCondition from "../components/TermsCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import About from "../components/About";

const CompanyInformation = () => {
  return (
    <div className="mt-20">
      <div id="about">
        <About />
      </div>

      <div id="terms">
        <TermsCondition />
      </div>
      <div id="privacy">
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default CompanyInformation;
