import { Fragment, useState } from 'react'  
import Component1 from './components/Component1';
  
function App() {

  const [user, setUser] = useState("Ali Baltacı")

  return (

      <Fragment>
        <Component1 name = {user}/>
      </Fragment>
 
  );
}

export default App;
