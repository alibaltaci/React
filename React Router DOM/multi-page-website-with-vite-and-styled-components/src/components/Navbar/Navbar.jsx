import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbar } from '../../data/data.json'

function Navbar() {

    return (
    <nav>
        <ul>
            {
                navbar.map( (data) => (
                    data.page !== "page404" &&(
                            <li key={data.path} >
                                <NavLink  to={data.path}   
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