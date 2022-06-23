import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      
      <h1>NAVBAR</h1>

      <nav>

        <ul>

            <li>
                <Link to={"/"}>
                    HOME
                </Link>
            </li>

            <li>
                <Link to={"blog"}>
                    Blog
                </Link>
            </li>

            <li>
                <Link to={"contact"}>
                    Contact
                </Link>
            </li>
        </ul>
      </nav>

      {/* Nested route 'larımız (ilgili nested route) burada gösterilecek  */}

      <Outlet /> 

    </div>
  )
}
