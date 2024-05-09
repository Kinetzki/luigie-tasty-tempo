import React from "react";

function NavLink({ handleClick, link, route, location }) {
  return (
    <li
      onClick={() => {
        handleClick(route);
      }}
      className={
        "cursor-pointer font-madimi px-4 py-1 hover:bg-[#feaa00] active:bg-slate-100 rounded-[5px] " +
        (location === route ? "bg-[#feaa00]" : "")
      }
    >
      {link}
    </li>
  );
}

export default NavLink;
