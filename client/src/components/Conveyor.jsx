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

const Conveyor = () => {
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
                Conveyor
              </span><br/><br />
              Conveyor systems can be manufactured in various ways to meet the
              needs of each factory, such as spray booth conveyor, dry conveyor,
              cargo conveyor.
              <br />
              <br />
              Especially, in the production of various conveyors,
              which are essential for manpower and labor cost reduction, PT.
              YUNSUNG provides more convenient and perfect conveyor system.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center mb-6">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            src="/images/machinery/conveyor-3.jpeg"
            alt="conveyor-3"
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
              src="/images/machinery/conveyor-1.png"
              alt="conveyor-1"
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
              src="/images/machinery/conveyor-2.jpg"
              alt="conveyer-2"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conveyor;
