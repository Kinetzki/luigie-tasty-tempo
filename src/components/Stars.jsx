import React from 'react'
import star from "../assets/icons/star.svg";

function Stars() {
  return (
    <div className='w-full flex gap-2 justify-center translate-y-[-10px]'>
        <img src={star} alt="" className='w-[30px]'/>
        <img src={star} alt="" className='w-[30px]'/>
        <img src={star} alt="" className='w-[30px]'/>
        <img src={star} alt="" className='w-[30px]'/>
        <img src={star} alt="" className='w-[30px]'/>
    </div>
  )
}

export default Stars