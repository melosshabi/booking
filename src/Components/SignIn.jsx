import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import Cookies from 'universal-cookie'
import '../styles/signIn.css'

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
    <>
    <Navbar/>
    <div className='sign-in-form-wrapper'>
      <div className="sign-in-decoration-div">
        <h2>Welcome Back!</h2>
      </div>
        <form className="sign-in-form" onSubmit={e => signIn(e)}>
           <h2>Sign in</h2>
           <div className="sign-in-inputs-wrapper">

            <div className="sign-in-label-wrappers">
              <label className='sign-in-email-label'>Email</label>
              <input className="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="sign-in-label-wrappers">
              <label className='sign-in-password-label'>Password</label>
              <input className="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
              <p id="error">{error}</p>
            </div>

            </div>
            
            <button className='sign-in-btn'>Sign In</button>
            <p className='dont-have-acc'>Don't have an account? <Link to='/signUp'>Sign Up</Link></p>
        </form>
        
    </div>
    </>
  )
}
