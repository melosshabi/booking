import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {db, auth, storage} from '../firebase-config'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function ResortForm(){
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [propertyName, setPropertyName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [pictures, setPictures] = useState([])
    const [error, setError] = useState('')
    
    // 
    const [starRating, setStarRating] = useState('')
    const [roomCount, setRoomCount] = useState('')
    const [allowedPeoplePerRoom, setPeopleAllowedPerRoom] = useState('')
    const [pricePerMonth, setPricePerMonth] = useState('')


    const [rightDivActive, setRightDivActive] = useState(false)
    // This function switches between the two divs which contain the form inputs (.left-div, .right-div)
    function switchLeftOrRightDiv(){
     const leftDiv = document.querySelector('.left-div')
     const rightDiv = document.querySelector('.right-div')
     const nextBtn = document.querySelector('.next-btn')
     const buttonsWrapper = document.querySelector('.buttons-wrapper')
 
     if(rightDiv.classList.contains('active-right-div')){
         rightDiv.classList.remove('active-right-div')
         leftDiv.classList.add('active-left-div')
         nextBtn.innerText = "Next"
         setRightDivActive(false)
         buttonsWrapper.classList.remove('buttons-wrapper-space-between')
     }else if(leftDiv.classList.contains('active-left-div')){
         leftDiv.classList.remove('active-left-div')
         rightDiv.classList.add('active-right-div')
         nextBtn.innerText = "Go back"
         buttonsWrapper.classList.add('buttons-wrapper-space-between')
         setRightDivActive(true)
     }
 }

    async function createResortListing(e){
        e.preventDefault()

        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'hidden'
        document.querySelector('.creating-listing').classList.add('active-creating')

        let pictureLinks = []
        for(let i = 0; i < pictures.length; i++){
            const pictureRef = auth.currentUser ? ref(storage, `${cookies.get('id')}/resorts/${propertyName}/${propertyName + i}`) : ref(storage, `${fullName}/hotels/${propertyName}/${propertyName + i}`)
            await uploadBytes(pictureRef, pictures[i])
            await getDownloadURL(pictureRef)
            .then(res => pictureLinks.push(res))   
        }

        const resortsRef = collection(db, "resorts")
        await addDoc(resortsRef, {
            propertyDetails:{
                propertyName:propertyName,
                country:country,
                address:address,
                address2:address2,
                zipCode:zipCode,
                propertyType:"resort",
                roomCount:roomCount,
                allowedPeoplePerRoom:allowedPeoplePerRoom,
                pricePerMonth:pricePerMonth,
                pictures:{...pictureLinks},
                dateCreated:serverTimestamp(),
        },
        landLordName:auth.currentUser ? cookies.get('name') : fullName,   
        landLordId:auth.currentUser ? cookies.get('id') : ''
    }).then(() =>{
        alert("Property listed Successfully")
        document.documentElement.style.overflow = "scroll"
        navigate('/')
    })
    }

    return (
        <div className="form-wrapper">
        <div className="decoration-div resort-decoration">
            <div className="decoration-text-wrapper">
                <h3>Make your resort listing form irresistible - showcase the experiences and amenities that make your property a must-visit destination.</h3>
            </div>
        </div>

        <form className="list-property-form-resort" onSubmit={e => createResortListing(e)}>
            <h2>Fill out the form below to list your resort</h2>
            <>
            <div className="animation-div">
            <div className="left-div active-left-div">
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>
            {!auth.currentUser && <div className='inputs-wrappers'>
                    <label>Your Full Name</label>
                    <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}/>
                </div>}

            <div className="inputs-wrappers">
                <label>Room Count</label>
                <input type="number" required value={roomCount} onChange={e => setRoomCount(e.target.value)}/>
            </div>

                <div className="inputs-wrappers">
                    <label>Allowed people per room</label>
                    <input type="number" value={allowedPeoplePerRoom} onChange={e => setPeopleAllowedPerRoom(e.target.value)} required/>
                </div>

            <div className="inputs-wrappers">
                <label>Rent</label>
                <div style={{display:'flex', alignItems:"center"}}>$/per month<input style={{width:"50%", marginLeft:"20px"}} value={pricePerMonth} onChange={e => setPricePerMonth(e.target.value)}/></div>
            </div>
            </div>

            <div className="right-div">
            <div className="inputs-wrappers">
                <label>Country/Region</label>
                    <select onChange={e => setCountry(e.target.value)}>
                     <option>Select Country/Region</option>
                     <option>Kosovo</option>
                     <option>Albania</option>
                    </select>
            </div>
            
            <div className="inputs-wrappers">
                <label>Street name and house number</label>
                <input type="text" required value={address} onChange={e => setAddress(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Address Line 2</label>
                <input type="text" required value={address2} onChange={e => setAddress2(e.target.value)} />
            </div>

            <div className="inputs-wrappers">
                <label>ZIP Code</label>
                <input type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
            </div>
            
            <div className="inputs-wrappers">
                <label>Select at least 1 photo</label>
                <input type="file" multiple onChange={e => setPictures(prevPictures => [...prevPictures, ...e.target.files])} />
            </div>
            </div>
            </div>
            <div className="buttons-wrapper">
            <button className="next-btn" type='button' onClick={switchLeftOrRightDiv}>Next</button>
            {rightDivActive && <button className="create-list-btn">Create Listing</button>}
            </div>
            </>
            
        </form>
        </div>
    )
}