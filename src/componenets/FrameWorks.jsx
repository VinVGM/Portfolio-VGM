import React from 'react'
import { OrbitingCircles } from './OrbitingCircles'

export function FrameWorks() {
  const skills = [
    "aws",
    "java",
    "python",
    "cplusplus",
    "vitejs",
    "react",
    "css3",
    "git",
    "github",
    "html5",
    "javascript",
    "microsoft",
    "tailwindcss",
    "visualstudiocode"
    


  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index) => (
          <Icon key={index} src={`/images/assets/logos/${skill}.svg`} />
          
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.map((skill,index) => (
          <Icon key={index} src={`/images/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src}) => (
  <img src={src} className='duration-200 rounded-sm hover:scale-110'/>
)