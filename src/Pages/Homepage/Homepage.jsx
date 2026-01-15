import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Advantages from '../../Components/Advantages/Advantages'
import InfoTab from '../../Components/InfoTab/InfoTab'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <InfoTab />
        <About />
        <Services />
        <HowItWorks />
        <Advantages />
    </div>
  )
}

export default Homepage