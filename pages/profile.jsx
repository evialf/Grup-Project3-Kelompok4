import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function profile() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  border-2 h-full mt-2 ml-8 mr-8">
        <div>
          <div className="form-group m-20">
            <div className="my-6">
              <Image
                className="p w-10 h-10 rounded-full ml- ring-2 ring-gray-300 dark:ring-gray-500"
                src=""
                alt=""
                width={200}
                height={200}
              ></Image>
              <br />
              <button
                type="button"
                className="text-gray-900 bg-white mt-2 ml-8 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Ubah foto
              </button>
            </div>
            <div className="my-6">
              <input
                type="text"
                className="w-1/2 peer bg-[#D9D9D9] margin-left float-left ml-1 border-2 rounded-3xl"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="w-1/2 peer bg-[#D9D9D9] margin-right
                 mt-4 border-2 rounded-3xl"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="my-3">
                <input
                  type="text"
                  className="w-1/2 peer bg-[#D9D9D9] margin-left mt-2  border-2 rounded-3xl"
                  placeholder="Alamat"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>
            <div className="my-3">
              <input
                type="text"
                className="w-1/2 peer bg-[#D9D9D9] margin-right border-2 rounded-3xl"
                placeholder="No Handphone"
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="password"
                className="w-1/2 peer bg-[#D9D9D9] margin-left border-2 rounded-3xl"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={`text-white bg-[#191E28] p-2 w-48 font-semibold rounded-2xl`}
            >
              Simpan perubahan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
