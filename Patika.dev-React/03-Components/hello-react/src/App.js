import './App.css';

import Header from './components/header.js';

const name = "Ali";

const surmane = "Baltacı";

const isLoggedIn = true

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1>
      <Header /> */}

      {/*  Kuşullu rendrerlama */}

      {/* <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surmane}`}</h1>

      {!isLoggedIn && `Giriş yapınız...`} */}

      {/* short if */}

      <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surmane}` : `Giriş yapınız...`}</h1>
    </div>
  );
}

export default App;
