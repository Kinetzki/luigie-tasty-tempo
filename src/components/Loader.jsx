import React from "react";
import LoaderCard from "./LoaderCard";

function Loader(props) {
  return (
    <div className="top-full flex gap-10">
      {props.items.map((item, i) => {
        return <LoaderCard title={item} key={i}>
            {props.icons[i]}
        </LoaderCard>;
      })}
    </div>
  );
}

export default Loader;
