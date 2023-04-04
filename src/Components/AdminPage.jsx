import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import '../styles/adminPage.css'


export default function AdminPage() {

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
       
    async function switchAdminOption(targetBtn, newOption){
        const sidebarButtons = document.querySelectorAll('.sidebar-btns')
        for(let i = 0; i < sidebarButtons.length; i++){
            sidebarButtons[i].classList.remove('active-btn')
        }
        targetBtn.classList.add('active-btn')

        setActiveOption(newOption)
    }

    async function fetchUsers(){
        const usersCollection = collection(db, 'users')
        let users = []
        const usersSnapshot = await getDocs(usersCollection)
        usersSnapshot.forEach(user => users.push(({...user.data(), userDocId:user.id})))
        setUsers(users)
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
            {activeOption === adminOptions.users && 
                <div className="users">
                    {users.map((user, index)=>{
                        console.log(user.accountCreatedAt)
                        let date = user.accountCreatedAt.toDate()
                        
                        let year = date.getFullYear()
                        let monthIndex = date.getMonth()
                        let month;
                        let day = date.getDate()
                        
                        switch(monthIndex){
                            case 0:
                              month = "January"
                              break;
                            case 1:
                                month = 'February'
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
                                month = "November"
                                break;
                            case 11:
                                month = "Deceber"
                                break;
                            default :
                                month = "Error Getting Month"
                                break;
                        }
                        return (
                            <div className="user" key={index}>
                                <h2>Name: {user.name}</h2>
                                <h3>Email: {user.email}</h3>
                                <p>ID: {user.id}</p>
                                <p>User joined on: {day} of {month} {year}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    </div>
  )
}
