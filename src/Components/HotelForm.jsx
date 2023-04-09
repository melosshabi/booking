import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {db, auth, storage} from '../firebase-config'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function HotelForm(){

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
    const [pricePerNight, setPricePerNight] = useState('')


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

    async function createHotelListing(e){
        e.preventDefault()

        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'hidden'
        document.querySelector('.creating-listing').classList.add('active-creating')

        let pictureLinks = []
        for(let i = 0; i < pictures.length; i++){
            const pictureRef = auth.currentUser ? ref(storage, `${cookies.get('id')}/hotels/${propertyName}/${propertyName + i}`) : ref(storage, `${fullName}/hotels/${propertyName}/${propertyName + i}`)
            await uploadBytes(pictureRef, pictures[i])
            await getDownloadURL(pictureRef)
            .then(res => pictureLinks.push(res))   
        }

        const hotelsRef = collection(db, "hotels")
        await addDoc(hotelsRef, {
            propertyDetails:{
                propertyName:propertyName,
                country:country,
                address:address,
                address2:address2,
                zipCode:zipCode,
                propertyType:"hotel",
                rating:starRating,
                roomCount:roomCount,
                pricePerNight:pricePerNight,
                pictures:{...pictureLinks},
                dateCreated:serverTimestamp(),
        },
        landLordName:cookies.get('name'),   
        landLordId:cookies.get('id')
    }).then(() => {
        alert("Property listed Successfully")
        document.documentElement.style.overflowY = 'scroll'
        navigate('/')
    })
    }

    return (
        <div className="form-wrapper">
        <div className="decoration-div hotel-decoration">
            <div className="decoration-text-wrapper">
                <h3>Your hotel listing form is your first impression - make it count!</h3>
            </div>
        </div>
        <form className="list-property-form-hotel" onSubmit={e => createHotelListing(e)}>
            <h2>Fill out the form below to list your hotel</h2>
            <>
            <div className="animation-div">
            <div className="left-div active-left-div">
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>
            {!auth.currentUser && <div className='inputs-wrappers'>
                    <label>Your Full Name</label>
                    <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}/>
                </div>}
            <div className="inputs-wrappers"><label>Star Rating</label>
                <select onChange={e => setStarRating(e.target.value)}>
                    <option>N/A</option>
                    <option>1 Star</option>
                    <option>2 Stars</option>
                    <option>3 Stars</option>
                    <option>4 Stars</option>
                    <option>5 Stars</option>
                </select>
            </div>

            <div className="inputs-wrappers">
                <label>Room Count</label>
                <input type="number" required value={roomCount} onChange={e => setRoomCount(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Price for 1 person</label>
                <div style={{display:'flex', alignItems:"center"}}>$/per night<input style={{width:"50%", marginLeft:"20px"}} value={pricePerNight} onChange={e => setPricePerNight(e.target.value)}/></div>
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
                <label>City</label>
                <input type="text" required value={address} onChange={e => setAddress(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Address</label>
                <input type="text" required value={address2} onChange={e => setAddress2(e.target.value)} />
            </div>

            <div className="inputs-wrappers">
                <label>ZIP Code</label>
                <input type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
            </div>
            
            <div className="inputs-wrappers">
                <label>Select at least 3 photos</label>
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