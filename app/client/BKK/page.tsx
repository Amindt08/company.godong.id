"use client";
import Image from "next/image";
import Footer from '@/components/Footer';
import React from 'react'
import Navigation from "@/components/NavigationBKK";


export default function KoperasiLandingPage() {
  return (
    <>
      <div className="fixed bg-white w-full h-[90px] shadow-md">
      <Navigation />
      </div>
      <div className="bg-[#ffffff] min-h-screen flex flex-col items-center mt-20">
      {/* Hero Section */}
      <div className="text-center px-6 py-10 max-w-3xl">
        <h1 className="text-4xl font-bold">
          Selamat Datang di Masa Depan <br />
          Manajemen Keuangan Koperasi
        </h1>
        <p className="text-gray-700 text-2xl mt-4">
          Ubah cara koperasi Anda beroperasi dengan <b>Core System Koperasi BKK</b> kami yang canggih. 
          Sistem ini dirancang untuk menyederhanakan setiap aspek operasional keuangan Anda 
          agar lebih mudah dan efisien.
        </p>
      </div>

      {/* Feature Section */}
      <div className="flex flex-col items-center gap-16 px-12 py-16 max-w-7xl mx-auto">
        {/* Efisiensi Operasional */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bold">🚀 Tingkatkan Efisiensi Operasional Koperasi Anda!</h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Dengan <b>Core System Koperasi BKK</b>, segala proses manajemen keuangan menjadi lebih mudah dan cepat. 
              Mulai dari manajemen simpanan hingga akuntansi terpadu, semua dalam satu sistem!
            </p>
          </div>
          <Image src="/BKK.png" width={500} height={300} alt="Laptop" className="rounded-lg shadow-lg" />
        </div>

        {/* Manajemen Simpanan */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bold">💡 Manajemen Simpanan yang Mudah dan Aman!</h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Dengan <b>Core System Koperasi BKK</b>, Anda dapat dengan mudah mengelola simpanan anggota. 
              Cukup buku, pantau, dan cetak bukti simpanan dengan beberapa klik saja!
            </p>
          </div>
          <Image src="/BKK2.png" width={400} height={400} alt="Mobile App" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Mengapa Pilih Godong Laku */}
      <div className="bg-gradient-to-r from-green-50 to-white py-16 px-8 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Judul */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Mengapa Pilih <br /> Godong Laku untuk <br /> BKK ?
            </h2>
          </div>
          
          {/* Daftar Fitur */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-700 p-4 md:p-6">
  <div>
    <h3 className="font-bold text-lg md:text-xl">✅ Sistem Terintegrasi Penuh</h3>
    <p className="text-sm md:text-base">Semua fitur beroperasi secara terpadu, memberikan pengalaman yang mulus dalam manajemen koperasi.</p>
  </div>
  <div>
    <h3 className="font-bold text-lg md:text-xl">✅ User-Friendly</h3>
    <p className="text-sm md:text-base">Sistem ini sangat mudah dioperasikan, bahkan untuk pengguna yang tidak terlalu teknis.</p>
  </div>
  <div>
    <h3 className="font-bold text-lg md:text-xl">✅ Multi-User</h3>
    <p className="text-sm md:text-base">Dapat digunakan bersama-sama dalam satu jaringan, baik LAN maupun internet, memungkinkan kolaborasi yang efisien.</p>
  </div>
  <div>
    <h3 className="font-bold text-lg md:text-xl">✅ Keamanan Data Terjamin</h3>
    <p className="text-sm md:text-base">Data penting koperasi Anda terlindungi dengan tingkat keamanan tinggi, menjaga integritas dan privasi informasi.</p>
  </div>
  <div className="md:col-span-2">
    <h3 className="font-bold text-lg md:text-xl">✅ Kompatibel dengan Banyak Sistem Operasi</h3>
    <p className="text-sm md:text-base">Core System Koperasi BKK dapat berjalan di hampir semua sistem operasi, termasuk Microsoft Windows, Linux/Unix, dan Macintosh.</p>
  </div>
</div>
</div>
</div>

      {/* Footer */}
     
    </div>
    <Footer />
    </>
  );
}
