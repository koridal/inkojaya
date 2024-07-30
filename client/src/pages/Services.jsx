import { motion } from "framer-motion";
import ServicesCard from '../components/ServicesCard';


const container = (delay) => ({
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Services = () => {
  return (
    <main className='screen-max-width'>
      <div className='mt-10 border'></div>
      <div>
        <motion.div
          variants={container(0)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <div className='flex items-center justify-center w-full mt-10 mb-5'>
            <h1 className='px-2 text-xl font-semibold text-[#1f1c0c]  border-l-[4px] border-[#504e4d] dark:text-white mb-5'>
              Our Services & Products
            </h1>
          </div>
          <div className='flex flex-col mb-5'>
            <h1 className='mx-auto text-xl font-bold text-center text-transparent md:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text'>
              We Provide Special Building Services
            </h1>
            <p className='px-5 mx-auto mt-5 mb-10'>
              PT. Inko Jaya Konstruksi provides all construction services. Especially we have 36 years of know-how in the factory construction.
            </p>
          </div>
        </motion.div>
        <ServicesCard />
      </div>
    </main>
  )
}

export default Services