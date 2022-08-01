import React from "react";
import Card from "../components/Card";

function product() {
  return (
    <div className="w-full h-screen overflow-auto bg-white">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default product;
