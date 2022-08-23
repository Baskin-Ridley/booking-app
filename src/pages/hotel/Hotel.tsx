import "./hotel.css"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {
  return (
    <>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">King's Cross Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Kings Cross Road, London</span>
          </div>
          <span className="hotelDistance">Excellent Location, city centre </span>
          <span className="hotelPriceHighLight">Book a stay over $120 at this property and get a free taxi</span>
          <div className="hotelImages">
            {/* note these images will eventually be fetched from the backend*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotel