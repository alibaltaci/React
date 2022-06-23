# React Routing Yapısı

### Yararlandığım YouTube videosu

- https://www.youtube.com/watch?v=UkdJXszIRPQ

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


``<Route path='/' element={ <Home /> }/>`` / ana sayfa 

``<Route path='blog' element={ <Blog /> }/> ``

``<Route path='contact' element={ <Contact /> }/>``


# Navbar oluşuralım

src --> create Layout.js

- App.js içinde gösterdiğimiz sayfaların bağlantılarını Layout içine taşıyacağız ve bu componeti App.js 'de yazdıracağız.

- Sayfalarımıza buradaki navbar sayesinde tıklayarak ulaşacağız.

- Layout component 'inin içine Link özelliğini indiriyoruz.

- Nested Route 'larımız için Outlet özelliğini indiriyoruz.

`` import { Link, Outlet } from 'react-router-dom' ``


Layout.js --> 

``` 
<nav>

        <ul>

            <li>
                <Link to={"/"}>
                    HOME
                </Link>
            </li>

            <li>
                <Link to={"blog"}>
                    Blog
                </Link>
            </li>

            <li>
                <Link to={"contact"}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Nested route 'larımız (ilgili nested route) burada gösterilecek  */}

        <Outlet /> 

      </nav>

```

- ``<a href= ... >`` yerine  ``<Link to= ...>`` kullanıyoruz.

# Nested Route - navbar 'ın tüm sayfalarda gösterilmesi için 

        <Route path='/*' element={ <Layout /> }>

          <Route path='' element={ <Home /> }/>  

          <Route path='blog' element={ <Blog /> }/>  

          <Route path='contact' element={ <Contact /> }/>  

        </Route>


# NavLink (Aktif sayfanın Navbar 'da farklı renkte gösterilmesi için)

NavLink Link 'ten farklı olarak style, className gibi özellikler eklememizi sağlar.

Özellik içinde dönen objede fonksiyon tanımlayabiliriz. 




