import React from "react";
import Promo from "../components/Promo";

function Promos() {
  return (
    <div className="w-full min-h-screen p-10 flex flex-col gap-10">
      
      
      <h1 className="font-madimi font-bold w-full text-center text-[35px]">Avail Our Promos!</h1>
      <p className="border-[#feaa00] border-[1px] rounded-lg p-5 bg-[#342628] font-madimi text-[17px]">
      Don't miss out on our exclusive promotions, offering irresistible deals on our delicious burgers, pastas, fries, desserts, and drinks. Enjoy more of your favorites for less!
        </p>
      <div className="flex-wrap flex gap-[50px] justify-center">
        <Promo text="BUY 2 TAKE 1 FREE" />
        <Promo text="EAT ALL YOU CAN" />
        <Promo text="BUDGET MEAL 1" />
        <Promo text="BUDGET MEAL 2" />
        <Promo text="BUDGET MEAL 3" />
        <Promo text="BUDGET MEAL 1" />
        <Promo text="BUDGET MEAL 1" />
      </div>
    </div>
  );
}

export default Promos;
