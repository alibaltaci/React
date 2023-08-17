import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header>
        <NavLink to="/" >
            {/* <img src='./logo/logo.png' alt='logo' /> */}
            <p>Logo</p>
        </NavLink>
        <Navbar />
    </header>
  )
}

export default Header