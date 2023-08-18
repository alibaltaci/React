import React from 'react'
import Profile from '../../pages/Profile'
import { useAuth } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

// Kullanıcı oturum açmış mı?
// Eğer oturum açmamış ise yönlendirme işleme.
// Eğer oturumu açmışsa children'ı return et.

function PrivateRoute() {

    const { user } = useAuth()

    const location = useLocation()

    if(!user){
        // return <Navigate to="/auth/login" />
        // kullanıcıyı geldiği sayfaya yönlendirmek için
        return(
          <Navigate to="/auth/login"  
            replace={true}
            state={{
              return_url: location.pathname
            }}
          />
        )
    }

  return (

    <>
        <div>PrivateRoute</div>
        <Profile />
    </>
  )
}

export default PrivateRoute