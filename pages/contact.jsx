import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-20">
        <div className="flex w-full h-auto bg-[#EAEFF0] rounded-3xl">
          <div className="basis-1/2 m-2">
            <h1 className="text-5xl font-semibold text-center my-10">Ikuti kami dan berikan saran</h1>
            <div className="my-10">
              <h3 className="text-3xl font-bold text-center">Email</h3>
              <h3 className="text-3xl font-bold text-center text-gray-400">info@4estore.co.id</h3>
            </div>
            <div className="my-10">
              <h3 className="text-3xl font-bold text-center">No. Telepon</h3>
              <h3 className="text-3xl font-bold text-center text-gray-400">021 - 3357- 2139</h3>
            </div>
            <div className="my-10">
              <h3 className="text-3xl font-bold text-center">Alamat</h3>
              <h3 className="text-3xl font-bold text-center text-gray-400">Jakarta, Indonesia</h3>
            </div>
          </div>
          <div className="basis-1/2 m-2">
            <h1 className="text-5xl font-semibold text-center my-10">Hubungi kami!</h1>
            <form>
              <div className="form-group text-center m-20">
                <div className="my-6">
                  <input type="text" className="w-full peer bg-[#D9D9D9] border-2 rounded-3xl" placeholder="Nama Lengkap" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="my-6">
                  <input type="text" className="w-full peer bg-[#D9D9D9]  border-2 rounded-3xl" placeholder="Email" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="my-6">
                  <textarea className="w-full peer bg-[#D9D9D9]  border-2 rounded-2xl" placeholder="Pesan" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className={`text-white bg-[#191E28] p-2 w-48 font-semibold rounded-2xl`}>Kirim Pesan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
