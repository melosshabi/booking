import React, {useState} from 'react'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import {doc, collection, addDoc, getDocs, query, where, updateDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import capitalize from '../functions/Capitalize'
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


    function toggleNextFormStep(){
        const leftDiv = document.querySelector('.reservation-form-left-div')
        const rightDiv = document.querySelector('.reservation-form-right-div')
        const nextBtn = document.querySelector('.next-reservation-btn')

        if(leftDiv.classList.contains('active-form-left-div')){
            leftDiv.classList.remove('active-form-left-div')
            rightDiv.classList.add('active-form-right-div')
            nextBtn.innerText = 'Back'
        }else{
            rightDiv.classList.remove('active-form-right-div')
            leftDiv.classList.add('active-form-left-div')
            nextBtn.innerText = "Next"
        }
    }

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
    <>
    <Navbar/>
    <div className='reserve-form-wrapper'>

        <div className="selected-property">
            <div className="selected-property-image-wrapper">
                <img className="selected-property-img" src={property.propertyDetails.pictures[0]}/>
            </div>
            <div className="selected-property-details">
                <span>{capitalize(property.propertyDetails.propertyType)}</span>
                <h2 style={{marginBottom:"10px"}}>{property.propertyDetails.propertyName}</h2>
                <span style={{display:'block', marginBottom:'5px'}}>{property.propertyDetails.address + " " + property.propertyDetails.address2}</span>
            </div>
        </div>

        {/* Form */}
        <form className="selected-property-reservation-form" onSubmit={e => makeReservation(e)}>
            <h2>Fill out the form below to make your reservation</h2>

            <div className="animation-div reservation-animation-div">
            <div className="reservation-form-left-div active-form-left-div">
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
            </div>

            <div className="reservation-form-right-div">

            <div className="inputs-wrappers arrival-time">
                <h3>Your arrival time</h3>
                <input type="date" required onChange={e => setArrivalDate(e.target.value)}/>
                <select required onChange={e => setArrivalTime(e.target.value)}>
                    <option>--Arrival Time--</option>
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

            <div className="inputs-wrappers">
                <label>Special Requests</label>
                <textarea className="special-requests" maxLength="5000" value={specialRequests} onChange={e => setSpecialRequests(e.target.value)}></textarea>
            </div>

            </div>
            </div>
            <div className="reservation-form-btns-wrapper">
                <button className="next-reservation-btn" onClick={toggleNextFormStep} type="button">Next</button>
                <button className="finish-reservation-btn">Make Reservation</button>
            </div>
        </form>
    </div>
    </>
  )
}
