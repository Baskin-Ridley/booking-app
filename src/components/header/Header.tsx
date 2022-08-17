// @ts-nocheck
import React from 'react'
import {useState} from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
const Header = () => {

    const [openDate, setOpenDate] = useState(false)

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      

  return (
    <div className="header">
        <div className="headerContainer">
             <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
                </div>
            </div>
            <h1 className="headerTitle">
                This is the title give it something catchy later
            </h1>
            <p className="headerDesc">
                This is the description give it something catchy later
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder="Search stays" className="headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(state[0].startDate, "dd/MM/yyyy")} to ${format(state[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span>2 adults and 2 children 1 room</span>
                </div>
                <div className="headerSearchItem">
                   <button className="headerBtn">Search</button> 
                </div>
            </div>
        </div>
       
        
    </div>
  )
}

export default Header