import React from 'react'
import { motion, scale } from 'motion/react'
const Card = ({text,style, image, containerRef}) => {

  return image && !text ? (
    <motion.img className='absolute w-15 cursor-grab' 
    src={image} 
    style={style} 
    whileHover={{scale:1.05}}
    drag
    dragConstraints = {containerRef}
    dragElastic={1}
    />
  ) : (
    <motion.div className='absolute px-1 ppy-4 text-xl text-center rounded-full ring ring-gray-400 font-extralight bg-storm w-[12rem] cursor-grab'
        style = {style}
        whileHover={{scale:1.05}}
        drag
        dragConstraints = {containerRef}
        dragElastic={1}
        >
        {text}
        
    </motion.div>
  )
}

export default Card