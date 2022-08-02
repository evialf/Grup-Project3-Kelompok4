import React from "react";

function Button(props) {
  return (
    <button className="p-2 text-black text-lg bg-gray-300 border-solid border-black hover:border-2" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
