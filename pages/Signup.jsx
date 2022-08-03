import React from "react";

function signup() {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="font-bold mb-7 text-[#191E28]">
          Buat profil anggota Anda dan <br /> dapatkan akses pertama ke produk{" "}
          <br />
          terbaik.
        </h1>
      </div>
      <form>
        <div className="form-group text-center lg:mx-96">
          <div className="my-3">
            <input
              type="text"
              className="w-full peer bg-gray-200 border-2 rounded-lg"
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="w-full peer bg-gray-200 border-2 rounded-lg"
              placeholder="Nama Pengguna"
            />
          </div>
          <div className="my-3">
            <input
              type="email"
              className="w-full peer bg-gray-200 border-2 rounded-lg"
              placeholder="Email"
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              className="w-full peer bg-gray-200 border-2 rounded-lg"
              placeholder="Kata Sandi"
            />
          </div>
          <p className="text-[#191E28] my-5">
            sudah menjadi anggota?{" "}
            <span className="text-blue-500">
              <a href="/home">Masuk</a>
            </span>
          </p>
        </div>
      </form>
      <button
        className={`text-white bg-[#191E28] p-2 w-full lg:w-64 lg:ml-96 rounded-2xl `}
        onClick={() => {
          alert("Signup Success");
        }}
      >
        Daftar
      </button>
      <div>
        <p className="text-center text-[#191E28] mt-5 font-semibold text-sm">
          Daftar email untuk mendapatkan <br /> pembaruan dari produk,
          penawaran, dan <br /> manfaat anggota Anda
        </p>
      </div>
    </div>
  );
}

export default signup;
