// import useEffect and useState Hooks 
import {useEffect, useState} from 'react';

// axios 
import axios from "axios";

function Users() {

  // useState   
  const [users, setUsers] = useState( [] );

  // loading...    
  const [isLoading, setIsLoading] = useState(true); // başlangıçta true

  useEffect( () => {

    // request with fetch native

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // // .then(users => console.log(users));
    // .then(users => setUsers(users))
    // .catch(err => console.log(err))
    // .finally( () => setIsLoading(false)); // işlem bittikten sonra false olacak. Yukarıda then içinde yapmaktan daha sağlıklı.

    // request with axios 

    axios("https://jsonplaceholder.typicode.com/users")
    .then(users => setUsers(users.data))  // bize döndüğü objenin altındaki data 'ya erişmemiz lazım.
    .catch(err => console.log(err))
    .finally( () => setIsLoading(false));


  }, []);

  return (
    <div>
      <h1>Users</h1>

      {
        isLoading && <div> Loading... </div>
      }

      {
        users.map(user => <div key={user.id}> {user.name} </div> )
      }

    </div>
  )
}

export default Users
