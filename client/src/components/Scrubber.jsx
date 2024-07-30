import React from "react";
import { motion } from "framer-motion";
import MachineryNav from '../components/MachineryNav';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

const Scrubber = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <div className="grid mt-10 text-white sm:h-40 place-items-center bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950">
        <h1 className="text-3xl font-semibold tracking-tight text-center">
          Machinery
        </h1>
        <MachineryNav />
      </div>
      <div className='flex flex-wrap max-w-6xl mx-auto mt-10'>
        <div className="w-full lg:w-1/2">
          <div className="w-full p-4 pr-4 mt-4 lg:px-12">
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-light leading-6 tracking-tight text-justify"
            >
              <span className='text-2xl font-semibold text-transparent place-items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text'>
                Scrubber
              </span><br/><br />
              The scrubber produced by PT.YUNSUNG is used to absorb and separate contaminants such as dust, powder, and odor.
              <br />
              <br />
              At the same time, it can play a role of clearing the environment inside the factory that produces various machines.
              <br />
              Mainly in various industrial fields such as production, electronics, plywood, clothing, manufacturing, sewing factory etc.
              <br /> 
              <br />
              It can be used variously.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center mb-6">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            src="/images/machinery/scrubber-1.jpg"
            alt="scrubber-1"
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
              src="/images/machinery/scrubber-2.jpg"
              alt="scrubber-2"
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
              src="/images/machinery/scrubber-3.jpg"
              alt="scrubber-3"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrubber;