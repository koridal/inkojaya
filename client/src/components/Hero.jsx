import React from 'react';
import { motion } from 'framer-motion';

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
    transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	return (
		<div className='relative flex w-full'>
			<video
				src='/videos/crane.mp4'
				className='relative object-cover max-h-screen mx-auto'
				autoPlay
				loop
				muted
			/>
			<div className='absolute sm:py-[128px] py-[64px]'>
				<motion.h1 
          variants={container(0)}
					initial='hidden'
					animate='visible'
          className='text-center font-extrabold text-2xl md:text-4xl lg:text-6xl text-white pl-[64px] xl:pt-[128px]'>
					An Expert Construction <br />
					Services &nbsp;you can &nbsp;Trust
				</motion.h1>
				<motion.p 
          variants={container(0.5)}
          initial='hidden'
          animate='visible'
          className='text-sm w-[360px] mt-4 md:w-full text-gray-100 pl-[72px] md:text-lg'>
					You want it, We will do best to Build on Creative
					Architectural & Solution
				</motion.p>
			</div>
		</div>
	);
};

export default Hero;
