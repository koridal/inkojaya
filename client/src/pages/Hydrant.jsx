import React from "react";
import HydrantMain from '../components/HydrantMain';

const Hydrant = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid h-40 mt-10 text-white place-items-center bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950">
        <h1 className="text-3xl font-semibold tracking-tight text-center ">
          Hydrant Pipe & Chiller & Hydrant System
        </h1>
      </div>
      <HydrantMain />
    </div>
  );
};

export default Hydrant;
