import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {query, collection, orderBy, getDocs} from 'firebase/firestore'
import {db} from '../firebase-config'
import capitalize from '../functions/Capitalize'
import '../styles/propertyBrowser.css'
export default function PropertyBrowser() {

    const location = useLocation()

    const [properties, setProperties] = useState([])

    useEffect(() => {
        let tempArr = []
        async function fetchProperties(){
            const collectionRef = collection(db, location.state.propertyType)
            const queryProperties = query(collectionRef, orderBy('propertyDetails.dateCreated'))
            const querySnapshot = await getDocs(queryProperties)
            querySnapshot.forEach(doc => tempArr.push({...doc.data(), docId:doc.id}))
            setProperties(tempArr)
        }
        fetchProperties()
    }, [])
    
    return (
    <div className='property-browser-wrapper'>
        <h2>Find the perfect {capitalize(location.state.propertyType)} on booking</h2>
        <div className="properties-wrapper">
            <h3>Find a great deal on a hotel for tonight or an upcoming trip</h3>
            {properties.map((property, index) => {
                return (
                <div className="property-div" key={index}>
                    <div className="property-img-wrapper"><img className='property-img' src={property.propertyDetails.pictures[0]}/></div>
                    <div className="property-details">
                    <Link to="/propertyDetails" state={{property:property}} className='property-name'>{property.propertyDetails.propertyName}</Link>
                    <p className='property-address'>{property.propertyDetails.address}</p>
                    </div>

                    <div className="price-div">
                        <span className='price-spans'>From</span>
                        <p>${property.propertyDetails.propertyType === "hotel" | property.propertyDetails.propertyType === "apartment" ? property.propertyDetails.pricePerNight : property.propertyDetails.pricePerMonth}</p>
                        <span className='price-spans'>Per {property.propertyDetails.propertyType === "hotel" | property.propertyDetails.propertyType === "apartment" ? "Night" : "Month"}</span>
                    </div>

                </div>
                )
            } )}
            
        </div>
    </div>
  )
}
