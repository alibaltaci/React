import './App.css';

// React Router Lib 
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

    // Basit Bir Örnek

    <BrowserRouter>
    
      <Routes>

        <Route path='hi' element={<h1>Hi</h1>} />

        <Route path='Bye' element={<h1>Bye</h1>} />

      </Routes>
    
    </BrowserRouter>

    // Daha Gerçekçi Bir Örnek
    

  );
}

export default App;
