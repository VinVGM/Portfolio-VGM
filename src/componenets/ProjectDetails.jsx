import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
const ProjectDetails = ({title, description, subDescription, href, image, tags, closeModel}) => {
  return (
    
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        
        <motion.div className='relative max-w-2xl  shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/50'
            initial ={{opacity:0, scale:0}}
            animate={{opacity:2, scale:1}}
            transition={{duration:0.5}}
            exit={{opacity:0, scale:0}}
        >
            <button onClick={closeModel} className='absolute p-2 rounded-2xl p-3 top-5 right-5 bg-midnight hover:bg-gray-500'>
            <img className='w-5 h-5 invert' src='/images/assets/close.png' loading="lazy"/>    
            </button>
            <img src={image} alt={title} loading="lazy" className='w-full h-auto object-cover rounded-t-2xl'/>
            <div className='p-5'>
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
            <div className='flex ml-5 mb-5 mr-5 justify-between'>
                <div className='flex gap-5'>
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
                <div className=''>
                    <a href={href} className='flex items-center justify-center gap-2 hover-animation cursor-pointer'>View Project <img src='/images/assets/arrow-up.svg' loading="lazy"/></a>
                </div>
            </div>
        </motion.div>
        

    </div>
    
  )
}

export default ProjectDetails