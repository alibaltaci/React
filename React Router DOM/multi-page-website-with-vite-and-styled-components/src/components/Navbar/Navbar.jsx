import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbar } from '../../data/data.json'
import { url } from '../../utils'

import routes from '.././../Routes'

function Navbar() {

    return (
    <nav>
        <ul>
            {
                navbar.map( (data) => (
                    data.page !== "page404" &&(
                            <li key={data.path} >
                                {/* <NavLink  to={data.path}    */}
                                <NavLink  to={ url(data.path) }   
                                    style={ ({isActive}) => ({
                                        backgroundColor: isActive ? "red" : "transparent"
                                    })}
                                >{data.content}</NavLink>
                            </li>
                    )
                ) )
            }
        </ul>
    </nav>
  )
}

export default Navbar