import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import ApartmentForm from './ApartmentForm'
import HotelForm from './HotelForm'
import ResortForm from './ResortForm'
import {auth} from '../firebase-config'
import '../styles/listPropertyForm.css'


export default function ListPropertyForm() {

    const location = useLocation()
    const navigate = useNavigate()

    auth.onAuthStateChanged(() => {
      if(auth.currentUser === null){
        navigate('/signIn')
      } 
    })
  return (
    <>
    <Navbar/>
    <div className='list-property-form-wrapper'>
        <div className="creating-listing">
            <h2>Creating Listing...</h2>
        </div>
        {location.state.propertyType === 'apartment' && <ApartmentForm/>}
        {location.state.propertyType === 'hotel' &&  <HotelForm/>}
        {location.state.propertyType === 'resort' &&  <ResortForm/>}
    </div>
    </>
  )
}
