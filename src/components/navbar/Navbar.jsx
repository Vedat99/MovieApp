import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { PiFilmReelFill } from 'react-icons/pi'
import { TiHome } from 'react-icons/ti'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        {/**left Logo area */}
        <div className='left'>
          <Link to="/">
            <h1>MovieApp</h1>
          </Link>
        </div>
        {/**Center */}
        <div className='center'>
          <PiFilmReelFill/>
        </div>
        {/**Right icons */}
        <div className='right'>
          <ul>
            <li>
              <Link to="/">
                <TiHome/>
              </Link>
            </li>
            <li>
              <Link to="/my-list">
                <FaHeart/>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar