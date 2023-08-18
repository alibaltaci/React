import './App.css'
import { Routes, Route } from 'react-router-dom'
import { navbar } from './data/data.json'
import PageReturner from './components/Header/PageReturner'
import AuthLayout from './pages/Auth/AuthLayout'
import Login from './pages/Auth/Login'


// Routes
// Route - path/element
// NavLink
// Link

// <Outlet />
// useParams()

// 404

// <Navigate />
// useNavigate()
// Private Route
// replate - true/false  (önceki sayfaya dönüş için)

// useLocation()  search/pathname/state

// useRoutes()
// useSearchParams()
// generalePath()


function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={ <PageReturner page="homeLayout" /> }>
          <Route index={true} element={ <PageReturner page="home" /> } />
          <Route path='contact' element={ <PageReturner page="contact" /> } />
          <Route path='services' element={ <PageReturner page="services" /> } />
          <Route path='about' element={ <PageReturner page="about" /> } />
          <Route path='blog' element={ <PageReturner page="bloglayout" /> } >
            <Route index={true} element={<PageReturner page="blog" /> } />
            <Route path='catagories' element={ <PageReturner page="catagories" /> } />
            <Route path='post/:url' element={ <PageReturner page="post" /> } />
          </Route>
          <Route path='*' element={ <PageReturner page="page404" /> } />
          <Route path='privateRoute' element={ <PageReturner page="privateRoute" /> } />
        </Route>
        <Route path='/auth' element={ <AuthLayout /> } >
          <Route path='login' element={ <Login /> } />
        </Route>

      </Routes>
    </>
  )
}

export default App

        {/* {
          navbar.map( (data) => (
            // data.sub
            // ? <Route key={data.path} element={ <PageReturner page={data.page} /> }>
            //     {
            //       data.sub.map( (el) => (
            //         el.path 
            //         ? <Route key={el.path} path={el.path} element={ <PageReturner page={el.page} />} />
            //         : <Route key={el} index={el.index} element={ <PageReturner page={el.page} />} />
            //       ))
            //     }
            // </Route>
            // : 
            <Route key={data.path} path={data.path} element={ <PageReturner page={data.page} />} />
          ))
        } */}