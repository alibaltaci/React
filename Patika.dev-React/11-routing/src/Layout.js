import React from 'react';

// import { Link, Outlet } from 'react-router-dom'

import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      
      <h1>NAVBAR</h1>

      <nav>

        <ul>

            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "blue"
                }) } to={"/"}>
                        HOME
                </NavLink>
            </li>

            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "blue"
                })} to={"blog"}>
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "blue"
                })} to={"contact"}>
                    Contact
                </NavLink>
            </li>
        </ul>
      </nav>

      {/* Nested route 'larımız (ilgili nested route) burada gösterilecek  */}

      <Outlet /> 

    </div>
  )
}
