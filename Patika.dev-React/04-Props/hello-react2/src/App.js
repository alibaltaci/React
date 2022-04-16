import logo from './logo.svg';
import './App.css';

import User from './components/user.js';

const friends = [
  {
    id: 42,
    name: "Ahmet"
  }, 
  {
    id:43,
    name: "İbrahim"
  },
  {
    id: 44,
    name: "Deniz"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <User 
        name="Ali" 
        surname="Baltacı" 
        isLoggedIn={true} 
        // friends={["Ahmet", "İbrahim", "Deniz"]}
        friends={friends}
        />

      </header>
    </div>
  );
}

export default App;
