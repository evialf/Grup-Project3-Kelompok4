/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { FaEllipsisV } from "react-icons/fa";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import axios from "axios";

export const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
  return currency;
};

function Card({ data, fnFetchProduct }) {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState({ show: false, view: "update" });
  const [objSubmit, setObjSubmit] = React.useState("");

  const handleSubmit = (e, productId) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in objSubmit) {
      form.append(key, objSubmit[key]);
    }

    axios
      .put(`https://live-event.social/product/${productId}`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        alert("berhasil");
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setShowModal(false);
        fnFetchProduct();
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const deleteProduct = (e, productId) => {
    e.preventDefault();
    axios
      .delete(`https://live-event.social/product/${productId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        alert("berhasil");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => fnFetchProduct());
  };

  return (
    <div className="flex flex-col justify-between bg-white text-black font-sans shadow-lg p-3 border-solid border-black hover:border-2">
      <div className="relative">
        <div className="absolute top-0 right-0">
          <Menu
            menuButton={
              <button className="hover:bg-gray-200 rounded-full p-2">
                <FaEllipsisV />
              </button>
            }
            transition
          >
            <MenuItem onClick={() => setShowModal({ show: true, view: "update" })}>Ubah</MenuItem>
            <MenuItem onClick={() => setShowModal({ show: true, view: "delete" })}>Hapus</MenuItem>
          </Menu>
          {showModal.show ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">{showModal.view === "update" ? "Ubah Produk" : "Hapus Produk"}</h3>
                      <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                      </button>
                    </div>
                    {/*body*/}
                    <form onSubmit={(e) => handleSubmit(e, data.ID)}>
                      {showModal.view === "update" ? (
                        <div className="relative p-6 flex-auto">
                          <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Judul Produk" defaultValue={data.Name} onChange={(e) => handleChange(e.target.value, "name")} />
                          <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Deskripsi Produk" defaultValue={data.Description} onChange={(e) => handleChange(e.target.value, "description")} />
                          <div className="flex gap-2">
                            <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Harga" defaultValue={data.Price} onChange={(e) => handleChange(e.target.value, "price")} />
                            <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Stok" defaultValue={data.Stock} onChange={(e) => handleChange(e.target.value, "stock")} />
                          </div>
                          <input
                            type="file"
                            className="form-input px-4 py-3 rounded-lg w-full mb-2"
                            // onChange={(e) => {
                            //   handleChange(e.target.files[0], "images");
                            // }}
                          />
                        </div>
                      ) : (
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-black text-lg leading-relaxed">Anda yakin ingin menghapus produk ini?</p>
                        </div>
                      )}

                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-gray-300 text-black active:bg-gray-400 background-transparent font-bold uppercase px-6 py-3 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={showModal.view === "update" ? "" : (e) => deleteProduct(e, data.ID)}
                        >
                          {showModal.view === "update" ? "Simpan" : "Ya"}
                        </button>
                        <button
                          className="bg-gray-300 text-black active:bg-gray-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          {showModal.view === "update" ? "Batal" : "Tidak"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
      <div onClick={() => router.push(`product/${data.ID}`)}>
        <img src={data.Images === "" ? "https://via.placeholder.com/750" : data.Images} height={750} alt="product image" />
        <h1 className="font-bold">{data.Name}</h1>
        <h2>{formatCurrency(data.Price)}</h2>
      </div>
    </div>
  );
}

export default Card;
