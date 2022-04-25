// useState

import { useState } from "react";

function App() {

  // name state i oluşturalım

  const [name, setName] = useState("Ali");

  const [age, setAge] = useState(27);

  // Array state

  const [friends, setFriends] = useState(["Deniz", "İbrahim", "Hasan", "Tuncay"]);

  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>

      <h2> { age } </h2>

      <button onClick={ () => setName("Ahmet") }>Change Name</button>

      <button onClick={ () => setAge(42) }>Change Age</button>

      <hr />
      <br /><br />

      <h2>Friends</h2>

      {
        friends.map( (friend, index) => <div key={index}> { friend } </div> )
      }

      {/* friend ekleme */}
      <br/>

      <button onClick={ () => setFriends( ["Emirhan", ...friends])}>Add New Friend</button>
      

    </div>
  );
}

export default App;
