import React from 'react'
import { useState } from 'react';
import ProjectDetails from './ProjectDetails'
import { AnimatePresence, motion } from 'motion/react';

const Project = ({title, description, subDescription, href, image, tags, setPreview, index}) => {
  const [isHidden, setIsHidden] = useState(false);
  // Alternate layout: even index = image left, odd index = image right
  const isReversed = index % 2 === 1;

  return (
    <div className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}>
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="rounded-lg shadow-lg w-full max-w-xs h-64 object-cover mx-auto"
          onMouseEnter={() => setPreview(image)}
          onMouseLeave={() => setPreview(null)}
        />
      </div>
      {/* Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
        <div>
          <p className='text-2xl font-bold'>{title}</p>
          <div className='flex flex-wrap gap-3 mt-2 text-sand'>
            {tags.map((tag) => (
              <span key={tag.id} className="bg-purple-700/30 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                {tag.path && <img src={tag.path} alt={tag.name} loading="lazy" className="w-4 h-4 inline mr-1" />} {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button onClick={() => setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation mt-6 text-sm text-blue-400'>
          Read More
          <img src='/images/assets/arrow-right.svg' loading="lazy" className='w-5'/>
        </button>
        <AnimatePresence>
          {isHidden && <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModel={() => setIsHidden(false)}
          />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Project