import React from "react";
import ConstructionEquip from '../components/ConstructionEquip';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

const Construction = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ConstructionEquip />
    </div>
  );
};

export default Construction;
