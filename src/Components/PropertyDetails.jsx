import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {query, doc, updateDoc, getDocs, collection, where} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/propertyDetails.css'

export default function PropertyDetails() {
    
  const location = useLocation()
  const property = location.state.property

  auth.onAuthStateChanged(async () =>{
    async function getUserDoc() {

        const usersCollection = collection(db, 'users')
        const userQuery = query(usersCollection, where("id", "==", `${auth.currentUser.uid}`))
    
        const userSnapshot = await getDocs(userQuery)
        
    }})

  //Funksioni per me rujt pronen   
  async function saveProperty(propertyId){

    const usersCollection = collection(db, 'users')
    const userQuery = query(usersCollection, where("id", "==", `${auth.currentUser.uid}`))

    const userSnapshot = await getDocs(userQuery)
    let userDocument = {}
    userSnapshot.forEach(doc => userDocument = ({...doc.data(), userDocId:doc.id}))
    
    const savedPropertiesLength = Object.keys(userDocument.savedProperties).length
    userDocument.savedProperties[`property${savedPropertiesLength}`] = propertyId
    
    const userDocRef = doc(db, 'users', userDocument.userDocId)
    delete userDocument.userDocId
    await updateDoc(userDocRef, userDocument)
  }

  return (
    <div className='property-details-wrapper'>
        <h2>{property.propertyDetails.propertyName}</h2>
        <span className="address-span">{property.propertyDetails.country + ", " + property.propertyDetails.address + ", " + property.propertyDetails.address2}</span>
        <h3 className="landlord">{property.landLordName}</h3>
        <div className="property-details-images-wrapper">
            <img src={property.propertyDetails.pictures[0]} className="main-img" />
            <img src={property.propertyDetails.pictures[1]} className="secondary-img" />
            <img src={property.propertyDetails.pictures[2]} className="third-image" />

            <div className="property-details-btns-wrapper">
                <button className="reserve-btn">Reserve Now</button>
                <button className="save-btn" onClick={() => saveProperty(property.docId)}>Save the property</button>
            </div>
        </div>
        
    </div>
  )
}
