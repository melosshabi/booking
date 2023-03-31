import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {doc, collection, addDoc, getDocs, query, where, updateDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/reserveForm.css'

export default function ReserveForm() {
    
    const navigate = useNavigate()
    const location = useLocation()
    const property = location.state

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [specialRequests, setSpecialRequests] = useState('')
    const [arrivalDate, setArrivalDate] = useState('')
    const [arrivalTime, setArrivalTime] = useState('')

    async function makeReservation(e){
        e.preventDefault()

        const reservationsRef = collection(db, 'reservations')
        await addDoc(reservationsRef, {
            clientId:auth.currentUser.uid,
            clientName:`${firstName} ${lastName}`,
            clientEmail:email,
            clientPhoneNumber:phoneNumber,
            specialRequests:specialRequests,
            arrivalDate:arrivalDate,
            arrivalTime:arrivalTime,
            reservedProperty:{...property}
            })
        
        const userCollection = collection(db, 'users')
        const userQuery = query(userCollection, where('id', '==', auth.currentUser.uid))
        const querySnapshot = await getDocs(userQuery)
        let userDocument = {}
        querySnapshot.forEach(doc => userDocument = ({...doc.data(), userDocId:doc.id}) )
        const submittedReservationsLength = Object.keys(userDocument.submittedReservations).length
        userDocument.submittedReservations[`reservation${submittedReservationsLength}`] = {
            propertyDocId: property.docId,
            propertyType: property.propertyDetails.propertyType.toLowerCase()
        }
        
        const userDocRef = doc(db, 'users', userDocument.userDocId)
        delete userDocument.userDocId
        await updateDoc(userDocRef, userDocument)
        .then(() => {
            alert("Your reservation was submitted successfully. Thank you")
            navigate('/')
        })
    }
  return (
    <div className='reserve-form-wrapper'>

        <div className="selected-property">
            <div className="selected-property-image-wrapper">
                <img className="selected-property-img" src={property.propertyDetails.pictures[0]}/>
            </div>
            <div className="selected-property-details">
                <span>{property.propertyDetails.propertyType}</span>
                <h2 style={{marginBottom:"10px"}}>{property.propertyDetails.propertyName}</h2>
                <span>{property.propertyDetails.address + " " + property.propertyDetails.address2}</span>
            </div>
        </div>

        {/* Form */}
        <form className="selected-property-reservation-form" onSubmit={e => makeReservation(e)}>
            <h2>Enter your details</h2>

            <div className="inputs-wrappers">
                <label>First Name</label>
                <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Last Name</label>
                <input type="text" required value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Email</label>
                <input type="text" required value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            
            <div className="inputs-wrappers">
                <label>Phone Number</label>
                <input type="number" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
            <div className="inputs-wrappers">
                <label>Special Requests</label>
                <textarea className="special-requests" maxLength="5000" value={specialRequests} onChange={e => setSpecialRequests(e.target.value.length)}></textarea>
            </div>

            <div className="inputs-wrappers arrival-time">
                <h2>Your arrival time</h2>
                <input type="date" required onChange={e => setArrivalDate(e.target.value)}/>
                <select required onChange={e => setArrivalTime(e.target.value)}>
                    <option>Please Select</option>
                    <option>I don't know</option>
                    <option>3:00 PM - 4:00 PM</option>
                    <option>5:00 PM - 6:00 PM</option>
                    <option>7:00 PM - 8:00 PM</option>
                    <option>9:00 PM - 10:00 PM</option>
                    <option>11:00 PM - 12:00 AM</option>
                    <option>12:00 AM - 1:00 AM 	&#40;The next day&#41;</option>
                    <option>1:00 AM - 2:00 AM 	&#40;The next day&#41;</option>
                </select>
            </div>
            <button className="finish-reservation-btn">Make Reservation</button>
        </form>
    </div>
  )
}
