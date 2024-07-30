import AboutImg from "/images/homeimage/excavator.jpeg"
import { motion } from "framer-motion";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
    transition: { duration: 0.5, delay: delay },
	},
});

const HomeAbout = () => {
	return (
		<div className="pb-4 border-b border-b-neutral-900 lg:mb-35">
			<div className="flex flex-wrap">
      <div className='flex items-center justify-center w-full mt-10 mb-10'>
          <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y:-100 }}
            transition={{ duration: 0.5 }}
            className='px-2 text-xl font-semibold text-[#1f1c0c] border-l-[4px] border-[#504e4d] dark:text-white'>
            Welcome to PT. Inko Jaya Konstruksi
          </motion.h1>
        </div>
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.span
							variants={container(0.5)}
							initial="hidden"
							animate="visible"
							className="mx-auto text-xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
						>
							IJK Building Your Dream Since 1988
						</motion.span>
						<motion.p 
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className="max-w-xl px-4 py-6 my-2 font-light tracking-tighter text-justify lg:pl-24 lg:px-2"
            >
							<strong>PT. INKO JAYA KONSTRUKSI</strong> separated and became independent of the construction sector in March 2020 in line with the trend of demanding more expertise from PT. YUNSUNG, who has led the development of machinery and factory construction in Indonesia for 36 years, and has always achieved successful results since its launch.<br /><br/>
              In the future, we will do our best not only for prompt and accurate delivery but also for follow-up management.
              In addition, We will always strive to become a leader in the machinery & construction industry in the future through constant challenges and also to become a company that fulfills its responsibilities as a social enterprise.
						</motion.p>
            <div className='mx-auto'>
              <motion.button 
                variants={container(1.5)}
                initial='hidden'
                animate='visible'
                href='/about'
                className='px-6 mx-auto border rounded-full shadow-md text-md'>
                <a href="/about" rel='noopener noreferrer'>
                  More Detail
                </a>
              </motion.button>
            </div>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center">
						<motion.img 
              initial={{ x: 100, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={AboutImg} alt="about" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;