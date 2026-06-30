import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
const ProjectDetails = ({title, description, subDescription, href, image, tags, closeModel}) => {
  const [showFullImage, setShowFullImage] = useState(false);
  return (
    
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        
        <motion.div className='relative max-w-4xl w-full mx-4 shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/50 flex flex-col md:flex-row max-h-[90vh]'
            initial ={{opacity:0, scale:0}}
            animate={{opacity:2, scale:1}}
            transition={{duration:0.5}}
            exit={{opacity:0, scale:0}}
        >
            <button onClick={closeModel} className='absolute p-3 rounded-2xl top-5 right-5 bg-midnight hover:bg-gray-500 z-10'>
            <img className='w-5 h-5 invert' src='/images/assets/close.png' loading="lazy"/>    
            </button>
            <div className='md:w-1/2 relative group'>
                <img src={image} alt={title} loading="lazy" className='w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none'/>
                <button
                    onClick={() => setShowFullImage(true)}
                    className='absolute top-3 right-3 p-2 rounded-lg bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                </button>
            </div>
            <div className='md:w-1/2 flex flex-col min-h-0'>
                <div className='flex-1 p-5 md:pr-14 md:pt-12 overflow-y-auto custom-scrollbar'>
                    <h5 className='font-bold text-4xl mb-5'>{title}</h5>
                    <p className=' mb-5 font-normal text-neutral-400'>{description}</p>
                    {subDescription.map((subDesc, index) => (
                    <p
                        key={index}
                        className="font-normal text-neutral-400"
                        dangerouslySetInnerHTML={{ __html: subDesc }}
                    />
                ))}
                </div>
                <div className='flex p-5 md:pr-14 justify-between items-end gap-4 border-t border-white/10'>
                    <div className='flex gap-5 flex-wrap'>
                    {tags.map((tag)=> (
                        <img 
                            key={tag.id}
                            src={tag.path}
                            alt={tag.name}
                            loading="lazy"
                            className='rounded-lg size-10 hover-animation '
                        />
                    ))}
                    </div>
                    <a href={href} className='flex items-center justify-center gap-2 hover-animation cursor-pointer'>View Project <img src='/images/assets/arrow-up.svg' loading="lazy"/></a>
                </div>
            </div>
        </motion.div>
        
        {showFullImage && (
            <div
                className='fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm'
                onClick={() => setShowFullImage(false)}
            >
                <button
                    onClick={() => setShowFullImage(false)}
                    className='absolute top-5 right-5 p-3 rounded-2xl bg-black/50 hover:bg-black/70 z-10'
                >
                    <img className='w-5 h-5 invert' src='/images/assets/close.png' loading="lazy"/>
                </button>
                <img
                    src={image}
                    alt={title}
                    className='max-w-[90vw] max-h-[90vh] object-contain rounded-lg'
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        )}

    </div>
    
  )
}

export default ProjectDetails
