import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Details from '../components/Details'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text= 'Contact Zino TRVL'/>
        <Details />
        <Footer />
    </div>
  )
}

export default Contact