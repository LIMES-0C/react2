import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = () => {
  return (
    <div className='flex justify-between py-5 shadow-2xl'>
      <div className='font-bold text-xl'>
        Traning
      </div>
      <div className='flex gap-6 mr-6'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>

      </div>
      
    </div>
  )
}

export default Toolbar
