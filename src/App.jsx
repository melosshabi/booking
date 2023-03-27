import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import './App.css'

function App() {

  return (
    <Router>
    <div className="App">
          <nav>
            <Link className='h1' to="/">Booking</Link>
            
            <div className="sign-in-wrapper">
              <Link id="list-prop" to="/getStartedListing">List your property</Link>
              <Link className="auth-links" to="signUp">Register</Link>
              <Link className="auth-links" to="signIn">Sign in</Link>
            </div>
          </nav>
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/signUp" exact element={<SignUp/>}/>
        <Route path="/signIn" exact element={<SignIn/>}/>
      </Routes> 
    </Router>
  )
}

export default App
