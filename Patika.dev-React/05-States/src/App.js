// useState

import { useState } from "react";

function App() {

  // name state i oluşturalım

  const [name, setName] = useState("Ali");

  const [age, setAge] = useState(27);

  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>

      <h2> { age } </h2>

      <button onClick={ () => setName("Ahmet") }>Change Name</button>

      <button onClick={ () => setAge(42) }>Change Age</button>

    </div>
  );
}

export default App;
