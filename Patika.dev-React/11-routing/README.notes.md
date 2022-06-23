# React Routing Yapısı

Routing yapısı, React Router Kütüphanesi yardımıyla yapılır.

React Router Link:

- https://reactrouter.com/  

- https://reactrouter.com/docs/en/v6/getting-started/installation

### React Router 'ı kurmak için

cmd --> ``npm install react-router-dom@6`` 

### Import işlemleri

app.js --> ``import {BrowseRouter, Routes, Route, Link} from "react-router-dom";``

## Path vermek

http://localhost:3000/hi

- app.js --> 

        <BrowserRouter>
        
            <Routes>

                <Route path='hi' element={<h1>Hi</h1>} />

            </Routes>
        
        </BrowserRouter>


## Farklı Sayfalar Gösterelim 

src --> create "pages" folder.




