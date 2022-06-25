import {useEffect, useState} from 'react';

import axios from "axios";

import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

import User from './User';


export default function Users() {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then( (res) => setUsers(res.data))
        .finally( () => setLoading(false));
    }, []);

  return (
    <div>
      <h1>Users</h1>

      {loading && <div>Loading...</div>}

      <nav>
      
            {
                users.map( user => 
                    <NavLink key={user.id}
                         to={`users/${user.id}`}>
                            {user.name} <br />
                    </NavLink>
                )

            }

      </nav>

      <Routes>
        <Route path='/:id' element={ <User /> } />
      </Routes>

      <Outlet />



    </div>
  )
}
