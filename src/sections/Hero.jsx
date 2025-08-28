import React from 'react'
import HeroText from '../componenets/HeroText'
import { BackgroundGradientAnimation } from '../componenets/BackgroundGradientAnimation'
import { isMobile } from 'react-device-detect';

const Hero = () => {
  return (
    <section id='home' className='flex item-center relative min-h-screen overflow-hidden'>
      {/* Foreground content */}
      <div className='relative z-10 w-full c-space grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20'>
        {/* Left: Text */}
        <div className='order-2 md:order-1'>
          <HeroText />
        </div>
        {/* Right: Circular Photo */}
        <div className='order-1 md:order-2 flex items-center justify-center'>
          <img
            src='/images/dp.png'
            alt='Profile'
            loading='eager'
            className='w-72 h-72 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/20 shadow-xl'
          />
        </div>
      </div>
      {/* Background layer */}
      <div className='absolute inset-0 z-0'>
        {isMobile
          ? <div className="bg-gradient-to-br from-indigo-900 to-purple-900 w-full h-full" />
          : <BackgroundGradientAnimation />}
      </div>
    </section>
  )
}

export default Hero