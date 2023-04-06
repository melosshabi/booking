import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import apartments from '../images/apartments.jpeg'
import hotel from '../images/hotel.jpeg'
import resorts from '../images/resorts.jpeg'
import '../styles/listProperty.css'

const cookies = new Cookies()
export default function ListProperty() {

  return (
    <>
    <Navbar/>
    <div className='list-property-wrapper'>
        <h2>To get started choose your property type below:</h2>
        <div className="property-types-wrapper">
            <div>
                <img src={hotel} />
                <h3>Hotel</h3>
                <Link className='list-prop-btn' to="/listPropertyForm" state={{propertyType:"hotel"}}>List your property</Link>
            </div>

            <div>
            <img src={apartments}/>
                <h3>Apartment</h3>
                <Link className='list-prop-btn' to="/listPropertyForm" state={{propertyType:"apartment"}}>List your property</Link>
            </div>

            <div>
                <img src={resorts}/>
                <h3>Resort</h3>
                <Link className='list-prop-btn' to="/listPropertyForm" state={{propertyType:"resort"}}>List your property</Link>
            </div>
        </div>
    </div>
    </>
  )
}
