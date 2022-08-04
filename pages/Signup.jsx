import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
      userName,
      fullName,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://live-event.social/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data } = result;
        if (message === "success create data") {
          if (data) {
            router.push("/signin");
          }
        }
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center">
          <h1 className="font-bold mb-7 text-[#191E28]">
            Buat profil anggota Anda dan <br /> dapatkan akses pertama ke produk <br />
            terbaik.
          </h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="form-group text-center lg:mx-96">
            <div className="my-3">
              <input type="text" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Nama Lengkap" onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="my-3">
              <input type="text" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Nama Pengguna" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="my-3">
              <input type="email" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="my-3">
              <input type="password" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Kata Sandi" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-[#191E28] my-5">
              sudah menjadi anggota?{" "}
              <span className="text-blue-500">
                <a href="/signin">Masuk</a>
              </span>
            </p>
            <button className={`text-white bg-[#191E28] p-2 w-full rounded-2xl`}>Daftar</button>
          </div>
        </form>

        <div>
          <p className="text-center text-[#191E28] mt-5 font-semibold text-sm">
            Daftar email untuk mendapatkan <br /> pembaruan dari produk, penawaran, dan <br /> manfaat anggota Anda
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
