// useState

import { useState } from "react";

function App() {

  // name state i oluşturalım

  const [name, setName] = useState("Ali");

  const [age, setAge] = useState(27);

  // Array state

  const [friends, setFriends] = useState(["Deniz", "İbrahim", "Hasan", "Tuncay"]);

  // object states

  const [address, setAddress] = useState({title: "Manisa", zip: 42133});

  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>

      <h2> { age } </h2>

      <button onClick={ () => setName("Ahmet") }>Change Name</button>

      <button onClick={ () => setAge(42) }>Change Age</button>

      <hr />
      <br /><br />

      <h2>Friends</h2>

      {/* Array State */}

      {
        friends.map( (friend, index) => <div key={index}> { friend } </div> )
      }

      {/* friend ekleme */}
      <br/>

      <button onClick={ () => setFriends( ["Emirhan", ...friends])}>Add New Friend</button>
  
      <hr />
      <br/><br/>

      {/* Object States */}

      <h2>Address</h2>

      <div> {address.title} {address.zip} </div>

      <br />

      <button onClick={ () => setAddress( {...address, title: "Ankara", zip: 42428} )}>Change the Address</button>

  
    </div>
  );
}

export default App;
