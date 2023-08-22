import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Profile() {

  const { user, setUser } = useAuth()

  const logoutHandle = () => {
    setUser( false )
  }

  return (
    <>
      <div>Profile</div>
      <br />
      { !user && <Link to="/auth/login" >Giriş Yap</Link> }
      { user && <button onClick={logoutHandle} >Çıkış Yap</button>}
    </>
  )
}

export default Profile