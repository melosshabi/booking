import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate, Link } from 'react-router-dom'
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Cookies from 'universal-cookie'
import '../styles/signUp.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {db} from '../firebase-config'

const cookies = new Cookies()

export default function SignUp() {

    const navigate = useNavigate();

    useEffect(()=>{
      if(cookies.get("auth-token")) navigate('/')
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function createAccount(e){
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          cookies.set('auth-token', res.user.refreshToken)
          cookies.set('name', name)
          cookies.set('email', res.user.email)
          cookies.set('id', res.user.uid)
        })
        await updateProfile(auth.currentUser, {displayName:name})
        .then(()=> window.location.reload)

        const usersRef = collection(db, 'users')
        await addDoc(usersRef, {
          name:name,
          email:email,
          id:auth.currentUser.uid,
          accountCreatedAt:serverTimestamp(),
          submittedReservations:{},
          savedProperties:{} 
        }).then(() => window.location.reload())

        }catch(err){
          switch(err.code){
            case 'auth/email-already-in-use':
              setError('Email already in use')
              break;
            case 'auth/weak-password':
              setError("Password must be at least 6 characters long")
              break;
            case 'auth/invalid-email':
              setError("Please enter a valid email")
              break;
          }
        }
        
        
    }
  return (
    <>
    <Navbar/>
    <div className='sign-up-form-wrapper'>
      <div className="sign-up-decoration-div">
        <h2>Welcome!</h2>
        <h3>Create your account to get started with our services</h3>
      </div>
        <form className="sign-up-form" onSubmit={e => createAccount(e)}>
           <h2>Sign up</h2>
           <div className="sign-up-inputs-wrapper">

            <div className="sign-up-label-wrappers">
              <label>Full Name</label>
              <input type="text" className='name' required value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="sign-up-label-wrappers">
              <label className='sign-up-email-label'>Email</label>
              <input className="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="sign-up-label-wrappers">
              <label className='sign-up-password-label'>Password</label>
              <input className="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
              <p id="error">{error}</p>
            </div>

            </div>
            
            <button className='sign-up-btn'>Sign up</button>
            <p className='dont-have-acc'>Already have an account? <Link to='/signIn'>Sign In</Link></p>
        </form>
        
    </div>
    </>
  )
}
