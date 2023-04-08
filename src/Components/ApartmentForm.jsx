import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {db, auth, storage} from '../firebase-config'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function ApartmentForm(){

    const navigate = useNavigate('/')

    const [fullName, setFullName] = useState('')
    const [propertyName, setPropertyName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [pictures, setPictures] = useState([])
    const [pricePerNight, setPricePerNight] = useState('')
    const [error, setError] = useState('')

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

    async function createApartmentListing(e){
        e.preventDefault()

        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'hidden'
        document.querySelector('.creating-listing').classList.add('active-creating')
        
        let pictureLinks = []
        for(let i = 0; i < pictures.length; i++){
            const pictureRef = auth.currentUser ? ref(storage, `${cookies.get('id')}/apartments/${propertyName}/${propertyName + i}`) : ref(storage, `${fullName}/apartments/${propertyName}/${propertyName + i}`) 
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
                    address2:address2,
                    zipCode:zipCode,
                    pricePerNight:pricePerNight,
                    propertyType:"apartment",
                    pictures:{...pictureLinks},
                    dateCreated:serverTimestamp(),
            },
            landLordName:auth.currentUser ? cookies.get('name') : fullName,   
            landLordId:auth.currentUser ? cookies.get('id') : ''
        }).then(() => {
            alert("Property listed Successfully")
            document.documentElement.style.overflowY = 'scroll'
            navigate('/')  
        })
    }

    return (
        <div className='form-wrapper'>
        <div className="decoration-div">
            <div className="decoration-text-wrapper">
                <h3>Your apartment listing form is your opportunity to showcase the unique features and amenities of your property, enticing potential renters to make it their new home.</h3>
            </div>
        </div>
        <form className="list-property-form-apartment" onSubmit={e => createApartmentListing(e)}>
            <h2>Fill out the form below to list your apartment</h2>

            <div className='animation-div'>
            <div className="left-div active-left-div">
               
            <div className="inputs-wrappers"><label>Property Name</label><input type="text" required value={propertyName} onChange={e => setPropertyName(e.target.value)}/></div>
            {!auth.currentUser && <div className='inputs-wrappers'>
                    <label>Your Full Name</label>
                    <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}/>
                </div>}
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
            </div>
            <div className="right-div">
            <div className="inputs-wrappers">
                <label>Street name and house number</label>
                <input type="text" required value={address2} onChange={e => setAddress2(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>ZIP Code</label>
                <input type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Price Per Night</label>
                <input type="number" required value={pricePerNight} onChange={e => setPricePerNight(e.target.value)}/>
            </div>

            <div className="inputs-wrappers">
                <label>Select at least 5 pictures of your property</label>
                <input type="file" multiple onChange={e => setPictures(e.target.files)} />
                <span id="error">{error}</span>
            </div>
            </div>
            </div>
            <div className="buttons-wrapper">
            <button className='next-btn' type="button" onClick={switchLeftOrRightDiv}>Next</button>
            {rightDivActive && <button className="create-list-btn">Create Listing</button>}
            </div>
            
            
        </form>
        </div>
    )
}