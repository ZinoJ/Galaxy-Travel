import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingComponent from '../components/Training'

const Training = () => {
  return (
   <div>
     <Navbar />
     <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
     <TrainingComponent />
     <Footer />

   </div>
    
  )
}

export default Training