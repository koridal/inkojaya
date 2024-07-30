import React from 'react'
import { Link } from 'react-router-dom'

const MachineryNav = () => {
  return (
    <div>
      <ul className='flex flex-col my-4 text-sm text-gray-400 sm:gap-8 sm:flex-row sm:text-base '>
        <Link className='hover:text-white' to='/conveyor'><li>Conveyor</li></Link>
        <Link className='hover:text-white' to='/cargo'><li>Cargo Lift</li></Link>
        <Link className='hover:text-white' to='/press'><li>Press</li></Link>
        <Link className='hover:text-white' to='/mixer'><li>Mixer Machine</li></Link>
        <Link className='hover:text-white' to='/scrubber'><li>Scrubber</li></Link>
        <Link className='hover:text-white' to='/rack'><li>Rack System</li></Link>
      </ul>
    </div>
  )
}

export default MachineryNav