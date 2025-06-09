import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-wrap items-center  justify-between'>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 to to-transparent h-[10px] w-full'/>
        <div className='flex w-full justify-between p-3 bg-[#15022d]'>
        
            <div className='flex'>
                <p>Vineeth V</p>
            </div>
        
            <img className='w-5' src='/images/assets/logos/linkedin.svg'></img>
            
        </div>
            
    </section>
  )
}

export default Footer