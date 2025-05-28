import React from 'react'
import { IconCloud } from '../componenets/IconCloud'
import Card from '../componenets/Card';


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
  return <section className='c-space section-spacing'>
    <h2 className='text-heading'> About me</h2>
    <div className='grid grid-cols-1 gap-2 mt-12 md:grid-cols-6 md:auto-rows-[18rem]'>
        <div className='flex items-end grid-default-color grid-1'>
            <img src='./src/assets/plane.png' className='absolute scale-[1.2] -top-[25.1rem] left-14 md:scale-[1.5] md:right-[1.5rem] md:top-6 brightness-50'></img>
            <div className='z-10'>
                <p className='headtext'> Hi I am Vineeth V</p>
                <p className="subtext">
                    Upcoming B.Tech Graduate in Electronics and Computer Engineering. A technology systems enthusiast who likes fiddling around and building various tech systems that contribute to the community.
                </p>
            </div>
        </div>
        <div className='flex items-start grid-special-color grid-2'>
           <div className='felx items-center justify-center'>
            
                

                <div className='flex z-9 absolute inset-0'>
                    <IconCloudDemo/>
                </div>
                <p className='flex text-2xl z-10'>
                    Tech Stack
                </p>
                

            
            </div> 
        </div>
        <div className='flex items-end grid-black-color grid-3'></div>
        <div className='flex items-end grid-special-color grid-4'></div>
        <div className='flex items-end grid-default-color grid-5'>
            <div className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>My Tools</p>
                <Card text="VS Code" style = {{rotate: "75deg", top}}/>
                <Card text="Cursor"/>
                <Card text="Postman"/>
                <Card text=""/>
                <Card text="LMAO"/>
            </div>
        </div>
    </div>
  </section>
}

export default About