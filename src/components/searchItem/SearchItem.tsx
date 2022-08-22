import React from 'react'
import "./searchItem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        alt="" 
        className="siImg" />
        
        <div className="siDesc">
            <h1 className="siTitle">Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">Studio apartment</span>
            <span className="siFeatures">Studio | 1 bathroom </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today.
            </span>
        </div>
        <div className="siDetails">
            details
        </div>
    </div>
  )
}

export default SearchItem