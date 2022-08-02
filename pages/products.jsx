import React from "react";
import Card from "../components/Card";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import FloatingActionButton from "../components/FloatingActionButton";
import axios from "axios";

function Product() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState({ selectedFile: null });
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get(`https://virtserver.swaggerhub.com/pr3ecommerse/EStoreProject/1.0.0/products`)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append("myFile", selectedFile, selectedFile.name);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen overflow-auto bg-white">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {products.map((value) => (
          <Card key={value.id} data={value} />
        ))}
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16">
        <FloatingActionButton label={<FaPlus />} onClick={() => setShowModal(true)} />
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Tambah Produk</h3>
                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Judul Produk" />
                    <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Deskripsi Produk" />
                    <div className="flex gap-2">
                      <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Harga" />
                      <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Stok" />
                      <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Warna" />
                    </div>
                    <input type="file" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Warna" onChange={onFileChange} />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-gray-300 text-black active:bg-gray-400 background-transparent font-bold uppercase px-6 py-3 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Tambah
                    </button>
                    <button
                      className="bg-gray-300 text-black active:bg-gray-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Batal
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
  );
}

export default Product;
