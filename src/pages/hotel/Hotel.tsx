import "./hotel.css"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"


const Hotel = () => {

  const photos = [
    {
      src:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
    },
    {
      src:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
    },
    {
      src:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
    },
  ]


  return (
    <>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now</button>
          <h1 className="hotelTitle">King's Cross Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Kings Cross Road, London</span>
          </div>
          <span className="hotelDistance">Excellent Location, city centre </span>
          <span className="hotelPriceHighLight">Book a stay over $120 at this property and get a free taxi</span>
          <div className="hotelImages">
            {/* note these images will eventually be fetched from the backend*/}
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="inside of hotel" className="HotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">

            </div>  
            <h1 className="HotelTitle">Stay in the heart of London</h1>
            <p className="hotelDesc"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam eu purus placerat, in porta risus ornare. In hac habitasse platea dictumst. Quisque auctor sollicitudin condimentum. 
            </p>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weeks stay
              </h1>
              <span>Located in the heart of London</span>
              <h2>
                <b>£870</b>(7 nights)
              </h2>
              <button>Reserve or book now!</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotel