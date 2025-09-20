import React, { useRef } from 'react'
import { IconCloud } from '../componenets/IconCloud'
import Card from '../componenets/Card';
import { Globe } from '../componenets/Globe';
import CopyEmailBut from '../componenets/CopyEmailBut';
import { FrameWorks } from '../componenets/FrameWorks'


const slugs = [
  
  "javascript",
  
  "java",
  "react",
  
  
  "html5",
  "css3",
  "nodedotjs",
  "express",
  
  "amazonaws",
  
 
  
  "vercel",
  
  "git",
  
  "github",
  
  "visualstudiocode",
  "androidstudio",
  
];
 
function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
 
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

const About = () => {
  const grid5container = useRef();
  const [showAchievements, setShowAchievements] = React.useState(false);
  
  return <section id='about' className='px-6 md:px-20 section-spacing'>
    <h2 className='pt-20 text-heading'> About me</h2>
    
    {/* Achievements button for smaller screens - positioned on the right */}
    <div className='block 2xl:hidden mt-8 mb-4 flex justify-end'>
      <button 
        onClick={() => setShowAchievements(!showAchievements)}
        className='bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-3 text-white transition-all duration-300 flex items-center gap-2'
      >
        <span>{showAchievements ? 'Hide' : 'Show'} Achievements</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${showAchievements ? 'rotate-180' : ''}`}
          fill='none' 
          stroke='currentColor' 
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>
    </div>
    
    {/* Two-column layout: Achievements left, rest of grids right */}
    <div className='grid grid-cols-1 gap-8 md:gap-20 mt-12 2xl:grid-cols-5 h-full'>
      

      {/* Right: Remaining cards in nested grid */}
      <div className='2xl:col-span-3 h-full relative'>
        {/* Achievements overlay for smaller screens */}
        {showAchievements && (
          <div className='absolute inset-0 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-6 overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-xl font-semibold text-white'>Achievements</h3>
              <button 
                onClick={() => setShowAchievements(false)}
                className='text-white/70 hover:text-white p-2'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            
            {/* Timeline container with center line - same structure as desktop */}
            <div className='relative mt-4'>
              {/* Center line */}
              <div className='absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white/20'></div>

              <div className='flex flex-col gap-6'>
                {[
                  { year: '2025', text: 'Solved over 70 problems on Leetcode' },
                  { year: '2025', text: 'Achieved 4th rank overall in my college department in the academic year 2024-2025' },
                  { year: '2024', text: 'Achieved 10th rank overall in my college department in the academic year 2023-2024' },
                  { year: '2023', text: 'Secured 2nd overall rank in school and 1st in Science Stream batch in AISSCE examination in the year 2023.' },
                ].map((item, idx) => (
                  <div key={idx} className='relative grid grid-cols-2 items-center'>
                    {/* Content card alternating sides */}
                    <div className={`pr-6 ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className={`${idx % 2 === 0 ? 'ml-0 mr-auto' : 'mr-0 ml-auto'} w-[90%]`}>
                        <div className='bg-white/5 border border-white/10 rounded-lg p-4 subtext overflow-hidden'>
                          {item.text}
                        </div>
                      </div>
                    </div>
                    {/* Center year badge */}
                    <div className={`relative h-0 h-full ${idx % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <span className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full text-xs bg-white/10 border border-white/20 shadow backdrop-blur-sm'>{item.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-6 md:auto-rows-[18rem] h-full'>
          <div className='flex items-end grid-default-color grid-1'>
            <img src='/images/assets/plane.png' loading="lazy" className='absolute scale-[4] -top-[25.1rem] left-14 md:scale-[3] 
             md:-top-20 brightness-50'></img>
            <div className='z-10'>
                <p className='headtext'> Hi I am Vineeth V</p>
                <p className="subtext">
                    Upcoming B.Tech Graduate in Electronics and Computer Engineering. A technology systems enthusiast who likes fiddling around and building various tech systems that contribute to the community.
                </p>
            </div>
        </div>
        <div className='flex flex-col grid-special-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Tech Stack I use</p>
            <p className='subtext text- text-neutral-600'>
              I am very proficient in C++, Java and Python. Have done relevant courses in Web Application, DSA, Cloud , GenAI and ML
            </p>
          </div>
          <div className='absolute w-full h-full left-[50%] items-center scale-125'>
            
          <figure>
            <FrameWorks />
          </figure>

          </div>
        </div>














        <div className='flex items-start grid-special2-color grid-4'>
           <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>
                  Interested in Collaborating on a project?
                </p>
                
                <CopyEmailBut />

           </div>
        </div>
        <div className='grid-black-color grid-5'>
          <div className='z-10 w-[50%]'>
              
              <p className='headtext'>Time Zone</p>
              <p className='subtext'>I am based in Chennai and I am open to work anywhere within India</p>
              
              <figure className='absolute left-[30%] top-[10%]'>
                <Globe />
              </figure>
                
              
              
          </div>
        </div>
        </div>




        
      </div>

      {/* Left: Achievements - Hidden on smaller screens, shown as overlay */}
      <div className='hidden 2xl:block md:col-span-2 h-full'>
        <div className='grid-default-color h-full relative'>
          <div className='z-10'>
            <p className='headtext'>Achievements</p>
          </div>
          {/* Timeline container */}
          <div className='relative mt-4 md:mt-6 h-[calc(100%-4rem)]'>
            {/* Center line on desktop */}
            <div className='hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white/20'></div>

            <div className='flex flex-col gap-6 md:gap-10 h-full'>
              {[
                { year: '2025', text: 'Solved over 70 problems on Leetcode' },
                { year: '2025', text: 'Achieved 4th rank overall in my college department in the academic year 2024-2025' },
                { year: '2024', text: 'Achieved 10th rank overall in my college department in the academic year 2023-2024' },
                { year: '2023', text: 'Secured 2nd overall rank in school and 1st in Science Stream batch in AISSCE examination in the year 2023.' },
                
              ].map((item, idx) => (
                <div key={idx} className='relative md:grid md:grid-cols-2 md:items-center'>
                  {/* Content card alternating sides on desktop */}
                  <div className={`md:pr-10 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`md:${idx % 2 === 0 ? 'ml-0 mr-auto' : 'mr-0 ml-auto'} w-full md:w-[90%]`}>
                      {/* Year chip on mobile */}
                      <div className='md:hidden mb-2 inline-flex items-center gap-2'>
                        <span className='px-2 py-0.5 rounded-full text-xs bg-white/10 border border-white/15'>{item.year}</span>
                      </div>
                      <div className='bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 subtext overflow-hidden'>
                        {item.text}
                      </div>
                    </div>
                  </div>
                  {/* Center year badge on desktop */}
                  <div className={`relative h-0 md:h-full ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <span className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full text-xs bg-white/10 border border-white/20 shadow backdrop-blur-sm`}>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About