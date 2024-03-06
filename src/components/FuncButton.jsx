import React from "react";

function FuncButton({ func, text }) {
  return (
    <button
      className="font-madimi bg-[#feaa00] p-2 rounded-lg mt-2 hover:bg-[#fea90070]"
      onClick={func}
    >
      {text}
    </button>
  );
}

export default FuncButton;
