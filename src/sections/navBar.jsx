import React from 'react'
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
function Navigation(){
    return (
    <ul className="nav-ul">
        <li className='nav-li'>
            <a className='nav-link' href='#home'>Home</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href='#about'>About</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href='#work'>Work</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href='#contact'>Contact</a>
        </li>
        
    </ul>
    )
}
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <AnimatePresence mode='wait'>
    <motion.div className={`fixed  z-20 w-full ${isOpen?'h-full' : ''} backdrop-blur-lg bg-primary/40 flex flex-col `}
        
        animate={{height:isOpen ? "100vh " : "auto"}}
        transition={{duration : 0.5}}
    >
        <div className='mx-auto c-space max-w-7xl top-5'>
            <div className='flex items-center justify-between py-2 sm:py-2 '>
            
                <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                VGM
                </a>

                <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                    <img src= {isOpen? "/images/assets/close.png" : "/images/assets/menu.png"} className='w-6 h-6 filter invert' alt="toggle"/>
                </button>

                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>

            </div>            
        </div>
        <AnimatePresence mode='wait'>
        {isOpen && (
            <motion.div 
                className='absolute w-full left-0 h-full top-[5%] overflow-hidden text-center md:hidden'
                initial={{ opacity: 0, y:-25}}
                animate={{opacity: 1, y:0 }}
                exit={{opacity:0, y:-25}}
                style = {{ maxHeight: " 180vh"}}
                transition={{duration : 0.5}}
            >
            <nav className='pb-5 '>
                <Navigation/>
            </nav>
            </motion.div>

        )}
        </AnimatePresence>
    </motion.div>
    </AnimatePresence>
    
);
 
}

export default NavBar;
