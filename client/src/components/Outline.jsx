import { COMPANY_INTRO, HISTORY } from "./../constants/index";
import Outline from "/images/homeimage/history.png";
import { motion } from "framer-motion";
import CEO from "/images/homeimage/ceo_small.jpg";
import { DropdownDivider } from "flowbite-react";

const container = (delay) => ({
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 mt-6 mb-10 border-b border-b-neutral-900 dark:border-b-neutral-200 lg:mb-12">
      <div>
        <motion.h1
          variants={container(0)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="pb-2 text-3xl font-normal tracking-tighter md:pb-6 lg:mt-12 lg:pb-12 lg:text-4xl"
        >
          Company Introduction
        </motion.h1>
      </div>

      <div className="items-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={CEO}
              alt="ceoImg"
              className="mx-auto mt-6 rounded-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 mt-6 mb-4 font-light tracking-tighter text-justify md:mt-16"
            >
              Specializes in supplying a variety of mechanical equipment and
              parts, including construction materials, high-pressure and
              low-pressure panels, lifts, and conveyors.
              <br />
            </motion.p>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 font-light tracking-tighter text-justify"
            >
              Execute accurate and systematic processes from design to
              construction and commissioning.
              <br />
            </motion.p>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 mt-4 font-light tracking-tighter text-justify"
            >
              With a team of experts and a range of licenses, our expertise is
              built on years of experience and accumulated technology.
              <br />
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="w-full mt-10 lg:w-1/2">
            <div className='px-6'>
              {HISTORY.map((history, index) => (
                <div key={index} className="flex flex-wrap mb-2 lg:justify-center sm:mb-8">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4"
                  >
                    <p className="mb-2 text-sm text-neutral-400">
                      {history.year}
                    </p>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                  >
                    <h6 className="mb-2 font-semibold">{history.name}</h6>
                    <p className="mb-2 text-neutral-400">
                      {history.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={Outline}
              alt="outline"
              width={500}
              height={300}
              className="p-2 px-2 mx-auto mt-6 border rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
