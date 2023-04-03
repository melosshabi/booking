import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/queryResults.css'

export default function QueryResults() {

    const location = useLocation()
    const properties = location.state.docs
    return (
    <div className='query-results-wrapper'>
        <h2>Properties in {properties[0].propertyDetails.address}</h2>
        <div className="query-properties-wrapper">
            {properties.map((property, index) => {
                
                return (
                    <div className="query-property" key={index}>
                        <div className="query-property-img-wrapper">
                            <img src={property.propertyDetails.pictures[0]} />
                        </div>
                        <div className="query-property-details">
                            <Link className="property-link" to="/propertyDetails" state={{property:property}}>{property.propertyDetails.propertyName}</Link>
                            <span>{property.propertyDetails.address + " " + property.propertyDetails.address2}</span>
                        </div>
                    </div>

                )
            })}
        </div>
    </div>
  )
}
