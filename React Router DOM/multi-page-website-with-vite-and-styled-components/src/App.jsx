import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { navbar } from './data/data.json'
import PageReturner from './components/Header/PageReturner'


// Routes
// Route
// NavLink
// Link
// <Outlet />
// useParams()

function App() {

  return (
    <>
      <Header />
      <Routes>
        {
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
        }
        <Route path='/blog' element={ <PageReturner page="bloglayout" /> } >
          <Route index={true} element={<PageReturner page="blog" /> } />
          <Route path='catagories' element={ <PageReturner page="catagories" /> } />
          <Route path='post/:url' element={ <PageReturner page="post" /> } />
        </Route>
        {/* <Route path='/*' element={ <Page404 /> } /> */}
        {/* <Route path='/'  element={ <Home /> } />
        <Route path='/about'  element={ <About /> } />
        <Route path='/services'  element={ <Services /> } />
        <Route path='/contact'  element={ <Contact /> } /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
