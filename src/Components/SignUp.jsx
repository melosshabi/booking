import React, {useState} from 'react'
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../styles/signUp.css'

export default function SignUp(e) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function createAccount(e){
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
    }
  return (
    <div className='sign-up-wrapper'>
        <h3>Create an account</h3>
        <form className="sign-up-form" onSubmit={e => createAccount(e)}>
            <label className='email-label'>
            <input className="email" type="text" required value={email} onChange={e => setEmail(e.target.value)}/>
            </label>

            <label className='password-label'>
            <input className="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button className='sign-up-btn'>Sign Up</button>
        </form>
    </div>
  )
}
