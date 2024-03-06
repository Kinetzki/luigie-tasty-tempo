import React from "react";
import HighlightCard from "./HighlightCard";
import TitleComp from "./TitleComp";

function SnackHighlights(props) {
  return (
    <div className="w-[80%] flex items-center justify-center flex-col">
    <TitleComp text={"Popular Picks"}/>
      <div className="flex gap-10">
        {props.items.map((item, i) => {
          return <HighlightCard key={i} text={item.name} image={item.image} />;
        })}
      </div>
    </div>
  );
}

export default SnackHighlights;
