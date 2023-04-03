import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {collection, query, getDocs, where} from 'firebase/firestore'
import {db} from '../firebase-config'
import hotel from '../images/hotel.jpeg'
import resort from '../images/resorts.jpeg'
import apartments from '../images/apartments.jpeg'
import '../styles/home.css'

export default function Home() {

    const navigate = useNavigate()

    const [city, setCity] = useState('')
    const [propertyType, setPropertyType] = useState('')

    async function fetchQuery(){
        if(city === '' || propertyType === '') return

        const collectionRef = collection(db, propertyType.toLowerCase())
        const docsQuery = query(collectionRef, where('propertyDetails.address', '==', city))
        const fetchedDocs = []
        const snapshot = await getDocs(docsQuery)
        snapshot.forEach(doc => fetchedDocs.push({...doc.data(), docId:doc.id}))
        
        navigate('/queryResults', {state:{docs:fetchedDocs}})
    }
    

  return (
    <div className='home-wrapper'>
        <div className="home-content-wrapper">
            <div className="home-text">
                <h2>Find your next stay</h2>
                <h3>Search deals on hotels, homes and much more...</h3>
            </div>
        </div>
        
        <div className="search-wrapper">
            <div className="inputs-wrapper">
                <input id="search-bar" type="text" placeholder='Where are you going?' value={city} onChange={e => setCity(e.target.value)}/>
                <select onChange={e => setPropertyType(e.target.value)}>
                    <option>-Select Property Type-</option>
                    <option>Apartments</option>
                    <option>Hotels</option>
                    <option>Resorts</option>
                </select>
                
                <button className='search-btn' onClick={fetchQuery}>Search</button>
            </div>
        </div>

        <div className="recommendations">
            <h3>Browse by property type</h3>
            <div className="property-types">
                <div className="hotels">
                    <Link to="/propertyBrowser" state={{propertyType:"hotels"}}><img src={hotel}/></Link>
                    <Link>Hotels</Link>
                </div>
                <div className="apartments">
                    <Link to="/propertyBrowser" state={{propertyType:"apartments"}}><img src={apartments} /></Link>
                    <Link>Apartments</Link>
                </div>
                <div className="resorts">
                    <Link to="/propertyBrowser" state={{propertyType:"resorts"}}><img src={resort} /></Link>
                    <Link>Resorts</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
