import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { TokenContext } from "../utils/context";
import Link from "next/link";

function Signin() {
  const { token, setToken } = useContext(TokenContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (token !== "0") {
      router.push("/");
    } else {
      if (email && password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [token, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://live-event.social/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { message, token, data } = result;
        if (message === "success login") {
          localStorage.setItem("token", token);
          setToken(token);
          router.push("/");
        }
        alert(message);
      })
      .catch((err) => {
        alert(err.toString());
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
              <input type="email" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="my-3">
              <input type="password" className="w-full peer bg-gray-200 border-2 rounded-lg" placeholder="Kata Sandi" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="text-[#191E28] my-5">
              belum menjadi anggota?{" "}
              <Link href="/Signup">
                <a className="text-blue-500">Daftar</a>
              </Link>
            </p>
            <button className={`text-white bg-[#191E28] p-2 w-full rounded-2xl`}>Masuk</button>
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

export default Signin;
