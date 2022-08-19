import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type={undefined}/>
      <div className="homeContainer">
        <Featured/> 
      </div>
    </div>
  )
}

export default Home