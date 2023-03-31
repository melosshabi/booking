import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {doc, getDocs, collection, query, where, getDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/userProfile.css'
import apartments from '../images/apartments.jpeg'

export default function UserProfile() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [savedPropertiesIDs, setSavedPropertiesIDs] = useState([])

    const [savedPropertiesData, setSavedPropertiesData] = useState([])
    const [madeReservationsData, setMadeReservationsData] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            async function fetchProfile(){
                const usersCollectionRef = collection(db, 'users')
                const userQuery = query(usersCollectionRef, where('id', '==', auth.currentUser.uid))
                const querySnapshot = await getDocs(userQuery)
                let userDocument = {}
                querySnapshot.forEach(doc => userDocument = {...doc.data(), id:doc.id})
                setName(userDocument.name)
                setEmail(userDocument.email)

                // Fetch saved properties document IDs
                const userSavedPropertiesLength = Object.keys(userDocument.savedProperties).length
                let savedProperties = []
                
                for(let i = 0; i < userSavedPropertiesLength; i++){
                    savedProperties.push(userDocument.savedProperties[`property${i}`])
                }

                // Fetch made reservations
                const reservationsRef = collection(db, 'reservations')
                const reservationsQuery = query(reservationsRef, where('clientId', '==', auth.currentUser.uid))
                let madeReservations = []
                const reservationsSnapshot = await getDocs(reservationsQuery)
                reservationsSnapshot.forEach(reservation => {
                    madeReservations.push(({...reservation.data(), reservationDocId:reservation.id}))
                })

                setSavedPropertiesIDs(savedProperties)
                setMadeReservationsData(madeReservations)
            }   
            fetchProfile()
        })
    },[])
        
    const options = {
        profile:'profile',
        savedProperties:'savedProperties',
        reservations:'reservations'
    }
    const [selectedOption, setSelectedOption] = useState(options.profile)
    
    function switchProfileOption(newOption, targetButton){
        if(newOption === selectedOption) return

        const buttons = document.querySelectorAll('.sidebar-btns')
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('active-option')
        }
        targetButton.classList.add('active-option')
        setSelectedOption(newOption)

        if(newOption === options.savedProperties) fetchSavedProperties()
    }
    
    async function fetchSavedProperties(){
        let tempArr = []
        for(let i = 0; i < savedPropertiesIDs.length; i++){ 
            const propertyRef = doc(db, `${savedPropertiesIDs[i].propertyType}s`, savedPropertiesIDs[i].propertyDocId)
            const docSnap = await getDoc(propertyRef)
            let tempObj = ({...docSnap.data(), docId:docSnap.id})
            tempArr.push(tempObj)
        }
        setSavedPropertiesData(tempArr)
    }
    console.log(madeReservationsData)
  return (
    <div className='user-profile-wrapper'>
        <div className="sidebar">

            <ul className="sidebar-options">
                <li><button className='sidebar-btns active-option' onClick={e => switchProfileOption(options.profile, e.target)}>Profile</button></li>    
                <li><button className='sidebar-btns' onClick={e => switchProfileOption(options.savedProperties, e.target)}>Saved Properties</button></li>
                <li><button className='sidebar-btns' onClick={e => switchProfileOption(options.reservations, e.target)}>Reservations</button></li> 
            </ul>    
        </div>
        
        <div className="details-div">
            {selectedOption === options.profile && 
                <div className="profile-div">
                    <h2>Edit Information</h2>
                    <div className="profile-info-wrapper">

                        <div className="profile-inputs-wrapper">
                            <label>Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} disabled/>
                        </div>

                        <div className="profile-inputs-wrapper">
                            <label>Email</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} disabled/>
                        </div>

                        <div className="profile-inputs-wrapper">
                        <label>Password</label>
                        <input className='password-input' type="password" value="*********" disabled/>
                        <button className='edit-profile-btn'>Edit Profile</button>
                        </div>
                    </div>
                </div>
            }          

            {selectedOption === options.savedProperties && 
            <div className="saved-properties-div">
                <h2>Saved Properties</h2>
                    {savedPropertiesData.map((prop, index) =>{
                        return (
                            <div className="saved-property-wrapper" key={index}>
                                <div className="saved-property-img-wrapper">
                                    <img src={prop.propertyDetails.pictures[0]}/>
                                </div>
                                <div className="saved-property-details-wrapper">
                                    <Link className='saved-property-link' to="/propertyDetails" state={{property:prop}}>{prop.propertyDetails.propertyName}</Link>
                                    {prop.propertyDetails.propertyType === 'hotel' && 
                                        <span>{prop.propertyDetails.address + " " + prop.propertyDetails.address2}</span>
                                    }
                                    {prop.propertyDetails.propertyType === 'resort' && 
                                        <span>{prop.propertyDetails.address + " " + prop.propertyDetails.address2}</span>
                                    }
                                    {prop.propertyDetails.propertyType === 'apartment' && 
                                        <span>{prop.propertyDetails.address}</span>
                                    }
                                </div>
                            </div>
                        )
                    })}
            </div>
            }

            {selectedOption === options.reservations && 
            <div className="made-reservations-div">
                <h2>My Reservations</h2>
                {madeReservationsData.map((reservation, index) => {
                    console.log(reservation)
                    return (
                    <div className="made-reservation-wrapper" key={index}>
                        <div className="made-reservation-img-wrapper">
                            <img src={reservation.reservedProperty.propertyDetails.pictures[0]}/>
                        </div>
                        <div className="booked-property-details">
                            <h3>{reservation.reservedProperty.propertyDetails.propertyName}</h3>
                            {reservation.reservedProperty.propertyDetails.propertyType === 'hotel' && 
                                <span>{reservation.reservedProperty.propertyDetails.address + " " + reservation.reservedProperty.propertyDetails.address2}</span>
                            }
                            {reservation.reservedProperty.propertyDetails.propertyType === 'resort' && 
                                <span>{reservation.reservedProperty.propertyDetails.address + " " + reservation.reservedProperty.propertyDetails.address2}</span>
                            }
                            {reservation.reservedProperty.propertyDetails.propertyType === 'apartment' && 
                                <span>{reservation.propertyDetails.address}</span>
                            }
                            <p>Booked for: {reservation.arrivalDate}</p>
                            {reservation.reservedProperty.propertyDetails.propertyType.toLowerCase() === 'hotel' && <span className='hotel-rating'>{reservation.reservedProperty.propertyDetails.rating}</span>}
                        </div>
                    </div>
                    
                    )
                })}
               
            </div>
            }
        </div>
    </div>
  )
}
