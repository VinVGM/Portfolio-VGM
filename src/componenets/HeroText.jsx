import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, y:-50},
    visible:{ opacity: 1, y: 0 }
  };
  return (
    <div className='z-10 scale-110 md:scale-150 text-center ms:text-left rounded-3xl bg-clip-text'>
    
        <div className='flex-col hidden md:flex c-space text-left'>
            
            
            <motion.h1 className='text-4xl font-medium'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    >Hi I am Vineeth</motion.h1>

            <div className='flex flex-col items-start'>
                <motion.p className='text-5xl text-neutral-300'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >A All rounded developer specializing in </motion.p>
                <motion.div className='text-8xl font-black'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >
                    <FlipWords words={["Cloud", "ML", "Electronic", "Web"]}/>
                </motion.div>
                <motion.p className='text-4xl'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >Solutions</motion.p>
            </div>


        </div>


        <div className='flex flex-col space-y-6 md:hidden'>
            <motion.h1 className='text-4xl font-medium'
                    initial={{ opacity: 0, y: -100}}
                    animate={{ opacity:1, y: 0}}
                    transition={{ duration: 0.5,  }}
                    >Hi I am Vineeth</motion.h1>

            <div className='flex flex-col '>
                <motion.p className='text-5xl font-black text-neutral-300'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >A all round developer specializing in</motion.p>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >
                <FlipWords words={["Cloud","ML", "Web"]}
                            className="text-7xl"/>
                </motion.div>
                <motion.p className='text-4xl font-medium'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    >Solutions</motion.p>
            </div>
            

        </div>
    </div>
    )
}

export default HeroText