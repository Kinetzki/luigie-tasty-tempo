import React from "react";
import Promo from "../components/Promo";

function Promos() {
  return (
    <div className="w-full min-h-screen p-10 flex flex-col gap-10">
      <h1 className="font-madimi font-bold w-full text-center text-[35px]">Avail Our Promos!</h1>
      <div className="flex-wrap flex gap-5">
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
