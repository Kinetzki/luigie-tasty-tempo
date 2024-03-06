import React from "react";

function ListItem(props) {
  return (
    <div className="flex items-start gap-5 bg-[#ffffff15] rounded-md overflow-hidden shadow-black shadow-lg">
      <div className="w-[200px] h-[150px]">
        <img src={props.image} alt="" className="object-cover w-full h-full" loading="lazy"/>
      </div>
      <div className="flex flex-col w-full gap-1 px-1">
        <h1 className="text-[#feaa00] font-madimi text-[30px]">
          {props.title}
        </h1>
        <p className="w-[60%] text-[12px]">{props.description}</p>
      </div>
    </div>
  );
}

export default ListItem;
