import React from "react";
import Image from "next/image";
// import { Image } from "@mantine/core";
import { PasswordInput, TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
function Login() {
  return (
    <div className="w-full text-center">
      <Image
        src="/assets/Logo.png"
        alt="Logo"
        width={72}
        height={38}
        radius="lg"
      />
      <h1 className="font-semibold">
        AKUN MU UNTUK SEMUA <br /> PRODUK YANG KAMI MILIKI
      </h1>
      <form className="text-center my-3">
        <TextInput
          className="my-7 mx-28 lg:mx-96 rounded-lg border-2 border-gray-300 bg-gray-300"
          placeholder="Email Address"
        />
        <PasswordInput
          className="my-7 mx-28 lg:mx-96 rounded-lg border-2 border-gray-300 bg-gray-300"
          placeholder="Kata Sandi"
        />
        <Button className="w-32 text-white bg-black my-8 rounded-lg">
          Masuk
        </Button>
        <p>
          bukan member?{" "}
          <span>
            <a className="text-blue-600" href="/register">
              daftar
            </a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
