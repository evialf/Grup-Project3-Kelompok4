/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

export const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
  return currency;
};

function Card() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between bg-white text-black font-sans shadow-lg p-3 border-solid border-black hover:border-2" onClick={() => router.push("/detail")}>
      <img src="https://www.adidas.co.id/media/catalog/product/h/q/hq6154_1_footwear_photography_side_lateral_center_view_grey.jpg" height={750} alt="product image" />
      <h1 className="font-bold">SEPATU TRAIL SAVAGE</h1>
      <h2>{formatCurrency(3000000)}</h2>
    </div>
  );
}

export default Card;
