import React from "react";
import ListItem from "./ListItem";
import TitleComp from "./TitleComp";

function ItemList(props) {
  return (
    <div className="p-3 gap-5 flex flex-col w-[60%] mt-[20px] items-center justify-center">
      <TitleComp text={"Our main dishes"}/>
      {props.items.map((item) => {
        return (
          <ListItem
            title={item.name}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
