import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Komponentet
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import ListProperty from './Components/ListProperty'
import ListPropertyForm from './Components/ListPropertyForm'
import PropertyBrowser from './Components/PropertyBrowser'
import PropertyDetails from './Components/propertyDetails'
import ReserveForm from './Components/ReserveForm'
import UserProfile from './Components/UserProfile'
import QueryResults from './Components/QueryResults'
import AdminPage from './Components/AdminPage'
// 
import Cookies from 'universal-cookie'
import whiteCaret from './images/white-Caret.svg'
import { signOut } from 'firebase/auth'
import {auth} from './firebase-config'
import './App.css'
import { useState } from 'react'

const cookies = new Cookies()
function App() {

  const [adminId, setAdminId] = useState('')

  auth.onAuthStateChanged(()=> {if(auth.currentUser.uid !== null && auth.currentUser.uid === 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2') setAdminId(auth.currentUser.uid)})

  function toggleMoreOptions(){
    const caret = document.querySelector('.more-options-btn img')
    const moreOptions = document.querySelector('.more-options')
    caret.classList.toggle("active-btn-caret")
    moreOptions.classList.toggle('active-options')
  }

  async function logOut(){
    await signOut(auth)
    .then(() =>{
      cookies.remove('auth-token')
      cookies.remove('name')
      cookies.remove('id')
      cookies.remove('email')
      window.location = '/#/'
      window.location.reload()
    })
  }

  return (
    <Router>
    <div className="App">
          <nav>
            <Link className='h1' to="/">Booking</Link>
            
            <div className="sign-in-wrapper">
              <Link id="list-prop" to="/listProperty">List your property</Link>
              {!cookies.get('auth-token') && <Link className="auth-links" to="signUp">Register</Link>}
              {!cookies.get('auth-token') && <Link className="auth-links" to="signIn">Sign in</Link>}
              {cookies.get('auth-token') && <div className='more-options-btn' onClick={toggleMoreOptions}>{cookies.get("name")}<img src={whiteCaret} alt="Caret"/>
              <div className="more-options">
                  <ul>
                    <li><Link to="/userProfile">My Profile</Link></li>
                    {adminId === 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2' && <li><Link to="/adminPage">Admin Page</Link></li>}
                    <li><button className="sign-out-btn" onClick={logOut}>Sign Out</button></li>
                  </ul>
                </div>
              </div>}
            </div>
          </nav>
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/signUp" exact element={<SignUp/>}/>
        <Route path="/signIn" exact element={<SignIn/>}/>
        <Route path="/listProperty" exact element={<ListProperty/>}/>
        <Route path="/listPropertyForm" exact element={<ListPropertyForm/>}/>
        <Route path="/propertyBrowser" exact element={<PropertyBrowser/>}/>
        <Route path="/propertyDetails" exact element={<PropertyDetails/>}/>
        <Route path="/queryResults" exact element={<QueryResults/>}/>
        <Route path="/reserveForm" exact element={<ReserveForm/>}/>
        <Route path="/userProfile" exact element={<UserProfile/>}/>
        <Route path="/adminPage" exact element={<AdminPage/>}/>
      </Routes> 
    </Router>
  )
}

export default App
