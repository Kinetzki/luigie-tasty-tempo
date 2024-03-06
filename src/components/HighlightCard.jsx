import React from "react";

function HighlightCard({ text, image }) {
  return (
    <div className="w-[200px] h-[300px] bg-[#f7f4ef] p-2 rounded-lg shadow-gray-950/80 shadow-lg flex flex-col items-center py-10 gap-4 box-border">
      <div className="flex flex-col items-center justify-center w-full h-full gap-5 overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="object-cover w-full h-[80%] hover:scale-125 hover:translate-y-[-22px] transition duration-[0.2s]"
        />
        <h1 className="text-[#342628] font-madimi">{text}</h1>
      </div>
    </div>
  );
}

export default HighlightCard;
