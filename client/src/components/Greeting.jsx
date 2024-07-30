import { KNOW_HOW, INDUSTRY, TRUST, LEADING_COMPANY } from "./../constants/index";
import greetingImg from "/images/homeimage/greetingImg.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

const Greeting = () => {
  return (
    <div className='mb-4 max-w-7xl'>
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-4 text-3xl font-normal tracking-tighter text-left lg:text-4xl sm:mb-2"
      >
        Greeting
      </motion.h1>
      <div className='flex flex-wrap border-b border-b-neutral-900 dark:border-b-neutral-200'>
        <div className='w-full lg:w-2/3'>
          <div className="flex flex-wrap items-center lg:items-start">
            <div className='w-full px-4 pr-4 lg:w-1/2'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Accumulated know-how
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {KNOW_HOW}
              </motion.p>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Industry 4.0
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {INDUSTRY}
              </motion.p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:mt-6 lg:items-start">
            <div className='w-full px-4 lg:w-1/2'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Trust
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {TRUST}
              </motion.p>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
              >
                Leading Company
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-2 my-2 text-sm tracking-tighter text-justify font-md"
              >
                {LEADING_COMPANY}
              </motion.p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3'>
          <div className="flex justify-center mb-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 0.5 }}
              src={greetingImg}
              alt="greeting"
              className='px-2 rounded-3xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
