import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { PiFilmReelFill } from 'react-icons/pi'
import { TiHome } from 'react-icons/ti'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        {/**left Logo area */}
        <div className='left'>
          <a href='#'>MovieApp</a>
        </div>
        {/**Center */}
        <div className='center'>
          <PiFilmReelFill/>
        </div>
        {/**Right icons */}
        <div className='right'>
          <ul>
            <li><TiHome/></li>
            <li><FaHeart/></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar