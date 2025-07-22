import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed '>
        <div className='flex content-between w-full'>
            <div>logo</div>
            <div>
                <div className='space-x-3.5'>
                    <NavLink to={"/mattres"}>Mattress</NavLink>
                    <NavLink to={"/bedframes"}>Bed Frames</NavLink>
                    <NavLink to={"/boxsprings"}>Box Spring</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar