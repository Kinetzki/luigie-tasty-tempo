import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoaderCard({children, title}) {
  const navigate = useNavigate();
  return (
    <div className='cursor-pointer border border-[#feaa00] w-[90px] h-[80px] rounded-lg flex flex-col items-center justify-center hover:bg-[#feaa00] shadow-lg bg-transparent' onClick={() => {navigate("/menu")}}>{children}{title}</div>
  )
}

export default LoaderCard