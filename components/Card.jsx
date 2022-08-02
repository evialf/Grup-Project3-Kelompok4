/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { FaEllipsisV } from "@react-icons/all-files/fa/FaEllipsisV";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
  return currency;
};

function Card({ data }) {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState({ show: false, view: "update" });

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
                    {showModal.view === "update" ? (
                      <div className="relative p-6 flex-auto">
                        <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Judul Produk" />
                        <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Deskripsi Produk" />
                        <div className="flex gap-2">
                          <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Harga" />
                          <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Stok" />
                          <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Warna" />
                        </div>
                        <input type="file" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Warna" />
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
                        type="button"
                        onClick={() => setShowModal(false)}
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
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
      <div onClick={() => router.push("/detail")}>
        <img src={data.image_url} height={750} alt="product image" />
        <h1 className="font-bold">{data.name}</h1>
        <h2>{formatCurrency(data.price)}</h2>
      </div>
    </div>
  );
}

export default Card;
