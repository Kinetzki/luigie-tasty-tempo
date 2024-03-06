import React from 'react'

function LoaderCard({children, title}) {
  return (
    <div className='cursor-pointer border border-[#feaa00] w-[90px] h-[80px] rounded-lg flex flex-col items-center justify-center hover:bg-[#feaa00] shadow-lg bg-transparent'>{children}{title}</div>
  )
}

export default LoaderCard