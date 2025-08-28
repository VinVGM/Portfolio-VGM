import React from 'react'
import { motion } from 'motion/react'

const Resume = () => {
  return (
    <section id='resume' className='flex flex-col items-center justfiy-center mt-20 p-20 bg-[#460694] overflow-hidden'>
        <div className='flex flex-col items-center c-space justify-between gap-20'>
            <h2 className='text-heading text-center'>Download my Resume</h2>
            <div className='flex flex-col items-center justify-center'>
                <motion.a href='/images/assets/resume.pdf' target='_blank' rel='noopener noreferrer' className='btn font-extralight'
                whileHover={{y : -5}}
                whileTap={{scale:0.95}}
                >Download Here</motion.a>
            </div>
        </div>        
    </section>
  )
}

export default Resume