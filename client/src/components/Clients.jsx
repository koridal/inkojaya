import Marquee from "./Marquee";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Clients = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-10 mb-10 overflow-x-hidden text-white max-w-7xl">
      <div>
        <motion.h1
          variants={container(0)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className='px-2 text-xl font-semibold text-[#1f1c0c] border-l-[4px] border-[#504e4d] text-center  dark:text-white mt-10'
        >
          Our Clients
        </motion.h1>
      </div>
      <motion.h1
          
          className="mx-auto mt-10 mb-20 text-xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
        >
          We always wish our customers the best.
        </motion.h1>
      <Marquee />
    </div>
  );
};

export default Clients;
