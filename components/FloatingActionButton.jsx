import React from "react";

function FloatingActionButton(props) {
  return (
    <button className="p-4 text-black bg-gray-300 rounded-full border-solid border-black hover:bg-gray-400" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default FloatingActionButton;
