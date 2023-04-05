import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import {sendPasswordResetEmail} from 'firebase/auth'
import {db, auth} from '../firebase-config'
import '../styles/adminPage.css'

export default function AdminPage() {

    const navigate = useNavigate()

    auth.onAuthStateChanged(() => {
        if(auth.currentUser.uid !== 'uf5IaiAiv1Y4OlIruvX1Er2I0Sd2') navigate('/')
    })

    useEffect(()=>{
        
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

    function toggleAdminOptions(i){
        const moreOptionsDiv = document.querySelectorAll('.more-admin-options')[i]
        moreOptionsDiv.classList.toggle("active-admin-options")
    }

    async function sendResetPasswordEmail(email, i){
        const moreOptionsDiv = document.querySelectorAll('.more-admin-options')[i]
        moreOptionsDiv.classList.toggle('active-admin-options')
        await sendPasswordResetEmail(auth, email)
        .then(() => alert("Reset password email was sent!"))
    }

    async function deleteProperty(propertyType, docId){
        console.log(docId)
        const propertyRef = doc(db, propertyType, docId)
        await deleteDoc(propertyRef)
        .then(() => {
            alert("Property Deleted Successfully!")
            window.location.reload()
        })
    }
  return (
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
            {activeOption === adminOptions.users && 
                <div className="users">
                    <h2 style={{fontSize:'2em', textAlign:'center'}}>Users</h2>    
                    {users.map((user, index)=>{
                        let date = user.accountCreatedAt.toDate()
                        let fullDate = resolveDate(date)
                        return (
                            <div className="user" key={index} style={{position:'relative'}}>
                                <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index)}>···</button>
                                <div className="more-admin-options" style={{right:'-180px'}}>
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
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index)}>···</button>
                        <div className="more-admin-options">
                            <button onClick={() => deleteProperty('hotels', hotel.docId)}>Delete Property</button>
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
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index)}>···</button>
                        <div className="more-admin-options">
                            <button onClick={() => deleteProperty('apartments', apartment.docId)}>Delete Property</button>
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
                        <button className="more-admin-options-btn" onClick={() => toggleAdminOptions(index)}>···</button>
                        <div className="more-admin-options">
                            <button onClick={() => deleteProperty('resorts', resort.docId)}>Delete Property</button>
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
        </div>
    </div>
  )
}
