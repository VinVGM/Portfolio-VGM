import React from 'react'
import { useState } from 'react'

import { AnimatePresence, motion } from 'motion/react';


const CopyEmailBut = () => {
  const [copied, setCopied] = useState(false);
  const email = "vgmvineeth@gmail.com";

  const copyToCb = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
        setCopied(false);

    },2000)
  }
  
  return (
    <motion.button onClick={copyToCb} whileHover = {{ y: -5 }} whileTap={{scale : 1.05 }} className='bg-black rounded-full px-1 py-4 relative font-extralight w-[14rem] overflow-hidden cursor-pointer '>
        <AnimatePresence mode='wait'/>
            {copied?(<div className='pl-3 pr-3'>
            <motion.p className='flex items-center justify-center gap-2 '
                    key="copied"
                    initial={{ opacity:0, y:-10}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-10}}
                    transition={{duration:'0.1', ease:"easeInOut"}}
            >
            <img src='/images/assets/copy-done.svg' className='w-5'/>
            Copied 
            </motion.p></div>) : 
            (<motion.p className='flex items-center justify-center gap-2'
                        key ="copy"
                        initial={{ opacity:0, y :-10}}
                        animate={{opacity:1, y : 0}}
                        exit={{opacity:0, y : -10}}
                        transition={{duration:0.1, ease:"easeInOut"}}>
                        <img src="/images/assets/copy.svg" alt='copy-button' className='w-5'/>
                
                        Copy Email Address
            </motion.p>)}
        <AnimatePresence/>
    </motion.button>
  )
}

export default CopyEmailBut