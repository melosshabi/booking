import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className='sign-up-wrapper'>
        <h3>Create an account</h3>
        <form className="sign-up-form" onSubmit={e => createAccount(e)}>
            <label className='name-label'>
            <input className="name" type="text" required value={name} onChange={e => setName(e.target.value)}/>
            </label>

            <label className='email-label'>
            <input className="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </label>

            <label className='password-label'>
            <input className="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label id="error">{error}</label>
            <button className='sign-up-btn'>Sign Up</button>
        </form>
        
    </div>
  )
}
