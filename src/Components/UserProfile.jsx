import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {doc, getDocs, collection, query, where, getDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/userProfile.css'
import { updateEmail, updateProfile } from 'firebase/auth'
import Cookies from 'universal-cookie'


const cookies = new Cookies()
export default function UserProfile() {

    const [name, setName] = useState(cookies.get('name'))
    const [email, setEmail] = useState(cookies.get('email'))
    const [savedPropertiesIDs, setSavedPropertiesIDs] = useState([])

    const [savedPropertiesData, setSavedPropertiesData] = useState([])
    const [madeReservationsData, setMadeReservationsData] = useState([])
    const [listedProperties, setListedProperties] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            async function fetchProfile(){
                const usersCollectionRef = collection(db, 'users')
                const userQuery = query(usersCollectionRef, where('id', '==', auth.currentUser.uid))
                const querySnapshot = await getDocs(userQuery)
                let userDocument = {}
                querySnapshot.forEach(doc => userDocument = {...doc.data(), id:doc.id}) 

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
        
    async function editProfile(targetBtn, oldName, oldEmail){
        const loader = document.querySelector('.loader-wrapper')

        if(targetBtn === document.querySelector('.edit-profile-btn')){
            document.querySelector('.save-changes-btn').style.display = 'block'
            document.querySelector('.edit-profile-btn').style.display = 'none'
            const inputs = document.querySelectorAll('.profile-inputs')
            document.querySelector('.reset-password-btn').style.display = 'block'

            for(let i = 0; i < inputs.length; i++){
                inputs[i].disabled = false
            }
        }else if(targetBtn === document.querySelector('.save-changes-btn')){
            
            loader.style.display = "flex"
            await updateProfile(auth.currentUser, {displayName:name})
            await updateEmail(auth.currentUser, email)
            .then(res=>{
                console.log(res)
                cookies.set('name', name)
                cookies.set('email', email)
                alert("Profile Updated Successfully")
                window.location.reload()
            })
                
        }
        
    }
    const options = {
        profile:'profile',
        savedProperties:'savedProperties',
        reservations:'reservations',
        myProperties:'myProperties'
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
        if(newOption === options.myProperties) fetchListedProperties()
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

    async function fetchListedProperties(){
        // Apartments
        const apartmentsRef = collection(db, 'apartments')
        const apartmentsQuery = query(apartmentsRef, where('landLordId', '==', auth.currentUser.uid))
        const querySnapshot = await getDocs(apartmentsQuery)
        let listedProperties = []
        querySnapshot.forEach(doc => listedProperties.push({...doc.data(), docId:doc.id}) )
        // Hotels
        const hotelsRef = collection(db, 'hotels')
        const hotelsQuery = query(hotelsRef, where('landLordId', '==', auth.currentUser.uid))
        const hotelSnapshot = await getDocs(hotelsQuery)
        hotelSnapshot.forEach(doc => listedProperties.push({...doc.data(), docId:doc.id}))
        // Resorts
        const resortsRef = collection(db, 'resorts')
        const resortsQuery = query(resortsRef, where('landLordId', '==', auth.currentUser.uid))
        const resortSnapshot = await getDocs(resortsQuery)
        resortSnapshot.forEach(doc => listedProperties.push({...doc.data(), docId:doc.id}))
        
        setListedProperties(listedProperties)
    }
  return (
    <div className='user-profile-wrapper'>
        <div className="loader-wrapper"><span className="loader"></span></div>
        <div className="sidebar">

            <ul className="sidebar-options">
                <li><button className='sidebar-btns active-option' onClick={e => switchProfileOption(options.profile, e.target)}>Profile</button></li>    
                <li><button className='sidebar-btns' onClick={e => switchProfileOption(options.savedProperties, e.target)}>Saved Properties</button></li>
                <li><button className='sidebar-btns' onClick={e => switchProfileOption(options.reservations, e.target)}>Reservations</button></li> 
                <li><button className='sidebar-btns' onClick={e => switchProfileOption(options.myProperties, e.target)}>My Properties</button></li> 
            </ul>    
        </div>
        
        <div className="details-div">
            {/* Profile Information */}
            {selectedOption === options.profile && 
                <div className="profile-div">
                    <h2>Edit Information</h2>
                    <div className="profile-info-wrapper">

                        <div className="profile-inputs-wrapper">
                            <label>Name</label>
                            <input className="profile-inputs" type="text" value={name} onChange={e => setName(e.target.value)} disabled/>
                        </div>

                        <div className="profile-inputs-wrapper">
                            <label>Email</label>
                            <input className="profile-inputs" type="text" value={email} onChange={e => setEmail(e.target.value)} disabled/>
                        </div>

                        <div className="profile-inputs-wrapper">
                        <label>Password</label>
                        <div className="reset-password-wrapper">
                            <input className='password-input' type="password" value="*********" disabled/>
                            <button className="reset-password-btn">Reset Password</button>
                        </div>
                        <button className='edit-profile-btn' onClick={e => editProfile(e.target, name, email)}>Edit Profile</button><button className='edit-profile-btn save-changes-btn' onClick={e => editProfile(e.target)}>Save Changes</button>
                        </div>
                    </div>
                </div>
            }          

            {/* Saved Properties */}
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
                                    <span>{prop.propertyDetails.address + " " + prop.propertyDetails.address2}</span>
                                </div>
                            </div>
                        )
                    })}
            </div>
            }

            {/* Reservations */}
            {selectedOption === options.reservations && 
            <div className="made-reservations-div">
                <h2>My Reservations</h2>
                {madeReservationsData.map((reservation, index) => {
                    return (
                    <div className="made-reservation-wrapper" key={index}>
                        <div className="made-reservation-img-wrapper">
                            <img src={reservation.reservedProperty.propertyDetails.pictures[0]}/>
                        </div>
                        <div className="booked-property-details">
                            <Link className='reservation-links' to="/propertyDetails" state={{property:reservation.reservedProperty}}>{reservation.reservedProperty.propertyDetails.propertyName}</Link>
                            <span>{reservation.reservedProperty.propertyDetails.address + " " + reservation.reservedProperty.propertyDetails.address2}</span>
                            <p>Booked for: {reservation.arrivalDate}</p>
                            {reservation.reservedProperty.propertyDetails.propertyType.toLowerCase() === 'hotel' && <span className='hotel-rating'>{reservation.reservedProperty.propertyDetails.rating}</span>}
                        </div>
                    </div>
                    
                    )
                })}
               
            </div>
            }

            {/* Listed Properties */}
            {selectedOption === options.myProperties && 
            <div className='listed-properties-wrapper'>
                <h2>My Properties</h2>
                {listedProperties.map((property, index) => {
                    return (
                        <div className="listed-property" key={index}>
                            <div className="listed-property-img-wrapper">
                                <img src={property.propertyDetails.pictures[0]} />
                            </div>
                            <div className="listed-property-details">
                                <Link className="myProperties-links" to="/propertyDetails" state={{property:property}}>{property.propertyDetails.propertyName}</Link>
                                <span>{property.propertyDetails.address + " " + property.propertyDetails.address2}</span>
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
