import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
const List = () => {

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="check-in date">Check-in Date</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="Destination">Destination</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult">

          </div>
        </div>

      </div>
    </div>
  )
}

export default List