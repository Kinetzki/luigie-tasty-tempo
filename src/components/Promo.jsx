import React from 'react'
import burgers from '../assets/burgers'

function Promo({text}) {
  return (
    <div className='w-[300px] h-[300px] border-[#feaa00] border-[1px] rounded-lg p-3 flex flex-col items-center justify-evenly shadow-lg shadow-black hover:scale-[1.1] duration-[0.4s] mr-10'>
        <div className='w-full h-[200px]'>
            <img src={burgers[0].image} alt="" className='object-cover w-full h-full'/>
        </div>
        <h1 className='font-madimi font-semibold'>{text}</h1>
    </div>
  )
}

export default Promo