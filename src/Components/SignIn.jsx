import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function SignIn() {
    
    const navigate = useNavigate();
    useEffect(()=> {
      if(cookies.get('auth-token')) navigate('/')
    }, [])
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function signIn(e){
        e.preventDefault();
        try{
          await signInWithEmailAndPassword(auth, email, password)
          .then(res => {
            cookies.set('auth-token', res.user.refreshToken)
            cookies.set('email', res.user.email)
            cookies.set('name', res.user.displayName)
            cookies.set('id', res.user.uid)
            console.log(auth.currentUser)
            window.location.reload()
          })
        }catch(err){
          switch(err.code){
            case 'auth/wrong-password':
              setError('Incorrect Password')
              break;
            case 'auth/user-not-found':
              setError("Account does not exist")
              break;
            case 'auth/invalid-email':
              setError("Please enter a valid email")
              break;
          }
        }
    }

  return (
    <div className='sign-up-wrapper'>
        <h3>Sign in</h3>
        <form className="sign-up-form" onSubmit={e => signIn(e)}>
           
            <label className='email-label'>
            <input className="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </label>

            <label className='password-label'>
            <input className="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label id="error">{error}</label>
            <button className='sign-up-btn'>Sign In</button>
        </form>
        
    </div>
  )
}
