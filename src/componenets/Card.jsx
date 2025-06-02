import React, { useState } from 'react'
import { motion, scale } from 'motion/react'
const Card = ({text,style, image, containerRef}) => {
  const [ dragging, setIsDragging] = useState(false)
  return image && !text ? (
    <motion.img className='absolute w-16 cursor-grab' 
    src={image} 
    style={style}
    animate = {{y:[0,-10,0]}}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }} 
    whileHover={dragging ?  {scale:1.05} : {}}
    drag
    onDragStart={() => setIsDragging(true)}
    onDragEnd={()=>setIsDragging(false)}
    dragConstraints = {containerRef}
    dragElastic={1}
    />
  ) : (
    <motion.div className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-400 font-extralight bg-storm w-[12rem] cursor-grab'
        style = {style}
        whileHover={{scale:1.05}}
        animate = {{y:[0,-10,0]}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
        drag
        dragConstraints = {containerRef}
        dragElastic={1}
        >
        {text}
        
    </motion.div>
  )
}

export default Card