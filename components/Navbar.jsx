import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import { useContext } from "react";
import { TokenContext } from "../utils/context";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { token, setToken } = useContext(TokenContext);

  const handleLogout = () => {
    setToken("0");
    localStorage.removeItem("token");
    router.push("/");
    alert("You have been logged out");
  };
  return (
    <>
      <div className="flex justify-between px-16 py-7 w-full h-24 ">
        <Link href="/">
          <a className="flex" title="4 e-store">
            <Image src={Logo} alt="Logo" width="70" height="30" margin-right="20" />
            <h2 className="font-semibold text-3xl">e-Store</h2>
          </a>
        </Link>
        <div className="flex justify-center space-x-6">
          <Link href="/product">
            <a className="font-semibold text-3xl hover:underline ">Produk</a>
          </Link>
          <Link href="/contact">
            <a className="font-semibold text-3xl hover:underline">Kontak</a>
          </Link>
          {token !== "0" && (
            <Link href="/profile">
              <a className="font-semibold text-3xl hover:underline">Profile</a>
            </Link>
          )}

          {token !== "0" ? (
            <div onClick={() => handleLogout()}>
              <button className="font-semibold text-3xl hover:underline">Keluar</button>
            </div>
          ) : (
            <Link href="/signin">
              <a className="font-semibold text-3xl hover:underline">Masuk</a>
            </Link>
          )}
        </div>
        <Link href="/Orlist">
          <a title="OrderList">
            <BsFillCartCheckFill className=" text-4xl" />
          </a>
        </Link>
        <Link href="/MyCart">
          <a title="MyCart">
            <AiOutlineShoppingCart className="text-4xl" />
          </a>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
