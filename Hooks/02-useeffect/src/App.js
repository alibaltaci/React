import { Fragment, useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const up = () => {
    setCount( (count) => count + 1 )
  }

  const down = () => {
    setCount( (count) => count - 1 )
  }

  useEffect( () => {
    setCounter( () => count * 2);
  }, [count] );

  return (
    <Fragment>
    
      <p>Count: {count}</p>
    
      <button
        onClick={ () => up() }
      >+</button>

      <button
        onClick={ () => down() }
      >-</button>

      <p>Counter: {counter}</p>
    
    </Fragment>

  );
}

export default App;
