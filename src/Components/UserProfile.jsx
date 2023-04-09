import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {Link, useNavigate} from 'react-router-dom'
import {doc, getDocs, collection, query, where, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/userProfile.css'
import { sendPasswordResetEmail, updateEmail, updateProfile } from 'firebase/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
export default function UserProfile() {

    const [name, setName] = useState(cookies.get('name'))
    const [email, setEmail] = useState(cookies.get('email'))
    const [savedPropertiesIDs, setSavedPropertiesIDs] = useState([])

    const [savedPropertiesData, setSavedPropertiesData] = useState([])
    const [madeReservationsData, setMadeReservationsData] = useState([])
    const [listedProperties, setListedProperties] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        console.log(window.screen.width)
        if(window.screen.width <= 1024){
            document.querySelector('.user-profile-sidebar').classList.add('mobile-user-profile-sidebar')
        }
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
        
    async function editProfile(targetBtn){
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
            .then(() =>{
                cookies.set('name', name)
                cookies.set('email', email)
                alert('Profile Updated Successfully')
                window.location.reload()
            })   
        }
    }

    async function resetPassword(){
        await sendPasswordResetEmail(auth, cookies.get('email'))
        .then(() => {
            cookies.remove('auth-token')
            cookies.remove('email')
            cookies.remove('id')
            cookies.remove('name')
            alert("Reset password email has been sent!")
            navigate('/')
        })
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

        const sidebar = document.querySelector('.user-profile-sidebar')
        const ul = document.querySelector('.user-profile-sidebar-options')

        if(sidebar.classList.contains('mobile-user-profile-sidebar')){
            sidebar.classList.toggle('active-user-profile-sidebar')
            ul.classList.toggle('active-user-profile-sidebar-options')
        }
        const buttons = document.querySelectorAll('.user-sidebar-btns')
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('user-active-option')
        }
        targetButton.classList.add('user-active-option')
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

    function toggleUserMoreOptions(i){
        const unlistBtn = document.querySelectorAll('.unlist-property-btn')[i]
        unlistBtn.classList.toggle('active-unlist-btn')
    }

    async function unSaveProperty(propertyId, targetBtn){
        targetBtn.classList.remove('active-unlist-btn')

        const usersCollection = collection(db, 'users')
        const userQuery = query(usersCollection, where('id', '==', auth.currentUser.uid))
        const userSnapshot = await getDocs(userQuery)
    
        let userDocument = {}
        userSnapshot.forEach(doc => userDocument = ({...doc.data(), userDocId:doc.id}))
    
        let savedPropertiesLength = Object.keys(userDocument.savedProperties).length
    
        for(let i = 0; i < savedPropertiesLength; i++){
    
            if(userDocument.savedProperties[`property${i}`].propertyDocId === propertyId){
              if(userDocument.savedProperties[`property${i}`] === userDocument.savedProperties[`property${savedPropertiesLength - 1}`]){
                delete userDocument.savedProperties[`property${i}`]
              }else{
                let newValueForDeletedIndex = userDocument.savedProperties[`property${savedPropertiesLength - 1}`]
                delete userDocument.savedProperties[`property${i}`]
                
                console.log(newValueForDeletedIndex)
                delete userDocument.savedProperties[`property${savedPropertiesLength - 1}`]
                userDocument.savedProperties[`property${i}`] = newValueForDeletedIndex
    
                savedPropertiesLength = Object.keys(userDocument.savedProperties).length
              }
            }
        }
        
        const userDocRef = doc(db, 'users', userDocument.userDocId)
        delete userDocument.userDocId
        await updateDoc(userDocRef, userDocument)
        .then(() => window.location.reload())
      }    

    async function unlistProperty(propertyType, id, targetBtnIndex){
        const unlistBtn = document.querySelectorAll('.unlist-btn')
        unlistBtn[targetBtnIndex]

        let propCollectionName = propertyType === 'hotel' ? 'hotels' : propertyType === 'apartment' ? 'apartments' : propertyType === 'resort' ? 'resorts' : ''
        const docRef = doc(db, propCollectionName, id)
        await deleteDoc(docRef)
        .then(() =>{
            alert("Property was unlisted!")
            window.location.reload()
        })
    }

    function toggleUserProfileSidebar(){
        const sidebar = document.querySelector('.user-profile-sidebar')
        const ul = document.querySelector('.user-profile-sidebar-options')

        if(!sidebar.classList.contains('active-user-profile-sidebar')){
            sidebar.classList.add('active-user-profile-sidebar')
            ul.classList.add('active-user-profile-sidebar-options')
        }else{
            sidebar.classList.remove('active-user-profile-sidebar')
            ul.classList.remove('active-user-profile-sidebar-options')
        }
    }

  return (
    <>
    <Navbar/>
    <div className='user-profile-wrapper'>
        <div className="loader-wrapper"><span className="loader"></span></div>
        <div className="user-profile-sidebar">
            <div className="user-profile-hamburger-btn" onClick={toggleUserProfileSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="user-profile-sidebar-options">
                <li><button className='user-sidebar-btns user-active-option' onClick={e => switchProfileOption(options.profile, e.target)}>Profile</button></li>    
                <li><button className='user-sidebar-btns' onClick={e => switchProfileOption(options.savedProperties, e.target)}>Saved Properties</button></li>
                <li><button className='user-sidebar-btns' onClick={e => switchProfileOption(options.reservations, e.target)}>Reservations</button></li> 
                <li><button className='user-sidebar-btns' onClick={e => switchProfileOption(options.myProperties, e.target)}>My Properties</button></li> 
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
                            <button className="reset-password-btn" onClick={() => resetPassword()}>Reset Password</button>
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
                            <div className="saved-property-wrapper" key={index} style={{position:'relative'}}>
                                <button className="properties-more-options-btn" onClick={() => toggleUserMoreOptions(index)}>···</button>
                            <button className="unlist-property-btn" onClick={e => unSaveProperty(prop.docId, e.target)}>Unsave Property</button>
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
                        <div className="listed-property" key={index} style={{position:'relative'}}>
                            <button className="properties-more-options-btn" onClick={() => toggleUserMoreOptions(index)}>···</button>
                            <button className="unlist-property-btn" onClick={() => unlistProperty(property.propertyDetails.propertyType, property.docId, index)}>Unlist Property</button>
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
    </>
  )
}
