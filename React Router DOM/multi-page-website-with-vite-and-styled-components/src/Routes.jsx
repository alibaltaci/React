import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BlogLayout from "./pages/Blog/BlogLayout";
import Blog from "./pages/Blog/Blog";
import Catagories from "./pages/Blog/catagories";
import Post from "./pages/Blog/Post";
import PrivateRoute from "./components/PraviteRoute/PrivateRoute";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Page404 from "./pages/Page404";

const routes = [
    {
        name: 'home',
        path:'/',
        element: <HomeLayout />,
        children: [
            {
                name: 'index',
                index: true,
                element: <Home />
            },
            {
                name: 'contact',
                path: 'contact',
                element: <Contact />
            },
            {
                name: 'services',
                path: 'services',
                element: <Services />
            },
            {
                name: 'about',
                path: 'about',
                element: <About />
            },
            {
                name: 'blog',
                path: 'blog',
                element: <BlogLayout />,
                auth: true,
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: 'catagories',
                        path: 'catagories',
                        element: <Catagories />
                    },
                    {
                        name: 'post',
                        path: 'post/:url',
                        element: <Post />
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                // element:<PrivateRoute><Profile /></PrivateRoute>,
                element: <Profile />,
                auth: true
            }
        ]
    },
    {
        name: '/auth',
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                name: 'login',
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        name:'notFound',
        path:'/*',
        element: <Page404 />
    }
]


// recusive (yinelemeli - özyineli) funciton
// kendi içinde çağırılan fonksiyonlar.
const authMap = routes => routes.map( route => {
    if(route?.auth){
        route.element = <PrivateRoute>{ route.element }</PrivateRoute>
    }
    if(route?.children){
        route.children = authMap( route.children )
    }

    return route
})

export default authMap( routes )
// export default routes


      {/* <Routes>
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
          <Route path='profile' element={ <PageReturner page="profile" /> } />
        </Route>
        <Route path='/auth' element={ <AuthLayout /> } >
          <Route path='login' element={ <Login /> } />
        </Route>
      </Routes> */}