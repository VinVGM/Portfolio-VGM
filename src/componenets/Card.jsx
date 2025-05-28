import React from 'react'

const Card = ({text,style}) => {
  return (
    <div className='absolute px-1 ppy-4 text-xl text-center rounded-full ring ring-gray-400 font-extralight bg-storm w-[12rem] cursor-grab'
        style = {style}>
        {text}
    </div>
  )
}

export default Card