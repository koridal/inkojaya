import React from "react";
import { motion } from "framer-motion";
import ConstructionNav from "../components/ConstructionNav";

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
    <div className="max-w-6xl mx-auto mt-10">
      <div className="grid mt-10 text-white sm:h-40 place-items-center bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950">
        <h1 className="text-3xl font-semibold tracking-tight text-center">
          Construction Equipment
        </h1>
        <ConstructionNav />
      </div>
      <div className="flex flex-wrap max-w-6xl mx-auto mt-10">
        <div className="w-full lg:w-1/2">
          <div className="w-full p-4 pr-4 mt-4 lg:px-12">
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-light leading-6 tracking-tight text-justify"
            >
              <span className="text-2xl font-semibold text-transparent place-items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                Electrical Testing Equipment
              </span>
              <br />
              <br />
              Ampere Meter 5/25A <br />
              Ampere Meter 1/30A <br />
              Voltage Meter 300/750V <br />
              Voltage Meter 30/1000V <br />
              Power factor meter 5/25A 120/240V 3ψ <br />
              Wattmeter	5/25A 120/240V 3ψ <br />
              Torque wrench 900㎏/㎠ <br />
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 0.5 }}
              src="/images/electric-equip/elec-eq-1.jpg"
              alt="cargo_main"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-w-6xl mt-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/electric-equip/elec-eq-2.jpg"
              alt="cargo-1"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/electric-equip/elec-eq-3.jpg"
              alt="table hydraulic"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-w-6xl mt-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/electric-equip/elec-eq-4.jpg"
              alt="cargo-1"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/electric-equip/elec-eq-5.jpg"
              alt="table hydraulic"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
