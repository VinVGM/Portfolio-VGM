import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
const Alert = ({type, text}) => {

  const alertVarients = {
    hidden: {opacity:0 ,y:50 , scale:0.8},
    visible: {opacity: 1, y:0, scale:1},
    exit: {opacity: 0, y:-50, scale:0.8}
  }
  return (
   
    <motion.div 
        className='fixed z-50 flex items-center justify-center bottom-5 inset-x-0 '
        initial="hidden"
        animate= "visible"
        exit="exit"
        variants={alertVarients}
        transition={{duration:0.3, ease:"easeInOut"}}

    >
        <div className={`flex justify-between gap-2 p-5 rounded-md text-lg leading-none ${type === 'danger' ? "bg-red-500" : "bg-green-500"}`}>
            <p className={`flex  ${type === 'danger' ? "bg-red-500" : "bg-green-500"} `}>
                {type === "danger" ? "Failed:" : "Success:"}
            </p>
            <p className=' text-left'>{text}</p>
        </div>
    </motion.div>
    
    
  )
}

export default Alert