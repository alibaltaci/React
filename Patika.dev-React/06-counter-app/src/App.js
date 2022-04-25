import { useState } from "react";

import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  // increase function 

  const increase = () => setCount( count + 1)

  // decrease function 

  const decrease = () => setCount( count -1)

  // reset function 

  const reset = () => setCount(0)

  return (
    <div className="App">

       <h1> {count} </h1>

       <button onClick = { increase }>Increase</button>

       <button onClick = { decrease }>Decrease</button>
       
       <button onClick = { reset }>Reset</button>

    </div>
  );
}

export default App;
