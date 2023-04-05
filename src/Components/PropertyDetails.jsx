import React, {useRef, useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import {query, doc, updateDoc, getDocs, collection, where, addDoc} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import user from '../images/user.png'
import '../styles/propertyDetails.css'

export default function PropertyDetails() {
  
  const location = useLocation()
  const property = location.state.property
  const pictures = useRef([])
  const picturesObj = property.propertyDetails.pictures
  const userObj = useRef()

  for(let i = 0; i < Object.keys(picturesObj).length; i++){
      pictures.current.push(picturesObj[i])
  }

  // Funksioni per me kqyr a osht e rujtme prona e selektume
  auth.onAuthStateChanged(async () => {
    if(auth.currentUser === null){
      document.querySelector('.review-input').disabled = true;
      const postReviewBtn = document.querySelector('.post-review-btn')
      postReviewBtn.disabled = true;
      postReviewBtn.classList.remove('post-review-btn')
      postReviewBtn.classList.add('disabled-review-btn')
    }

    const usersCollection = collection(db, 'users')
    const userQuery = query(usersCollection, where('id', '==', auth.currentUser.uid))
    const querySnapshot = await getDocs(userQuery)

    let tempVar
    querySnapshot.forEach(doc => tempVar = doc.data())
    userObj.current = tempVar;
    const usersSavedPropertiesLength = Object.keys(userObj.current.savedProperties).length

    const saveBtn = document.querySelector('.save-btn')
    const unsaveBtn = document.querySelector('.unsave-btn')

    for(let i = 0; i < usersSavedPropertiesLength; i++){

      if(userObj.current.savedProperties[`property${i}`].propertyDocId === property.docId){
        saveBtn.style.display = 'none';
        unsaveBtn.style.display = "block";
      }else continue
    }
  })
  
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function fetchReviews(){
      const reviewsCollection = collection(db, 'reviews')
      const reviewsQuery = query(reviewsCollection, where('reviewedPropertyId', '==', property.docId))
      let reviews = []
      const reviewsSnapshot = await getDocs(reviewsQuery)
      reviewsSnapshot.forEach(review => reviews.push({...review.data(), reviewDocId:review.id}))   
      setReviews(reviews)
      }
    
    fetchReviews()
    return () => fetchReviews()
  }, [])
  // Variablat per funksion
  const activeIndex = useRef(0)
  const actions = {
    next:'NEXT',
    previous:'PREVIOUS'
  }
  // Funksioni per mi ndru fotot
  function switchImage(action){
    const images = document.getElementsByClassName('prop-img')
    for(let i = 0; i < images.length; i++){
      images[i].classList.remove('active-img')
    }
    if(action === actions.next){
      activeIndex.current = activeIndex.current + 1
      if(activeIndex.current === images.length){
        activeIndex.current = 0
      }
    }else if(action === actions.previous){
      if(activeIndex.current === 0){
        activeIndex.current = images.length - 1
      }else{
        activeIndex.current = activeIndex.current - 1
      }
    }
    
     images[activeIndex.current].classList.add('active-img')
  }
  
  //Funksioni per me rujt pronen   
  async function saveProperty(propertyId, propertyType){
    const usersCollection = collection(db, 'users')
    const userQuery = query(usersCollection, where("id", "==", `${auth.currentUser.uid}`))

    const userSnapshot = await getDocs(userQuery)
    let userDocument = {}
    userSnapshot.forEach(doc => userDocument = ({...doc.data(), userDocId:doc.id}))
    
    const savedPropertiesLength = Object.keys(userDocument.savedProperties).length
    userDocument.savedProperties[`property${savedPropertiesLength}`] = {
      propertyDocId: propertyId,
      propertyType:propertyType.toLowerCase()
    }
    
    const userDocRef = doc(db, 'users', userDocument.userDocId)
    delete userDocument.userDocId
    
    await updateDoc(userDocRef, userDocument)
    .then(() => window.location.reload())
  }

  // Funksioni per me bo unsave pronen
  async function unSaveProperty(propertyId){

    const usersCollection = collection(db, 'users')
    const userQuery = query(usersCollection, where('id', '==', auth.currentUser.uid))
    const userSnapshot = await getDocs(userQuery)

    let userDocument = {}
    userSnapshot.forEach(doc => userDocument = ({...doc.data(), userDocId:doc.id}))

    let savedPropertiesLength = Object.keys(userDocument.savedProperties).length

    for(let i = 0; i < savedPropertiesLength; i++){

        if(userDocument.savedProperties[`property${i}`].propertyDocId === propertyId){
          if(userDocument.savedProperties[`property${i}`] === userDocument.savedProperties[`property${savedPropertiesLength - 1}`]){
            delete userDocument.savedProperties[`property${i}`]
          }else{
            let newValueForDeletedIndex = userDocument.savedProperties[`property${savedPropertiesLength - 1}`]
            delete userDocument.savedProperties[`property${i}`]
            
            console.log(newValueForDeletedIndex)
            delete userDocument.savedProperties[`property${savedPropertiesLength - 1}`]
            userDocument.savedProperties[`property${i}`] = newValueForDeletedIndex

            savedPropertiesLength = Object.keys(userDocument.savedProperties).length
          }
        }
    }
    
    const userDocRef = doc(db, 'users', userDocument.userDocId)
    delete userDocument.userDocId
    await updateDoc(userDocRef, userDocument)
    .then(() => window.location.reload())
  }

  const [review, setReview] = useState('')

  async function postReview(targetBtn){
    targetBtn.disabled = true
    targetBtn.classList.remove('post-review-btn')
    targetBtn.classList.add('disabled-review-btn')
    targetBtn.innerText = "Posting Review..."

    const reviewsCollection = collection(db, 'reviews')
    await addDoc(reviewsCollection, {
      reviewerId:auth.currentUser.uid,
      reviewerName:auth.currentUser.displayName,
      review:review,
      reviewedPropertyId:property.docId,
      reviewedPropertyType:property.propertyDetails.propertyType,
    }).then(() => window.location.reload())
  }

  return (
    <>
    <div className='property-details-wrapper'>
        <h2>{property.propertyDetails.propertyName}</h2>
        <span className="address-span">{property.propertyDetails.country + ", " + property.propertyDetails.address + ", " + property.propertyDetails.address2}</span>
        <h3 className="landlord">{property.landLordName}</h3>
        <div className="property-details-images-wrapper">
            <button className='prev-arrow' onClick={() => switchImage(actions.previous)}>&#x2039;</button>
            {pictures.current.map((picture, index) =>{
              if(index === 0){
                return (
                  <img src={picture} className="prop-img active-img" key={index}/>
                )
              }else{
                return (
                  <img src={picture} className="prop-img" key={index}/>
                )
              }
              
            })}
            <button className='next-arrow' onClick={() => switchImage(actions.next)}>&#x203A;</button>
        
            <div className="property-details-btns-wrapper">
                <Link className="reserve-btn" to="/reserveForm" state={{...property}}>Reserve Now</Link>
                <button className="save-btn" onClick={() => saveProperty(property.docId, property.propertyDetails.propertyType)}>Save property</button>
                <button className="unsave-btn" onClick={() => unSaveProperty(property.docId)}>Unsave Property</button>
            </div>
        </div>
    </div>

    <div className="reviews-wrapper">
      <h2>Reviews</h2>

      <div className="review-input-wrapper">
        <textarea className="review-input" placeholder='What was your experience with this place?' value={review} onChange={e => setReview(e.target.value)}></textarea>
        <button className="post-review-btn" onClick={e => postReview(e.target)}>Post Review</button>
      </div>
          
        <div className="reviews">
            {reviews.map((review, index) =>{
              return (
                <div className="review" key={index}>
                  <div className="review-img-wrapper">
                    <img src={user}/>
                  </div>
                  <div className="reviewer-name-wrapper">
                        <p style={{fontSize:'1.1em',fontWeight:'600px', marginRight:'15px'}}>{review.reviewerName}:</p>
                      </div>
                    <div className="review-text">
                      
                    <p>{review.review}</p>
                    </div>
                </div>
              )
            })}
        </div>
    </div>
    </>
  )
}
