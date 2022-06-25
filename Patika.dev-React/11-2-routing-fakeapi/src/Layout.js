import React from 'react';

import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>

      <h1>Navbar</h1>

      <nav>

        <ul>

            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "yellow"
                })} to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "yellow"
                })} to={"users"}>Users</NavLink>
            </li>
            <li>
                <NavLink style={ ( {isActive} ) => ({
                    color: isActive ? "red" : "yellow"
                })} to={"about"}>About</NavLink>
            </li>

        </ul>

      </nav>

      <Outlet />

    </div>
  )
}
