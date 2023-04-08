import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import ApartmentForm from './ApartmentForm'
import HotelForm from './HotelForm'
import ResortForm from './ResortForm'
import '../styles/listPropertyForm.css'


export default function ListPropertyForm() {

    const location = useLocation()

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
