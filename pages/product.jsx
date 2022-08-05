import React from "react";
import Card from "../components/Card";
import { FaPlus } from "react-icons/fa";
import FloatingActionButton from "../components/FloatingActionButton";
import axios from "axios";
import Navbar from "../components/Navbar";
import { TokenContext, RoleContext } from "../utils/context";
import { useContext } from "react";

function Product() {
  const [showModal, setShowModal] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [objSubmit, setObjSubmit] = React.useState("");
  const { token, setToken } = useContext(TokenContext);
  const { role, setRole } = useContext(RoleContext);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get(`https://live-event.social/product`)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in objSubmit) {
      form.append(key, objSubmit[key]);
    }

    axios
      .post(`https://live-event.social/product`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {})
      .then((result) => {
        alert("Berhasil");
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setShowModal(false);
        fetchProducts();
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  // const onFileChange = (event) => {
  //   setSelectedFile({ selectedFile: event.target.files[0] });
  // };

  // const onFileUpload = () => {
  //   const formData = new FormData();

  //   formData.append("myFile", selectedFile, selectedFile.name);
  // };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="w-full h-screen overflow-auto bg-white">
      <Navbar />
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-3 gap-3">
        {products.map((value) => (
          <Card key={value.id} data={value} fnFetchProduct={fetchProducts} />
        ))}
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16">
        {token !== "0" && role === "admin" && <FloatingActionButton label={<FaPlus />} onClick={() => setShowModal(true)} />}
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
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="relative p-6 flex-auto">
                      <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Judul Produk" onChange={(e) => handleChange(e.target.value, "name")} />
                      <input type="text" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Deskripsi Produk" onChange={(e) => handleChange(e.target.value, "description")} />
                      <div className="flex gap-2">
                        <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Harga" onChange={(e) => handleChange(e.target.value, "price")} />
                        <input type="number" className="form-input px-4 py-3 rounded-lg w-full mb-2" placeholder="Stok" onChange={(e) => handleChange(e.target.value, "stock")} />
                      </div>
                      <input type="file" className="form-input px-4 py-3 rounded-lg w-full mb-2" onChange={(e) => handleChange(e.target.files[0], "images")} />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button className="bg-gray-300 text-black active:bg-gray-400 background-transparent font-bold uppercase px-6 py-3 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Tambah
                      </button>
                      <button
                        className="bg-gray-300 text-black active:bg-gray-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        Batal
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
  );
}

export default Product;
