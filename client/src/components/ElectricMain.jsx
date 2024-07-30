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
    <div className="flex flex-wrap max-w-6xl mt-10">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-4 pr-4 mt-4 lg:px-12">
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="font-light leading-6 tracking-tight text-justify"
          >
            <span className="text-2xl font-semibold text-transparent place-items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                Power Panel & PLC Control Panel
            </span><br /><br />
            The special part of PT.YUNSUNG Electrical mechanical, product is
            designed and manufactured according to IEC <span className='text-sm'>(International
            Electro-technical Commission)</span>  and ANSI<span className='text-sm'>(American National Standards
            Institute)</span> standards from low voltage to high voltage.
            <br />
            <br />
            The switchgear realized in compact size is widely used from
            substation to a plant, construction building and apartment due to
            high blocking and high reliability. In particular, it is equipped
            with high performance VCB, ACB, MCCB, etc.
            <br />
            <br />
            To provide the best solution for our customers.
          </motion.p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center mb-6">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            src="/images/electric/panel-2.jpeg"
            alt="greeting"
            className="w-[500px] rounded-3xl px-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap max-w-6xl mt-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1 }}
              src="/images/electric/panel-1.jpeg"
              alt="greeting"
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
              src="/images/electric/control-panel-2.png"
              alt="greeting"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1.5 }}
              src="/images/electric/nyy-1-30.png"
              alt="cable-1"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1.5 }}
              src="/images/electric/nyy-4-75.png"
              alt="cable-2"
              className="w-[500px] rounded-3xl px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricMain;
