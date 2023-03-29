import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import ListProperty from './Components/ListProperty'
import ListPropertyForm from './Components/ListPropertyForm'
import PropertyBrowser from './Components/PropertyBrowser'
import PropertyDetails from './Components/propertyDetails'
import Cookies from 'universal-cookie'
import whiteCaret from './images/white-Caret.svg'
import { signOut } from 'firebase/auth'
import {auth} from './firebase-config'
import './App.css'

const cookies = new Cookies()
function App() {

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
      window.location.pathname = '/#/'
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
      </Routes> 
    </Router>
  )
}

export default App
