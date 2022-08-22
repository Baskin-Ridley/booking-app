//@ts-nocheck
import {useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
const List = () => {

  const location = useLocation()
  console.log(location)
  const [destination,setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

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
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="check-in date">Check-in Date</label>
              <span>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                />
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