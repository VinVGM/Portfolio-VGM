import React, { useState } from 'react'
import { useSpring } from 'motion/react'
import { motion, useMotionValue } from 'motion/react'
import Project from '../componenets/Project'
import { myProjects } from '../constants'
import { isMobile } from 'react-device-detect'
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {damping:10, stiffness: 50});
  const springY = useSpring(y, {damping:10, stiffness: 50});
  const handleMouseMove = (e) => {   
    x.set(e.clientX + 20)
    y.set(e.clientY + 20)
  };

  const [preview, setPreview] = useState(null);
  return (<section onMouseMove={handleMouseMove} className='relative c-space section-spacing'>
    <h2 className='text-heading'> My projects</h2>
    <div className='bg-gradient-to-r from-transparent via-violet-700 to-transparent mt-12 h-[5px] w-full'>
    </div>
    {myProjects.map((project)=>(
      <Project key={project.id} {...project} setPreview={setPreview}/>))}
    {preview && !isMobile && <motion.img 
    style={{x:springX, y:springY}}
    src={preview}
    className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80'/>
    }
  </section>)
   
  
}

export default Projects