import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {auth} from '../firebase-config'
import { signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
import whiteCaret from '../images/white-caret.svg'
import closeIcon from '../images/close-icon.png'
import logOutIcon from '../images/logout.png'

const cookies = new Cookies()

export default function Navbar() {

  const navigate = useNavigate() 

  function toggleMoreOptions(){
    const caret = document.querySelector('.more-options-btn img')
    const moreOptions = document.querySelector('.more-options')
    caret.classList.toggle("active-btn-caret")
    moreOptions.classList.toggle('active-options')
  }
    
  function toggleMobileMoreOptions(){
    const caret = document.querySelector('.mobile-caret')
    const moreOptions = document.querySelector('.mobile-more-options')

    caret.classList.toggle('active-mobile-caret')
    moreOptions.classList.toggle('active-mobile-options')
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
  
  function toggleSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active-sidebar')
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
            <div className="hamburger-btn" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </nav>

          <div className="sidebar">
            <div className="close-sidebar-btn" onClick={toggleSidebar}>
              <img src={closeIcon} alt="Close Sidebar Icon" className='close-sidebar-icon'/>
            </div>

            <div className="sidebar-options">
                <ul>
                  <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                  {cookies.get('auth-token') && <li><Link to="/" onClick={toggleSidebar}>List your property</Link></li>}
                </ul>
            </div>

            <div className="sidebar-user-div">
            {!cookies.get('auth-token') && <Link className="mobile-auth-links" to="/signUp">Register</Link>}
            {!cookies.get('auth-token') && <Link className="mobile-auth-links" to="/signIn">Sign in</Link>}
            {cookies.get('auth-token') && <div className="mobile-more-options-btn" onClick={toggleMobileMoreOptions}>{cookies.get('name')} <img src={whiteCaret} alt="Caret" className='mobile-caret'/>
              
              <div className='mobile-more-options'> 
                  <ul>
                    <li><Link to="/userProfile">My Profile</Link></li>
                    {auth.onAuthStateChanged(() => auth.currentUser === 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2' ? true : false)  && <li><Link to="/adminPage">Admin Page</Link></li>}
                  </ul>
            </div>
            </div>}
            {cookies.get('auth-token') && <button className="mobile-signout-btn" onClick={logOut}><img src={logOutIcon}/></button>}
            </div>
          </div>

        </div>
  )
}
