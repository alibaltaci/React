import { useState, useEffect} from "react";

import { useParams, Link } from "react-router-dom";

import axios from "axios";

export default function User() {

    const { id } = useParams();

    const [user, setUser] = useState( {} );

    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .finally( () => setLoading(false));
    }, [id]);

  return (
    <div>

        <h1>User Detail</h1>

        {loading && <div>Loading</div>}

        Name: {user.name}
        <br />
        User Name: {user.username}
        <br />
        Email: {user.email}
        <br />
        Phone: {user.phone}
        <br />
        Website: {user.website}
        <br />
        company: {JSON.stringify(user.company)}
        <br />
        <br />
        <Link to={`/users/${parseInt(id) + 1}`}>Next User ( {parseInt(id) + 1} )</Link>

        
          
    </div>
  )
}
