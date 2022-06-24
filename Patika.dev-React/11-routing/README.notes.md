# React Routing Yapısı

- React router ile sadece değişmesini istediğimiz yerlerleri değiştirebiliriz.

- Sayfanın komple gidip yeni sayfasının gelmesine gerek kalmaz.

- Sayfa içinde bir yere gittğimizde tüm sayfa yenileniyor ise React Router çözümünün kullanılmadığını anlayabiliriz.

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

### BrowseRouter 

- Router yapısını kullanabilmek için en dışa "BrowseRouter" yapısını vermeliyiz.

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


# Navbar oluşturalım

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

- `` <a href> `` path verilirse sayfa yenilenir. 

- `` <Link to > `` ile path verilirse ilgili alan gelir sayfa yenilenmez.

- İki yapı arasındaki temel fark budur.

# Nested Route - navbar 'ın tüm sayfalarda gösterilmesi için 

        <Route path='/*' element={ <Layout /> }>

          <Route path='' element={ <Home /> }/>  

          <Route path='blog' element={ <Blog /> }/>  

          <Route path='contact' element={ <Contact /> }/>  

        </Route>


# NavLink (Aktif sayfanın Navbar 'da farklı renkte gösterilmesi için)

NavLink Link 'ten farklı olarak style, className gibi özellikler eklememizi sağlar.

Özellik içinde dönen objede fonksiyon tanımlayabiliriz. 


    <li>
        <NavLink style={ ( {isActive} ) => ({
            color: isActive ? "red" : "blue"
        }) } to={"/"}>
                HOME
        </NavLink>
    </li>

`` isActive `` ile aktif olan bağlantıyı yakalayabiliriz.

# Dynamic Route

src/pages --> create Post.js 

## Blog altındaki postlara erişmek için

`` <Route path='blog/:postId' element={ <Post /> }/>   ``

burada `` :postId `` bağlantımızın lacağı parametredir. Her postun kendisine ait eşsiz bir Id 'si olacaktır ve biz bunları birer parametre olarak alacağız. (API 'lerde fetch yapar gibi)


## useParams

Parametreleri getirmek için useParams Hook 'unu kullanacağız.

Post.js --> 

`` import { useParams } from 'react-router-dom' ``

İşlem sonucunda bize dönecek olan veri. 

    {*: 'blog/1', postId: '1'}
        *: "blog/1"
        postId: "1"
    [[Prototype]]: Object


## useNavigate

Bir sayfaya yönlendirmek için kullanılabilir.

Home.js --> `` import { useNavigate } from 'react-router-dom'; ``

Home sayfası açıldıktan 3 sn sonra blog sayfasına yönlendiren fonksiyon yazalım.

Home.js --> 

const navigate = useNavigate();

    useEffect( () => {
        setTimeout( () => {
        navigate("blog");  
        }, 3000);
    }, [navigate])

## Go back - Go forward

Burada path 'e -1 yazılırsa ``navigate(-1)`` gelinen sayfaya 3sn sonra geri döner. Buradaki parametreye -2, -3 gibi değerler girerek kaç sayfa öncesine gidileceği ayarı yapılabilir.

Burada path 'e  yazılırsa ``navigate(1)`` ileriye gider.

# replace 

Gelinen sayfanın history 'de gösterilmemesi için kullanılan bir eylem.

`` navigate("blog", { replace: true } ) ``