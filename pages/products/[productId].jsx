/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../components/Button";
import { formatCurrency } from "../../components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const productId = useParams();
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchProduct(productId);
  }, []);

  const fetchProduct = async (productId) => {
    setLoading(true);
    await axios
      .get(`https://virtserver.swaggerhub.com/pr3ecommerse/EStoreProject/1.0.0/products/${productId}`)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-row m-20 gap-2">
      <div className="basis-2/4">
        <img src="https://www.adidas.co.id/media/catalog/product/h/q/hq6154_1_footwear_photography_side_lateral_center_view_grey.jpg" alt="product image" className="w-full" />
        <h3 className="font-bold mt-2 text-2xl">Deskripsi</h3>
        <p className="text-justify">{product.description}</p>
      </div>
      <div className="basis-1/2">
        <h1 className="font-semibold text-5xl italic">{product.name}</h1>
        <h2 className="font-semibold text-3xl mt-6">{formatCurrency(product.price)}</h2>
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
