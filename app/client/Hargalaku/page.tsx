"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navigation from "@/components/NavigationLaku";


const HargaLaku = () => {
  return (
    <>
      <div className="absolute bg-white w-full h-[75px]">
      <Navigation />
      </div>
    <div className="font-sans">
      {/* Header Section */}
<header className="bg-white py-10 mt-[100px] flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-screen-xl mx-auto">
        {/* Deskripsi Kiri */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-3xl font-bold mb-4">
            Nikmati Solusi Manajemen Koperasi Terbaik untuk Kemajuan Koperasi Anda!
          </h1>
          <p className="text-1xl text-gray-700 max-w-4xl mx-auto md:mx-0">
            Laku One adalah solusi untuk berbagai aplikasi manajemen koperasi yang
            dirancang untuk mempermudah operasional koperasi Anda. Satu solusi
            lengkap untuk segala kebutuhan pengelolaan koperasi!
          </p>
        </div>

        {/* Gambar Kanan */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src="/laku2.png"
            alt="Deskripsi Gambar"
            className="w-50 h-auto"
          />
        </div>
      </header>
      
      {/* Card Harga untuk Laku One */}
<div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row mb-16 mx-auto">
  {/* Bagian Kiri */}
  <div className="w-full md:w-1/2 p-6">
    <div className="flex items-center gap-4 mb-6">
      <img src="/laku3.png" alt="Laku One Logo" className="w-12 h-12" />
      <h2 className="text-xl font-bold">Untuk Laku One</h2>
    </div>
    <p className="text-gray-700 text-base md:text-lg mb-6">
      Dengan berlangganan Laku One, Anda akan mendapatkan akses ke berbagai aplikasi manajemen koperasi yang terintegrasi dalam satu platform.
    </p>
    <p className="text-3xl md:text-4xl font-bold text-black">
      Rp 299.000<span className="text-gray-500 text-lg md:text-xl">/bulan</span>
    </p>
    <button className="mt-6 w-full bg-green-600 text-white py-3 text-lg rounded-xl font-semibold hover:bg-green-700">
      Get started
    </button>
  </div>

  {/* Bagian Kanan */}
  <div className="w-full md:w-1/2 bg-green-100 p-6 rounded-xl">
    <h3 className="text-xl font-bold text-black">INCLUDE</h3>
    <ul className="mt-4 space-y-3 text-gray-700 text-base md:text-lg">
      {[ 
        "Manajemen Keuangan Koperasi",
        "Pengelolaan Simpanan & Pinjaman",
        "Laporan Keuangan Otomatis",
        "Integrasi dengan Alat Pembayaran Digital",
        "Dukungan Pelanggan 24/7",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          ✅ {item}
        </li>
      ))}
    </ul>
  </div>
</div>

      {/* Section 2 - Centered Content */}
      <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center">
        {/* Gambar di sebelah kiri */}
        <Image
          src="/BKK.png"
          width={300}
          height={300}
          alt="Mobile App"
          className="order-1"
        />
        {/* Teks di sebelah kanan */}
        <div className="max-w-2xl text-center md:text-left order-2">
          <h2 className="text-3xl font-bold">
            Jangan Biarkan Koperasi Anda Tertinggal!
          </h2>
          <p className="text-gray-700 text-1xl mt-4 leading-relaxed">
            Bergabunglah dengan Godong Laku One untuk mempercepat pertumbuhan
            koperasi Anda. Kelola semua aspek koperasi dengan mudah dalam satu
            solusi yang terintegrasi. Dapatkan efisiensi, keamanan, dan kemudahan
            dalam manajemen koperasi Anda.
          </p>
        </div>
      </div>

    {/* Section 3 - Hero Section */}
<div className="homepage bg-white pb-16 md:pb-24">
  <div className="container mx-auto px-4">
    <div className="hero flex flex-col items-center text-center">
      <div className="box max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-5 md:mb-7 pt-10 md:pt-14">
          Mari bergabung dengan 100+ Koperasi lainnya
        </h1>
        <p className="text-lg md:text-xl px-4 md:px-16 pb-4 md:pb-5">
          Uji coba gratis 14 hari. Tanpa perlu kartu kredit. Login hanya dalam hitungan detik.
        </p>
      </div>
      <div className="mt-6 md:mt-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg w-full md:w-auto">
          Mulai Uji Coba Gratis!
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Footer Section */}
      <Footer />
    </div>
    </>
  );
};

export default HargaLaku;
