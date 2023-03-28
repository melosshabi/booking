import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import apartments from '../images/apartments.jpeg'
import hotel from '../images/hotel.jpeg'
import resorts from '../images/resorts.jpeg'
import villas from '../images/villas.jpeg'
import '../styles/listProperty.css'

const cookies = new Cookies()
export default function ListProperty() {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!cookies.get("auth-token")) navigate('/')
    }, [])

  return (
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

            <div>
                <img src={villas}/>
                <h3>Villa</h3>
                <Link className='list-prop-btn' state={{propertyType:"villa"}}>List your property</Link>
            </div>
        </div>
    </div>
  )
}
