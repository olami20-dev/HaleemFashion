import React from 'react'
import '../Home/Home.css'

import Background from '../../Components/Background/Background'
import Logo from '../../Components/Logo/Logo'
import BestSellers from '../../Components/BestSellers/BestSellers'
import Footer from '../../Components/Footer'


const Home = () => {
 
  return (
   <div>
    <Background />
    <Logo />
    <BestSellers />   
    <Footer />
   </div>
  )
}

export default Home
