import React from 'react'
import { useAuth } from '../context/AuthContext'

function Profile() {

  const { setUser } = useAuth()

  const logoutHandle = () => {
    setUser( false )
  }


  return (
    <>
      <div>Profile</div>
      <br />
      <button onClick={logoutHandle} >Çıkış Yap</button>
    </>
  )
}

export default Profile