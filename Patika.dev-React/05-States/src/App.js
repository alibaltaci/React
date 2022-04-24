// useState

import { useState } from "react";

function App() {

  // name state i oluşturalım

  const [name, setName] = useState("Ali");

  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>

      <button onClick={ () => setName("Ahmet") }>Click</button>
    </div>
  );
}

export default App;
