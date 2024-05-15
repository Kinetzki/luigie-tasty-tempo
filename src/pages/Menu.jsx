import React from "react";
import burgers from "../assets/burgers";
import fries from "../assets/fries";
import MenuItem from "../components/MenuItem";
import pasta from "../assets/pasta";
import desserts from "../assets/desserts";
import drinks from "../assets/drinks";

function Menu() {

  return (
    <div className="relative w-full min-h-screen flex flex-col gap-2 px-10">
      <div className="absolute w-[50%] h-[95%] border-r-[2px] border-[#feaa00] top-[100px]" />
      <h1 className="font-madimi w-full text-center p-7 text-[35px]">
        Pick from our selection of goodness
      </h1>
      <div className="mb-[60px] flex flex-col z-[2]">
        <h1 className="font-madimi w-full text-[30px]">
          Burgers
        </h1>
        <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
          Discover the ultimate burger experience with our mouth-watering menu,
          where each bite is a symphony of bold flavors and fresh ingredients.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-[120px] justify-center w-full">
        {burgers.map((item, i) => {
          return <MenuItem item={item} />;
        })}
      </div>

      <br />
      <br />

      <div className="mt-[100px] mb-[60px] flex flex-col z-[2]">
        <h1 className="font-madimi w-full text-[30px]">
          Pasta
        </h1>
        <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
        Indulge in our exquisite pasta creations, crafted with love and the finest ingredients. Each dish offers a taste that transports you straight to Italy.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[120px] justify-center">
        {pasta.map((item, i) => {
          return <MenuItem item={item} />;
        })}
      </div>

      <br />
      <br />

      <div className="mt-[100px] mb-[60px] flex flex-col z-[2]">
        <h1 className="font-madimi w-full text-[30px]">
          Fries
        </h1>
        <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
        Treat yourself to our irresistible fries, golden and crispy to perfection. Each bite is a delightful crunch that keeps you coming back for more.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[120px] justify-center">
        {fries.map((item, i) => {
          return <MenuItem item={item} />;
        })}
      </div>

      <br />
      <br />

      <div className="mt-[100px] mb-[60px] flex flex-col z-[2]">
        <h1 className="font-madimi w-full text-[30px]">
          Desserts
        </h1>
        <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
        Satisfy your sweet cravings with our decadent desserts, each crafted to perfection. From rich, velvety cakes to delightful pastries, every bite is a taste of bliss.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[120px] justify-center">
        {desserts.map((item, i) => {
          return <MenuItem item={item} />;
        })}
      </div>

      <br />
      <br />

      <div className="mt-[100px] mb-[60px] flex flex-col z-[2]">
        <h1 className="font-madimi w-full text-[30px]">
          Drinks
        </h1>
        <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
        Quench your thirst with our refreshing drinks and expertly crafted cocktails. From classic favorites to innovative blends, there's a perfect sip for every occasion.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[120px] justify-center">
        {drinks.map((item, i) => {
          return <MenuItem item={item} />;
        })}
      </div>

      <br />
      <br />
    </div>
  );
}

export default Menu;
