import './App.css';

import { useState, useEffect } from "react"; 

function App() {

  const [number, setNumber] = useState(0);

  const [name, setName] = useState("Ali");


  // useEffect

  useEffect( () => console.log("State Güncellendi!"));

  useEffect( () => {
    console.log("Component Mount Edildi")
  }, [] )
  

  return (
    <div className="App">

      <h1>{number}</h1>

      <button onClick={ () => setNumber(number + 1) }>click</button>

      <br />

      <h1>{name}</h1>

      <button onClick={ () => setName("Ali Baltacı")}>Click</button>

    </div>
  );
}

export default App;
