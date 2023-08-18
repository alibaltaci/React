import React from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/Services'
import Contact from '../../pages/Contact'
import Page404 from '../../pages/Page404.jsx'
import BlogLayout from '../../pages/Blog/BlogLayout'
import Blog from '../../pages/Blog/Blog'
import Catagories from '../../pages/Blog/catagories'
import Post from '../../pages/Blog/Post'
import PrivateRoute from '../../components/PraviteRoute/PrivateRoute'
import HomeLayout from '../../pages/HomeLayout'

function PageReturner({page}) {

    const Page = page === "homeLayout"
        ? HomeLayout
        : page === "home" 
        ? Home 
        : page === "about"
        ? About
        : page === "services"
        ? Services
        : page === "contact"
        ? Contact
        : page === "bloglayout"
        ? BlogLayout
        : page === "blog"
        ? Blog
        : page === "catagories"
        ? Catagories
        : page === "post"
        ? Post
        : page === "privateRoute"
        ? PrivateRoute
        : Page404
        
  return (
    <Page />
  )
}

export default PageReturner