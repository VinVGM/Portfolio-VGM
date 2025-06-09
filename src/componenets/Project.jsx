import React from 'react'
import { useState } from 'react';
import ProjectDetails from './ProjectDetails'
import { AnimatePresence, motion } from 'motion/react';
const Projects = ({title,description, subDescription,href, image, tags, setPreview }) => {
  
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'
         onMouseEnter={() => setPreview(image)}
         onMouseLeave={() => setPreview(null)}
    >
      <div>
        <p className='text-2xl'>{title}</p>
        <div className='flex flex-wrap gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
        </div>
      </div>
        <button onClick= {() => setIsHidden(true)}className='flex items-center gap-1 cursor-pointer hover-animation'>
            Read More
            <img src='/images/assets/arrow-right.svg' className='w-5'/>
        </button>
      
    </div>
    <div className='bg-gradient-to-r from-transparent via-violet-700 to-transparent mt-12 h-[5px] w-full'></div>
    <AnimatePresence>
    {isHidden && <ProjectDetails
      title={title}
      description={description}
      subDescription={subDescription}
      image={image}
      tags={tags}
      href={href}
      tags={tags}
      closeModel={() => setIsHidden(false)}
    />
    }
    </AnimatePresence>
    </>
  )
}

export default Projects