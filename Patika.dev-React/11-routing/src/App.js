import './App.css';

// React Router Lib 
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Layout for navbar
import Layout from './Layout';

import Post from './pages/Post';

function App() {
  return (


    <BrowserRouter>
    
      <Routes>

      {/* Basit Bir Örnek */}

        {/* <Route path='hi' element={<h1>Hi</h1>} />

        <Route path='Bye' element={<h1>Bye</h1>} /> */}


      {/* // Daha Gerçekçi Bir Örnek */}

        <Route path='/*' element={ <Layout /> }>

          {/* Nested Route */}

          <Route path='' element={ <Home /> }/>  

          <Route path='contact' element={ <Contact /> }/>  

          <Route path='blog' element={ <Blog /> }/>  

          <Route path='blog/:postId' element={ <Post /> }/>  


        </Route>
 

      </Routes>
    
    </BrowserRouter>



  );
}

export default App;
