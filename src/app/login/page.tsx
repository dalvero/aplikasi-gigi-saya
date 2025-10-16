"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e : any) => {
    e.preventDefault();

    // contoh login sederhana
    if (email === "admin@gmail.com" && password === "123456") {
      router.push("/home"); // pindah ke halaman home
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div
        className="items-center flex-col flex w-lg justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg_login.png')",
        }}
      >
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md text-black w-[350px]"
      >
        <div className="flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Selamat Datang
          </h2>

          <p className="text-center mb-5 text-1xl">
            Gunakan NISN dan Password yang diberi oleh sekolah
            kamu untuk masuk ke aplikasi ini.
          </p>
        </div>

        <h1 className="text-1xl font-semibold pl-3">NISN</h1>
        <input
          type="email"
          placeholder="NISN"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-3xl bg-gray-300 focus:outline-emerald-800 transition-all focus:bg-white"
        />
        
        <h1 className="text-1xl font-semibold pl-3">Password Sekolah</h1>
        <input
          type="password"
          placeholder="Password Sekolah"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-8 px-4 py-3 rounded-3xl bg-gray-300 focus:outline-emerald-800 transition-all focus:bg-white"
        />

        <button
          type="submit"
          className="w-full bg-primary text-1xl font-semibold text-white py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-400 cursor-pointer transition-all"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
