import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

// import components

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from "./components/User";
import Layout from './Layout';




function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/*' element={ <Layout />}>

          <Route path='' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='users/*' element={ <Users /> } />
          {/* <Route path='users/:id' element={ <User /> } /> */}
          
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
