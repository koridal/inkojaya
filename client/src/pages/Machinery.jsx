import React from "react";
import { motion } from "framer-motion";
import MachineryNav from '../components/MachineryNav';
import Conveyor from '../components/Conveyor';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

const Machinery = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Conveyor />
    </div>
  );
};

export default Machinery;
