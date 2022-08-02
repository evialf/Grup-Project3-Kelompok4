/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../components/Button";
import { formatCurrency } from "../components/Card";

function Detail() {
  return (
    <div className="flex flex-row m-20 gap-2">
      <div className="basis-2/4">
        <img src="https://www.adidas.co.id/media/catalog/product/h/q/hq6154_1_footwear_photography_side_lateral_center_view_grey.jpg" alt="product image" className="w-full" />
        <h3 className="font-bold mt-2 text-2xl">Deskipsi</h3>
        <p className="text-justify">
          Sepatu Savage adalah inspirasi dari tahun 1999, yang didesain secara khas dari adidas x IVY PARK — tanpa ada keraguan atau batasan. Dibuat dari bahan kulit mulus untuk menciptakan kanvas yang tegas dengan warna netral dan garis
          yang fleksibel.
        </p>
      </div>
      <div className="basis-1/2">
        <h1 className="font-semibold text-5xl italic">SEPATU TRAIL SAVAGE</h1>
        <h2 className="font-semibold text-3xl mt-6">{formatCurrency(3000000)}</h2>
        <select className="form-select px-4 py-3 w-36 mt-6">
          <option>UKURAN</option>
          <option>40</option>
          <option>41</option>
        </select>
        <div className="flex flex-col gap-2 mt-2 max-w-max font-semibold">
          <Button label={"TAMBAH KE KERANJANG"} />
          <Button label={"BAYAR"} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
