import React from "react";
import burgers from "../assets/burgers";
import fries from "../assets/fries";
import MenuItem from "../components/MenuItem";
import pasta from "../assets/pasta";
import desserts from "../assets/desserts";

function Menu() {
  return (
    <div className="relative w-full min-h-screen flex flex-col gap-2">
      <div className="absolute w-[50%] h-[98%] border-r-[2px] border-[#feaa00] top-[100px]" />
      <h1 className="font-madimi w-full text-center p-7 text-[35px]">
        Pick from our selection of goodness
      </h1>
      <h1 className="font-madimi w-full px-10 text-[30px]">Burgers</h1>
      {burgers.map((item, i) => {
        return (
          <MenuItem item={item} pos={i % 2 === 0 ? "start" : "end"} top={i} />
        );
      })}

      <h1 className="font-madimi w-full px-10 text-[30px]">Pastas</h1>
      {pasta.map((item, i) => {
        return (
          <MenuItem item={item} pos={i % 2 === 0 ? "start" : "end"} top={i} />
        );
      })}

      <h1 className="font-madimi w-full px-10 text-[30px]">Fries</h1>
      {fries.map((item, i) => {
        return (
          <MenuItem item={item} pos={i % 2 === 0 ? "start" : "end"} top={i} />
        );
      })}

      <h1 className="font-madimi w-full px-10 text-[30px]">Desserts</h1>
      {desserts.map((item, i) => {
        return (
          <MenuItem item={item} pos={i % 2 === 0 ? "start" : "end"} top={i} />
        );
      })}
    </div>
  );
}

export default Menu;
