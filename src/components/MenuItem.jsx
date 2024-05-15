import React from 'react'
import Stars from './Stars'

function MenuItem({item}) {
  return (
    // <div className={`w-full py-10 px-[300px] flex flex-col items-${pos} mb-[40px] bg-slate-300`}>
        <div className={`w-[200px] h-[200px] flex flex-col items-center justify-center z-[2]`}>
          <img
            src={item.image}
            alt=""
            className="object-cover w-full h-full hover:scale-[1.1] duration-[0.4s] rounded-lg shadow-black shadow-lg"
          />
          <h1 className="w-[150%] font-madimi text-center p-3 text-[25px]">{item.name}</h1>
          <Stars/>
        </div>
      // {/* </div> */}
  )
}

export default MenuItem