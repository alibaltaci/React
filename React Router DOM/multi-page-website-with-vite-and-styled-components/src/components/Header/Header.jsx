import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { url } from '../../utils'

function Header() {
  return (
    <header>
        {/* <NavLink to="/" > */}
        <NavLink to={ url('home') } >
            {/* <img src='./logo/logo.png' alt='logo' /> */}
            <p>Logo</p>
        </NavLink>
        <Navbar />
    </header>
  )
}

export default Header