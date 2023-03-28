import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import {db, storage} from '../firebase-config'
import Cookies from 'universal-cookie'
import '../styles/listPropertyForm.css'

const cookies = new Cookies()
export default function ListPropertyForm() {

    const location = useLocation()
    const navigate = useNavigate()
    const [propertyName, setPropertyName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [pictures, setPictures] = useState([])

    // 
    const [starRating, setStarRating] = useState('')
    const [roomCount, setRoomCount] = useState('')
    const [pricePerNight, setPricePerNight] = useState('')

    async function createApartmentListing(e){
        e.preventDefault()

        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'hidden'
        document.querySelector('.creating-listing').classList.add('active-creating')
        
        let pictureLinks = []
        for(let i = 0; i < pictures.length; i++){
            const pictureRef = ref(storage, `${cookies.get('id')}/apartments/${propertyName}/${propertyName + i}`)
            await uploadBytes(pictureRef, pictures[i])
            await getDownloadURL(pictureRef)
            .then(res => pictureLinks.push(res))
            
        }

        const collectionRef = collection(db, 'apartments')
        await addDoc(collectionRef, {
                propertyDetails:{
                    propertyName:propertyName,
                    country:country,
                    address:address,
                    zipCode:zipCode,
                    propertyType:"Apartment",
                    pictures:{...pictureLinks},
                    dateCreated:serverTimestamp(),
            },
            landLordName:cookies.get('name'),
            landLordId:cookies.get('id')
        }).then(() => {
            document.documentElement.style.overflowY = 'scroll'
            navigate('/')
        })
    }

    async function createHotelListing(e){
        e.preventDefault()

        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'hidden'
        document.querySelector('.creating-listing').classList.add('active-creating')

        let pictureLinks = []
        for(let i = 0; i < pictures.length; i++){
            const pictureRef = ref(storage, `${cookies.get('id')}/hotels/${propertyName}/${propertyName + i}`)
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
                propertyType:"Hotel",
                rating:starRating,
                pricePerNight:pricePerNight,
                pictures:{...pictureLinks},
                dateCreated:serverTimestamp(),
        },
        landLordName:cookies.get('name'),
        landLordId:cookies.get('id')
    }).then(() => {
        document.documentElement.style.overflowY = 'scroll'
        navigate('/')
    })
    }

    async function createResortListing(e){
        e.preventDefault()

    }
  return (
    <div className='list-property-form-wrapper'>
        <div className="creating-listing">
            <h2>Creating Listing...</h2>
        </div>
        <h2>List Your Property</h2>
        {location.state.propertyType === 'apartment' && 
        <form className="list-property-form" onSubmit={e => createApartmentListing(e)}>
            
            <>
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>

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
                <label>ZIP Code</label>
                <input type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
            </div>
            
            <div className="inputs-wrappers">
                <label>Select at least 5 pictures of your property</label>
                <input type="file" multiple min="5" max="5" onChange={e => setPictures(e.target.files)} />
            </div>

            <button className="create-list-btn">Create Listing</button>
            </>
            
        </form>}

        {/* Hotel */}

        {location.state.propertyType === 'hotel' &&  <form className="list-property-form-hotel" onSubmit={e => createHotelListing(e)}>
            <>
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>
            
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
                <input type="file" multiple min="5" max="5" onChange={e => setPictures(prevPictures => [...prevPictures, ...e.target.files])} />
            </div>
    
            <button className="create-list-btn">Create Listing</button>
            </>
            
        </form>}

        {/* Resort */}
        
        {location.state.propertyType === 'resort' &&  <form className="list-property-form-resort" onSubmit={e => createResortListing(e)}>
            <>
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>
            
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
                    <label>Allowed people per room</label>
                    <input type="number"/>
                </div>

            <div className="inputs-wrappers">
                <label>Price for 1 person</label>
                <div style={{display:'flex', alignItems:"center"}}>$/per night<input style={{width:"50%", marginLeft:"20px"}} value={pricePerNight} onChange={e => setPricePerNight(e.target.value)}/></div>
            </div>

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
                <input type="file" multiple min="5" max="5" onChange={e => setPictures(prevPictures => [...prevPictures, ...e.target.files])} />
            </div>
    
            <button className="create-list-btn">Create Listing</button>
            </>
            
        </form>}
    </div>
  )
}
