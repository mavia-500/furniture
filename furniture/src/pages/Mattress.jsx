import React from "react";
import { Link } from "react-router-dom";
import MattressCard from "../components/MattressCard";

const Mattress = () => {
  return (
    <div className="mt-20">
      <div id="foam-mattress">
        <MattressCard />
      </div>
    </div>
  );
};

export default Mattress;
