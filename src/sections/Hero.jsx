import React from 'react'
import HeroText from '../componenets/HeroText'
import { BackgroundGradientAnimation } from '../componenets/BackgroundGradientAnimation'



const Hero = () => {
  return (
    
    
    <section id='home' className='flex items-center justify-center min-h-screen overflow-hidden md:items-center md:justify-center  '>
    <HeroText />
    <div className='absolute inset-0'>
    <BackgroundGradientAnimation></BackgroundGradientAnimation>
    </div>
    </section>
   
    
  )
}

export default Hero