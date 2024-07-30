import React from 'react'
import { Link } from 'react-router-dom'

const ConstructionNav = () => {
  return (
    <div>
      <ul className='flex flex-col my-4 text-sm text-gray-400 sm:gap-8 sm:flex-row sm:text-base '>
        <Link className='hover:text-white' to='/construction-equip'><li>Construction</li></Link>
        <Link className='hover:text-white' to='/electric-equip'><li>Electric</li></Link>
        <Link className='hover:text-white' to='/machine-equip'><li>Machinery</li></Link>
      </ul>
    </div>
  )
}

export default ConstructionNav