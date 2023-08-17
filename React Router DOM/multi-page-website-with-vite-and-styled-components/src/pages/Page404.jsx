import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <>
        <h1>Page Not Found!!!</h1>
        <Link to="/">Home Page</Link>
    </>
  )
}

export default Page404