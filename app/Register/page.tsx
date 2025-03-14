"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Perbaikan import

export default function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    no_hp: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Registrasi gagal");
        return;
      }

      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nama" placeholder="Nama" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="no_hp" placeholder="Nomor HP" onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
        <p className="text-center mt-4">Sudah punya akun? <a href="/login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
}
