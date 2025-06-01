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
  return <section className='c-space section-spacing'>
    <h2 className='text-heading'> About me</h2>
    <div className='grid grid-cols-1 gap-2 mt-12 md:grid-cols-6 md:auto-rows-[18rem]'>
        <div className='flex items-end grid-default-color grid-1'>
            <img src='./src/assets/plane.png' className='absolute scale-[2] -top-[25.1rem] left-14 md:scale-[3] 
             md:-top-20 brightness-50'></img>
            <div className='z-10'>
                <p className='headtext'> Hi I am Vineeth V</p>
                <p className="subtext">
                    Upcoming B.Tech Graduate in Electronics and Computer Engineering. A technology systems enthusiast who likes fiddling around and building various tech systems that contribute to the community.
                </p>
            </div>
        </div>
        <div className='flex items-end grid-default-color grid-2' >
            <div className='flex items-center justify-center w-full h-full' ref={grid5container}>
                <p className='flex items-end text-5xl text-gray-500'>My Tools</p>
                <Card text="Cloud Ops" style = {{rotate: "20deg", top: "65%", left: "45%"}} containerRef={grid5container}/>
                <Card text="Gen AI" style = {{rotate: "45deg", top: "30%", left: "50%"}}  containerRef={grid5container}/>
                <Card text="OOPS" style = {{rotate: "-45deg", top: "60%", left: "70%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/cplusplus.svg" style = {{rotate: "-60deg", top: "20%", left: "42%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/python.webp" style = {{rotate: "-30deg", top: "60%", left: "10%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/aws.png" style = {{rotate: "-40deg", top: "20%", left: "70%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/java.png" style = {{rotate: "-40deg", top: "60%", left: "35%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/logos/react.svg" style = {{rotate: "-40deg", top: "20%", left: "5%"}}  containerRef={grid5container}/>
                <Card image="./src/assets/logos/microsoft.svg" style = {{rotate: "-40deg", top: "30%", left: "20%"}}  containerRef={grid5container}/>
            </div>
        </div>
        <div className='flex flex-col grid-special-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Tech Stack I use</p>
            <p className='subtext text-neutral-600'>
              I am very proficient in C++, Java and Python. I am well versed in the knowledge of effective usage of data structures and algorithms. I am also exprienced in cloud technologies like Amazon Web Services 
            </p>
          </div>
          <div className='absolute w-full h-full left-[50%] items-center scale-125'>
            
          <figure>
            <FrameWorks />
          </figure>

          </div>
        </div>














        <div className='flex items-start grid-special-color grid-4'>
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
              <p className='subtext'>I am based in Chennai and I open to work anywhere within India</p>
              
              <figure className='absolute left-[30%] top-[10%]'>
                <Globe />
              </figure>
                
              
              
          </div>
        </div>
        
        
    </div>
  </section>
}

export default About