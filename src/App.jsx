import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar' 
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import ListProperty from './Components/ListProperty'
import ListPropertyForm from './Components/ListPropertyForm'
import PropertyBrowser from './Components/PropertyBrowser'
import PropertyDetails from './Components/PropertyDetails'
import ReserveForm from './Components/ReserveForm'
import UserProfile from './Components/UserProfile'
import QueryResults from './Components/QueryResults'
import AdminPage from './Components/AdminPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Websitewrapper/> */}
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
