import React, { useState } from 'react';
import {motion} from 'framer-motion';
import ConstructionImg from '/images/homeimage/construction.jpg';
import FirefightingImg from '/images/homeimage/fire-fighting.jpg';
import MachineryImg from '/images/homeimage/machinery.jpg';
import ElectricImgImg from '/images/homeimage/electric.jpg';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] =useState(false);

  function handleFlip () {
    if(!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true);
    }
  }

  return (
    <div className='flex flex-row'>
      <div className='flex items-center justify-center cursor-pointer'>
        <div className='flip-card w-[400px] h-[300px] rounded-md' onMouseOver={handleFlip}>
          <motion.div
            className='flip-card-inner w-[100%] h-[100%]'
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition = {{ duration: 1, animationDirection: 'normal' }}
            onAnimationComplete = {() => setIsAnimating(false)}
          >
            <div
              className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 bg-[#f5f5f5]'
            >
              <h1 className='text-2xl font-bold'>Sky</h1>
              <p>Live on top of the world</p>
            </div>
            <div
              className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
              style={
                {backgroundImage: `url(${ConstructionImg})`}
              }
            >
              <h1 className='text-2xl font-bold'>Earth</h1>
              <p>or in the maze of the city</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='flex items-center justify-center cursor-pointer'>
        <div className='flip-card w-[400px] h-[300px] rounded-md' onMouseOver={handleFlip}>
          <motion.div
            className='flip-card-inner w-[100%] h-[100%]'
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition = {{ duration: 1, animationDirection: 'normal' }}
            onAnimationComplete = {() => setIsAnimating(false)}
          >
            <div
              className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 bg-[#f5f5f5]'
            >
              <h1 className='text-2xl font-bold'>Sky</h1>
              <p>Live on top of the world</p>
            </div>
            <div
              className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
              style={
                {backgroundImage: `url(${FirefightingImg})`}
              }
            >
              <h1 className='text-2xl font-bold'>Earth</h1>
              <p>or in the maze of the city</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CardFlip