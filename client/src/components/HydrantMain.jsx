import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});


const ElectricMain = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-6xl mt-10">
      <div className="w-full lg:w-1/2">
        <div className="w-full pr-4 mt-4 pr- lg:px-12">
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="font-light leading-6 tracking-tight text-justify"
          >
            <span className="text-2xl font-semibold text-transparent place-items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
              Hydrant Pipe <br /><br /> Chiller<br/><br /> Hydrant System
            </span>
          </motion.p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center mb-6">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            src="/images/hydrant/hydrant.jpg"
            alt="hydrant"
            className="w-[500px] rounded-3xl px-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap max-w-6xl mt-10">
        <div className="w-full mb-6 lg:w-1/2">
          <div className="flex justify-center mb-2">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/hydrant/chiller.jpg"
              alt="chiller"
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
              src="/images/hydrant/pipe.jpg"
              alt="greeting"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricMain;
