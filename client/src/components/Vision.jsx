import { DIVERSITY, INTEGRITY, MULTI_PROCESS } from "./../constants/index";
import visionImg from "/images/homeimage/visionImg.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

const Vision = () => {
  return (
    <div className='mb-4 max-w-7xl'>
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-4 mb-2 text-3xl font-normal tracking-tighter text-left lg:text-4xl sm:mb-8"
      >
        Our Vision
      </motion.h1>
      <div className='flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
          <div className="flex flex-wrap items-center lg:items-start">
            <div className='w-full px-4 pr-4 mt-4'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Diversity
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {DIVERSITY}
              </motion.p>
            </div>
            <div className='w-full px-4'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Integrity
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {INTEGRITY}
              </motion.p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:mt-6 lg:items-start">
            <div className='w-full px-4'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Multi Process
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {MULTI_PROCESS}
              </motion.p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 0.5 }}
              src={visionImg}
              alt="greeting"
              className='px-2 rounded-3xl w-[500px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
