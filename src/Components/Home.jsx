import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import userIcon from '../images/user.png'
import caret from '../images/caret.png'
import blackMinus from '../images/black-minus.png'
import blueMinus from '../images/blue-minus.png'
import blackPlus from '../images/black-plus.png'
import bluePlus from '../images/blue-plus.png'
import hotel from '../images/hotel.jpeg'
import resort from '../images/resorts.jpeg'
import apartments from '../images/apartments.jpeg'
import '../styles/home.css'

export default function Home() {
    
    const [personCount, setPersonCount] = useState(1)
    const [roomCount, setRoomCount] = useState(1)

    function toogleCountEditor(){
        document.querySelector('.caret-icon').classList.toggle('active-caret')
        document.querySelector('.count-editor').classList.toggle('active-count-editor')
    }

    const actions = {
        decrement:'decrement',
        increment:'increment'
    }

    function changePersonCount(action){

        const incrementBtn = document.querySelector('.increment-btn')
        const decrementBtn = document.querySelector('.decrement-btn')

        if(action == actions.increment){
            let newPersonCount = personCount + 1;
            setPersonCount(newPersonCount)
            
            if(newPersonCount > 1){
                decrementBtn.disabled = false
                decrementBtn.classList.add('enabled-btn')
            }
            if(newPersonCount  === 30){
                incrementBtn.classList.remove('enabled-btn')
                incrementBtn.disabled = true
            }
        }
        if(action == actions.decrement){
          let newPersonCount = personCount - 1;
          setPersonCount(newPersonCount)
          if(newPersonCount === 1) {
            decrementBtn.disabled = true
            decrementBtn.classList.remove('enabled-btn')
          }
        }
        
    }

    function changeRoomCount(action){
        const incrementBtn = document.querySelectorAll('.increment-btn')[1]
        const decrementBtn = document.querySelectorAll('.decrement-btn')[1]

        if(action == actions.increment){
            let newRoomCount = roomCount + 1;
            setRoomCount(newRoomCount)
            
            if(newRoomCount > 1){
                decrementBtn.disabled = false
                decrementBtn.classList.add('enabled-btn')
            }
            if(newRoomCount  === 30){
                incrementBtn.classList.remove('enabled-btn')
                incrementBtn.disabled = true
            }
        }
        if(action == actions.decrement){
          let newRoomCount = roomCount - 1;
          setRoomCount(newRoomCount)
          if(newRoomCount === 1) {
            decrementBtn.disabled = true
            decrementBtn.classList.remove('enabled-btn')
          }
        }
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
                <input type="text" placeholder='Where are you going?'/>
                <input type="date"/>
                <div className="person-count">
                    <img className="user-icon" src={userIcon} alt="User Icon"/>{personCount} {personCount > 1 ? 'Persons' : 'Person'} {roomCount} {roomCount > 1 ? "Rooms" : "Room"} <img className="caret-icon" src={caret} alt="Caret icon" onClick={toogleCountEditor}/>
                    <div className="count-editor">
                        <label>Persons</label> <div className="current-count"><button className="decrement-btn"  onClick={() => changePersonCount(actions.decrement)}><img src={personCount === 1 ? blackMinus : blueMinus} /></button> {personCount} <button className="increment-btn enabled-btn" onClick={() => changePersonCount(actions.increment)}><img src={personCount === 30 ? blackPlus : bluePlus} /></button></div>
                        <label>Rooms</label> <div className="current-count"><button className="decrement-btn"  onClick={() => changeRoomCount(actions.decrement)}><img src={roomCount === 1 ? blackMinus : blueMinus} /></button> {roomCount} <button className="increment-btn enabled-btn" onClick={() => changeRoomCount(actions.increment)}><img src={roomCount === 30 ? blackPlus : bluePlus} /></button></div>
                    </div>   
                    
                </div>
                <button className='search-btn'>Search</button>
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
