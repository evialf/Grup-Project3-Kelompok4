import React from "react";

function Button(props) {
  return (
    <button className="p-2 text-black text-sm font-bold bg-gray-300 rounded-lg hover:shadow-lg" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
