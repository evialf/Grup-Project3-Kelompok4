/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../components/Button";
import { formatCurrency } from "../../components/Card";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/Navbar";

function Detail() {
  const router = useRouter();
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [objSubmit, setObjSubmit] = React.useState("");

  React.useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { productId } = router.query;
    setLoading(true);
    await axios
      .get(`https://live-event.social/product/${productId}`)
      .then((response) => {
        const { data } = response.data;
        console.log(data[0]);
        setProduct(data[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const addCart = (e) => {
    e.preventDefault();
    const { productId } = router.query;
    const form = new FormData();
    for (const key in objSubmit) {
      form.append(key, objSubmit[key]);
    }

    axios
      .post(`https://live-event.social/carts/${productId}`)
      .then((response) => {
        const { message } = response;
        alert(message);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-row m-5 gap-2">
        <div className="basis-2/4">
          <img src={product.Images === "" ? "https://via.placeholder.com/750" : product.Images} alt="product image" className="w-full" />
          <h3 className="font-bold mt-2 text-2xl">Deskripsi</h3>
          <p className="text-justify">{product.Description}</p>
        </div>
        <div className="basis-1/2">
          <h1 className="font-semibold text-5xl italic">{product.Name}</h1>
          <h2 className="font-semibold text-3xl mt-6">{formatCurrency(product.Price)}</h2>
          {/* <select className="form-select px-4 py-3 w-36 mt-6">
          <option>UKURAN</option>
          <option>40</option>
          <option>41</option>
        </select> */}
          <input type="number" className="form-input px-4 py-3 rounded-lg w-48 my-2" placeholder="Jumlah" onChange={(e) => handleChange(e.target.value, "quantity")} min={1} />
          {/* <h3 className="font-semibold text-2xl mt-2">Total harga: {formatCurrency(product.Price)}</h3> */}
          <div className="flex flex-col gap-2 mt-2 max-w-max font-semibold">
            <Button label={"TAMBAH KE KERANJANG"} />
            <Button label={"BAYAR"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
