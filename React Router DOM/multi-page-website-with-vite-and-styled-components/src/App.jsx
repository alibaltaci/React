import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './Routes'
import { url } from './utils'
 
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

  // url('home.blog.catagories')

  // console.log(  url('home.blog.post', {
  //   url: 'test'
  // }))

  console.log(url('home.blog.catagories'))

  return useRoutes( routes )

}

export default App
