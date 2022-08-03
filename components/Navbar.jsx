import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-16 py-7 w-full h-24 ">
        <Link href="#">
          <div className="flex">
            <Image
              src={Logo}
              alt="Logo"
              width="70"
              height="30"
              margin-right="20"
            />
            <h2 className="font-semibold text-3xl">e-Store</h2>
          </div>
        </Link>
        <div className="flex justify-center space-x-6">
          <h2 className="font-semibold text-3xl ">Produk</h2>
          <h2 className="font-semibold text-3xl">Kontak</h2>
          <h2 className="font-semibold text-3xl">Daftar</h2>
          <h2 className="font-semibold text-3xl">Profile</h2>
        </div>
        <AiOutlineShoppingCart className="text-4xl" />
      </div>
    </>
  );
};
export default Navbar;
