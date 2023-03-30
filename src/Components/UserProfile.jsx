import React, {useState} from 'react'
import '../styles/userProfile.css'

export default function UserProfile() {

    const options = {
        profile:'profile',
        savedProperties:'savedProperties',
        reservations:'reservations'
    }
    const [selectedOption, setSelectedOption] = useState(options.profile)


  return (
    <div className='user-profile-wrapper'>
        <div className="sidebar">

            <ul className="sidebar-options">
                <li><button>Profile</button></li>    
                <li><button>Saved Properties</button></li>
                <li><button>Reservations</button></li>
            </ul>    
        </div>
        
        <div className="details-div">
            {selectedOption === options.profile && 
                <div className="profile-div">
                    <h2>Edit Information</h2>
                    <div className="profile-info-wrapper">

                        <div className="profile-inputs-wrapper">
                            <label>Name</label>
                            <input type="text"/>
                        </div>

                        <div className="profile-inputs-wrapper">
                            <label>Email</label>
                            <input type="text"/>
                        </div>

                        <div className="profile-inputs-wrapper">
                        <label>Password</label>
                        <input className='password-input' type="password" value="*********" disabled/>
                        <button className='reset-password-btn'>Reset Password</button>
                        </div>
                    </div>
                </div>
            }          
        </div>
    </div>
  )
}
