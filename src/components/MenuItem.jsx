import React from 'react'
import Stars from './Stars'

function MenuItem({item, pos, top}) {
  return (
    <div className={`w-full py-10 px-[300px] flex flex-col items-${pos}`}>
        <div className={`w-[200px] h-[200px] flex flex-col items-center`} style={{ transform: `translateY(${top === 0 ? "0px": "-200px"})` }}>
          <img
            src={item.image}
            alt=""
            className="object-cover w-full h-full hover:scale-[1.1] duration-[0.4s]"
          />
          <h1 className="w-[150%] font-madimi text-center p-3 text-[25px]">{item.name}</h1>
          <Stars/>
        </div>
      </div>
  )
}

export default MenuItem