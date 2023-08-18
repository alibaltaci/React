import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Login() {

  const { setUser } = useAuth()

  const navigate = useNavigate()

  const location = useLocation()

  const loginHandle = () => {
    setUser({
      userName: "Ali Baltacı"
    })

    // navigate("/")
    navigate( location?.state?.return_url || "/" )

  }

  return (
    <>
      <div>Login</div>
      <button onClick={loginHandle} >Giriş Yap</button>
      <Link to="/" >Back Home</Link>
    </>
  )
}

export default Login