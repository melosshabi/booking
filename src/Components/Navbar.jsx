import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {auth} from '../firebase-config'
import { signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
import whiteCaret from '../images/white-caret.svg'

const cookies = new Cookies()

export default function Navbar() {

    const navigate = useNavigate() 
  
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
      navigate('/')
    })
  }

  return (
        <div>
          <nav>
            <Link className='h1' to="/">Booking</Link>

            <div className="sign-in-wrapper">
              <Link id="list-prop" to="/listProperty">List your property</Link>
              {!cookies.get('auth-token') && <Link className="auth-links" to="/signUp">Register</Link>}
              {!cookies.get('auth-token') && <Link className="auth-links" to="/signIn">Sign in</Link>}
              {cookies.get('auth-token') && <div className='more-options-btn' onClick={toggleMoreOptions}>{cookies.get("name")}<img src={whiteCaret} alt="Caret"/>
              <div className="more-options">
                  <ul>
                    <li><Link to="/userProfile">My Profile</Link></li>
                    {auth.onAuthStateChanged(() => auth.currentUser === 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2' ? true : false)  && <li><Link to="/adminPage">Admin Page</Link></li>}
                    <li><button className="sign-out-btn" onClick={logOut}>Sign Out</button></li>
                  </ul>
                </div>
              </div>}
            </div>
        </nav>
        </div>
  )
}
