import React from "react";
import { Link } from "react-router-dom";
import FoamMattress from "../components/MattressCard";

const Mattress = () => {
  return (
    <div className="mt-20">
      <div id="foam-mattress">
        <FoamMattress />
      </div>
    </div>
  );
};

export default Mattress;
