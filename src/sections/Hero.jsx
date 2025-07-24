import React from 'react'
import HeroText from '../componenets/HeroText'
import { BackgroundGradientAnimation } from '../componenets/BackgroundGradientAnimation'
import { isMobile } from 'react-device-detect';

const Hero = () => {
  return (
    <section id='home' className='flex items-center justify-center min-h-screen overflow-hidden md:items-center md:justify-center  '>
      <HeroText />
      <div className='absolute inset-0'>
        {isMobile
          ? <div className="bg-gradient-to-br from-indigo-900 to-purple-900 w-full h-full" />
          : <BackgroundGradientAnimation />}
      </div>
    </section>
  )
}

export default Hero