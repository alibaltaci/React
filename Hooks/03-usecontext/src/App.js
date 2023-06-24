import {createContext, useState } from 'react'  
import Component1 from './components/Component1'
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState("Ali Baltacı")

  return (     
    <UserContext.Provider value={ user }>
      <div>
        <Component1 name={user} />
      </div>
    </UserContext.Provider>
 
  );
}

export default App;
