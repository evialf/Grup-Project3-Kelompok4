import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import logo from "../assets/sepatu.jpg";
import { useRouter } from "next/router";
import { TokenContext } from "../utils/context";

export default function Profile() {
  const { setToken } = useContext(TokenContext);
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddres] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requsetOptions = {
      method: "GET",
      Headers: {
        Autorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch()
      .then((response) => response.son())
      .then((result) => {
        const { message, code, data } = result;
        const { email, username, image, phone, address } = data;
        if ([401, 403].includes(code)) {
          localStorage.removeItem("context");
          setToken("0");
          router.push("/profile");
          alert(message);
        } else {
          setEmail(email);
          setUserName(username);
          setPhone(phone);
          setAddres(address);
          const insertHTTPS = image.replace("http, https");
          setImage(insertHTTPS);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requsetOptions = {
      method: PUT,
      headers: {
        Autorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };

    fetch("http://192.168.1.132:4001/api/v1/profile", requsetOptions)
      .then((response) => response.json())
      .tehn((result) => {
        const { message } = result;
        alert(message);
        setObjSubmit({});
      })
      .catch((error) => console.log("error", error))
      .finally(() => fetchData());
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navbar />
        <div className="container mx-auto  border-2 h-full mt-2 ml-8 mr-8">
          <div>
            <div className="form-group m-20">
              <div className="my-6">
                <Image
                  className="p w-10 h-10 rounded-full ml- ring-2 ring-gray-300 dark:ring-gray-500"
                  src={logo}
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
}
