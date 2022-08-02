import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

function Navbar() {
  //   const [nav, setNav] = useState(false);

  return (
    <div className="navbar w-full">
      <nav className="navbar navbar-expand-lg navbar-light shadow-lg fixed w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            {/* first block secsection Outer part */}
            {/* <div className="flex items-center mx-20 justify-between w-full"> */}
            <div className="w-3/12 flex justify-center items-center flex-shrink-0">
              <h1 className="font-bold text-xl cursor-pointer">
                <Image
                  src="/assets/Logo.png"
                  alt="Logo"
                  width={72}
                  height={32}
                />
                <span className="text-black font-in">e-Store</span>
              </h1>
            </div>
            {/* for small screen we dont show tabs */}
            <div className="w-6/12 sm:w-16 hidden md:block justify-end">
              <div className="mx-10 flex items-center space-x-8">
                <Link
                  activeClass="Produk"
                  to="Produk"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-[#191e28] px-3 py-2 text-md"
                >
                  Produk
                </Link>
                <Link
                  activeClass="Kontak"
                  to="Kontak"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-[#191e28]"
                >
                  Kontak
                </Link>
                <Link
                  activeClass="Daftar"
                  to="Daftar"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-[#191e28]"
                >
                  Daftar
                </Link>
                <Link
                  activeClass="Profile"
                  to="Profile"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-[#191e28]"
                >
                  Profile
                </Link>
              </div>
            </div>
            <div
              className="w-3/12 justify-items-end ml-32 hidden sm:block"
              onClick={() => setNav(!nav)}
            >
              <button>
                <AiOutlineShoppingCart className="text-black ml-16" />
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* <Link
          className="navbar-brand"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src="https://i.imgur.com/XQQXQZJ.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNav(!nav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul> */}
        {/* </div> */}
      </nav>
    </div>
  );
}
export default Navbar;
