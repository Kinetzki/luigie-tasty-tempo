import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

function Navbar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleClick = (li) => {
    console.log(li);
    navigate(li);
    setLocation(li);
  };

  return (
    <div className="bg-[#342628] flex justify-between w-full px-[50px] shadow-lg h-[60px] items-center">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => {
          handleClick("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="40"
          height="40"
          fill="#feaa00"
        >
          <path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z" />
        </svg>
        <h1>Luigie's Tasty Tempo</h1>
      </div>

      <ul className="flex gap-1 items-center select-none">
        <NavLink
          handleClick={handleClick}
          link={"Menu"}
          route={"/menu"}
          location={location}
        />
        <NavLink
          handleClick={handleClick}
          link={"Categories"}
          route={"/category"}
          location={location}
        />
        <NavLink
          handleClick={handleClick}
          link={"Promos"}
          route={"/promotions"}
          location={location}
        />
        <NavLink
          handleClick={handleClick}
          link={"Visit Us"}
          route={"/contact"}
          location={location}
        />
      </ul>
    </div>
  );
}

export default Navbar;
