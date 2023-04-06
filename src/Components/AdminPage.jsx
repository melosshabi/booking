import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import {sendPasswordResetEmail} from 'firebase/auth'
import {db, auth} from '../firebase-config'
import closeIcon from '../images/close-icon.png'
import '../styles/adminPage.css'

export default function AdminPage() {

    const navigate = useNavigate()

    useEffect(()=>{
        console.log(auth)
        if(auth.currentUser === null || auth.currentUser.uid !== 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2') navigate('/')
        fetchUsers()
        return () => fetchUsers()
    }, [])

    const adminOptions = {
        users:'view users',
        hotels:'view hotels',
        apartments:'view apartments',
        resorts:'view resorts'
    }

    const [activeOption, setActiveOption] = useState(adminOptions.users)
    const [users, setUsers] = useState([])
    const [hotels, setHotels] = useState([])
    const [apartments, setApartments] = useState([])
    const [resorts, setResorts] = useState([])

    async function switchAdminOption(targetBtn, newOption){
        const sidebarButtons = document.querySelectorAll('.sidebar-btns')
        for(let i = 0; i < sidebarButtons.length; i++){
            sidebarButtons[i].classList.remove('active-btn')
        }
        targetBtn.classList.add('active-btn')

        if(newOption === adminOptions.hotels) fetchProps('hotels')
        else if(newOption === adminOptions.apartments) fetchProps('apartments')
        else if(newOption === adminOptions.resorts) fetchProps('resorts')

        setActiveOption(newOption)
    }

    async function fetchUsers(){
        const usersCollection = collection(db, 'users')
        let users = []
        const usersSnapshot = await getDocs(usersCollection)
        usersSnapshot.forEach(user => users.push(({...user.data(), userDocId:user.id})))
        setUsers(users)
    }

    async function fetchProps(propType){
        const propsRef = collection(db, propType)
        const propsSnapshot = await getDocs(propsRef)
        let props = []
        propsSnapshot.forEach(doc => props.push({...doc.data(), docId:doc.id}))
        
        propType === 'hotels' ? setHotels(props):
        propType === 'apartments' ? setApartments(props):
        propType === 'resorts' ? setResorts(props): ''

    }

    function resolveDate(date){
        let year = date.getFullYear()
        let month;
        let day = date.getDate()

        switch(date.getMonth()){
            case 0:
                month = 'January'
                break;
            case 1:
                month = "February"
                break;
            case 2:
                month = "March"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "June"
                break;
            case 6:
                month = "July"
                break;
            case 7:
                month = "August"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "October"
                break;
            case 10:
                month = "Noveber"
                break;
            case 11:
                month = "December"
                break;
            default:
                month = "Error"
                break;
        }
        return {day, month, year}
    }

    function toggleAdminOptions(i, targetMenu){
        if(targetMenu === "usersMenu") document.querySelectorAll('.users-more-admin-options')[i].classList.toggle("active-admin-options")
        else if(targetMenu === "property") document.querySelectorAll('.properties-more-admin-options')[i].classList.toggle("active-admin-options")
    }

    async function sendResetPasswordEmail(email, i){
        const moreOptionsDiv = document.querySelectorAll('.more-admin-options')[i]
        moreOptionsDiv.classList.toggle('active-admin-options')
        await sendPasswordResetEmail(auth, email)
        .then(() => alert("Reset password email was sent!"))
    }

    async function deleteProperty(propertyType, docId){
        const propertyRef = doc(db, propertyType, docId)
        await deleteDoc(propertyRef)
        .then(() => {
            alert("Property Deleted Successfully!")
            window.location.reload()
        })
    }

    // Variablat per pronen qe ka mu editu
    const [objectOfPropertyToBeUpdated, setObjectOfPropertyToBeUpdated] = useState({})
    const [newName, setNewName] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newAddress2, setNewAddress2] = useState('')
    const [newZipCode, setNewZipCode] = useState('')

    function editProperty(action, property){
        const editForm = document.querySelector('.edit-property-wrapper')
        if(action === 'show'){
            editForm.style.display = 'flex'
            setObjectOfPropertyToBeUpdated(property)
            setNewName(property.propertyDetails.propertyName)
            setNewAddress(property.propertyDetails.address)
            setNewAddress2(property.propertyDetails.address2)
            setNewZipCode(property.propertyDetails.zipCode)
            document.documentElement.style.overflow = 'hidden'
            document.documentElement.scrollTo(0, 0)
        } 
        else if(action === 'hide') editForm.style.display = 'none'
    }

    async function savePropertyChanges(property, e, newName, newCountry, newAddress, newAddress2, newZipCode){
        e.preventDefault()

        document.querySelector('.submit-editted-property').classList.add('disabled-btn')

        const propertyRef = doc(db, `${property.propertyDetails.propertyType}s`, property.docId)
        await updateDoc(propertyRef, {
            landLordId:property.landLordId,
            landLordName:property.landLordName,
            propertyDetails:{
                ...property.propertyDetails,
                propertyName:newName,
                country:newCountry,
                address:newAddress,
                address2:newAddress2,
                zipCode:newZipCode
            }
        }).then(() => {
            alert("Property has been updated successfully")
            window.location.reload()
        })
    }
  return (
    <>
    <Navbar/>
    <div className='admin-page-wrapper'>
        <div className="admin-sidebar">
            <ul>
                <li><button className="sidebar-btns active-btn" onClick={e => switchAdminOption(e.target, adminOptions.users)}>View Users</button></li>
                <li><button className="sidebar-btns" onClick={e => switchAdminOption(e.target, adminOptions.hotels)}>View Hotels</button></li>
                <li><button className="sidebar-btns" onClick={e => switchAdminOption(e.target, adminOptions.apartments)}>View Apartments</button></li>
                <li><button className="sidebar-btns" onClick={e => switchAdminOption(e.target, adminOptions.resorts)}>View Resorts</button></li>
            </ul>
        </div>

        <div className="admin-page-details-div">
            {/* Users */}
            <h2 style={{textAlign:'center', fontSize:"2em", margin:'20px 0'}}>Admin Page</h2>
            {activeOption === adminOptions.users && 
                <div className="users">
                    <h2 style={{fontSize:'2em', textAlign:'center'}}>Users</h2>    
                    {users.map((user, index)=>{
                        let date = user.accountCreatedAt.toDate()
                        let fullDate = resolveDate(date)
                        return (
                            <div className="user" key={index} style={{position:'relative'}}>
                                <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index, 'usersMenu')}>···</button>
                                <div className="users-more-admin-options" style={{right:'-180px'}}>
                                    <button onClick={() => sendResetPasswordEmail(user.email, index)}>Send Reset Password Email</button>
                                </div>
                                <h2>Name: {user.name}</h2>
                                <h3>Email: {user.email}</h3>
                                <p>ID: {user.id}</p>
                                <p>User joined on: {fullDate.day}    of {fullDate.month} {fullDate.year}</p>
                            </div>
                        )
                    })}
                </div>
            }

            {/* Hotels */}
            {activeOption === adminOptions.hotels && <div className="hotels-wrapper">
                <h2>Hotels</h2>
             {hotels.map((hotel, index) =>{
                let date = hotel.propertyDetails.dateCreated.toDate()
                let fullDate = resolveDate(date)

                return (
                    <div className="listed-property admin-listed-property" key={index} style={{position:'relative'}}>
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index, 'property')}>···</button>
                        <div className="properties-more-admin-options">
                            <button onClick={() => deleteProperty('hotels', hotel.docId)}>Delete Property</button>
                            <button onClick={() => editProperty('show', hotel)}>Edit Property</button>
                        </div>
                        <div className="listed-property-img-wrapper">
                            <img src={hotel.propertyDetails.pictures[0]}/>
                        </div>
                        <div className="listed-property-details">
                            <Link to="/propertyDetails" className="myProperties-links"  style={{marginBottom:'20px'}} state={{property:hotel}}>{hotel.propertyDetails.propertyName}</Link>
                            <p>{hotel.propertyDetails.address + " " + hotel.propertyDetails.address2}</p>
                            <p className="p-details">Landlord name: {hotel.landLordName}</p>
                            <p className="p-details">Landlord ID: {hotel.landLordId}</p>
                            <p className="p-details">Property was listed on: {fullDate.day} of {fullDate.month} {fullDate.year}</p>
                        </div>
                    </div>
                )
             })}
             </div>}

             {/* Apartments */}
             {activeOption === adminOptions.apartments && <div className="apartments-wrapper">
                <h2>Apartments</h2>

                {apartments.map((apartment, index) => {
                    let date = apartment.propertyDetails.dateCreated.toDate()
                    let fullDate = resolveDate(date)
                    return (
                    <div className="listed-property admin-listed-property" key={index} style={{position:'relative'}}>
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index, 'property')}>···</button>
                        <div className="properties-more-admin-options">
                            <button onClick={() => deleteProperty('apartments', apartment.docId)}>Delete Property</button>
                            <button onClick={() => editProperty('show', apartment)}>Edit Property</button>
                        </div>
                        <div className="listed-property-img-wrapper">
                            <img src={apartment.propertyDetails.pictures[0]} />
                        </div>
                        <div className="listed-property-details">
                            <Link to="/propertyDetails" className='myProperties-links' state={{property:apartment}}>{apartment.propertyDetails.propertyName}</Link>
                            <p className="p-details">{apartment.propertyDetails.address + " " + apartment.propertyDetails.address2}</p>
                            <p className="p-details">Landlord name: {apartment.landLordName}</p>
                            <p className="p-details">Landlord ID: {apartment.landLordId}</p>
                            <p className="p-details">Property was listed on: {fullDate.day} of {fullDate.month} {fullDate.year}</p>
                            
                        </div>
                    </div>
                )})}
                </div>
                }
                

                {/* Resorts */}
                {activeOption === adminOptions.resorts && <div className="resorts-wrapper">
                <h2>Resorts</h2>

                {resorts.map((resort, index) => {
                    let date = resort.propertyDetails.dateCreated.toDate()
                    let fullDate = resolveDate(date)
                    return (
                    <div className="listed-property admin-listed-property" key={index} style={{position:'relative'}}>
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index, 'property')}>···</button>
                        <div className="properties-more-admin-options">
                            <button onClick={() => deleteProperty('resorts', resort.docId)}>Delete Property</button>
                            <button onClick={() => editProperty('show', resort)}>Edit Property</button>
                        </div>
                        <div className="listed-property-img-wrapper">
                            <img src={resort.propertyDetails.pictures[0]} />
                        </div>
                        <div className="listed-property-details">
                            <Link to="/propertyDetails" className='myProperties-links' state={{property:resort}}>{resort.propertyDetails.propertyName}</Link>
                            <p className="p-details">{resort.propertyDetails.address + " " + resort.propertyDetails.address2}</p>
                            <p className="p-details">Landlord name: {resort.landLordName}</p>
                            <p className="p-details">Landlord ID: {resort.landLordId}</p>
                            <p className="p-details">Property was listed on: {fullDate.day} of {fullDate.month} {fullDate.year}</p>
                            
                        </div>
                    </div>
                )})}
                </div>
                }

                <div className="edit-property-wrapper">
                    <button className="close-edit-form" onClick={() => editProperty('hide')}>
                        <img src={closeIcon}/>
                    </button>
                        <form className="edit-property-form" onSubmit={e => savePropertyChanges(objectOfPropertyToBeUpdated, e, newName, newCountry, newAddress, newAddress2, newZipCode)}>
                            
                            <div className="edit-inputs-wrappers">
                                <label>Property Name</label>
                            <input required type="text" placeholder='Property Name' value={newName} onChange={e => setNewName(e.target.value)}/>
                            </div>

                            <select required onChange={e => setNewCountry(e.target.value)}>
                                <option>--Select Country--</option>
                                <option>Kosovo</option>
                                <option>Albania</option>
                            </select>

                            <div className="edit-inputs-wrappers">
                                <label>City</label>
                                <input required type="text" placeholder='City' value={newAddress} onChange={e => setNewAddress(e.target.value)}/>
                            </div>

                            <div className="edit-inputs-wrappers">
                                <label>Address</label>
                                <input required type="text" placeholder='Address' value={newAddress2} onChange={e => setNewAddress2(e.target.value)}/>
                            </div>

                            <div className="edit-inputs-wrappers">
                                <label>Zip Code</label>
                                <input required type="text" placeholder='Zip Code' value={newZipCode} onChange={e => setNewZipCode(e.target.value)}/>
                            </div>

                            <button className="submit-editted-property">Save Changes</button>
                        </form>
                </div>
        </div>
    </div>
    </>
  )
}
