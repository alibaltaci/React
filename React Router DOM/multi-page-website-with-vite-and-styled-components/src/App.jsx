import { useRoutes } from 'react-router-dom'
import './App.css'
import data from './Routes'


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

  return useRoutes( data )

}

export default App
