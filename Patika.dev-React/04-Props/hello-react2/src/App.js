import logo from './logo.svg';
import './App.css';

import User from './components/user.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <User name="Ali" surname="Baltacı" isLoggedIn={false}/>

      </header>
    </div>
  );
}

export default App;
