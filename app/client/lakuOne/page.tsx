"use client";

import React from "react";
import Image from "next/image"; // Importing Image from next/image
import Footer from "@/components/Footer";
import Navigation from "@/components/NavigationLaku";

const Laku = () => {
  return (
       <>
         <div className="fixed bg-white w-full h-[75px]">
  <Navigation />
</div>

<div className="font-sans">
  {/* Header Section */}
  <header className="bg-gray-100 py-10 mt-16 flex flex-col md:flex-row-reverse items-center justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
    {/* Gambar Kanan */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/laku.png"
        alt="Deskripsi Gambar"
        className="w-full h-auto md:w-[60%] lg:w-[50%]" // Ensure it adjusts well
      />
    </div>

    {/* Deskripsi Kiri */}
    <div className="w-full md:w-1/2 text-center md:text-left px-4 mt-100">
  <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
        Selamat Datang di Era Baru Manajemen Koperasi Cerdas dan Terintegrasi
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto md:mx-0">
        Nikmati berbagai layanan dari Godong Laku hanya dengan berlangganan Laku One. Tingkatkan produktivitas dan kepuasan anggota koperasi Anda dengan solusi all-in-one ini.
      </p>
    </div>
  </header>



      {/* Section 2 - Centered Content */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 w-full justify-center mb-30">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Optimalkan Efisiensi Operasional Koperasi Anda dengan Laku One!
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Dengan berbagai aplikasi yang terdapat dalam paket Laku One, proses pengelolaan koperasi menjadi lebih cepat, aman, dan teratur. Setiap aplikasi dirancang untuk memenuhi kebutuhan spesifik koperasi Anda, mulai dari keuangan hingga keanggotaan, semua dalam satu sistem terpadu.
          </p>
        </div>
        <Image src="/BKK.png" width={400} height={400} alt="Mobile App" />
      </div>

      {/* Mengapa Pilih Godong Laku */}
      <div className="bg-white py-16 px-8 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Judul */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Mengapa Memilih <br /> Laku One untuk <br /> Koperasi Anda?
            </h2>
          </div>

          {/* Daftar Fitur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold text-xl"> ✅ Komprehensif </h3>
              <p className="text-xl">
                Laku One mencakup berbagai aplikasi penting yang dapat disesuaikan dengan kebutuhan spesifik koperasi Anda.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl"> ✅ Keamanan Terjamin</h3>
              <p className="text-xl">
                Data Anda aman dengan enkripsi dan fitur keamanan canggih.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl"> ✅ Terintegrasi </h3>
              <p className="text-xl">
                Semua aplikasi dalam paket Laku One terhubung satu sama lain, sehingga memudahkan pengelolaan data dan operasional koperasi Anda.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl"> ✅ Kemudahan Penggunaan</h3>
              <p className="text-xl">
                Desain user-friendly membuat setiap aplikasi mudah digunakan, baik oleh pengurus koperasi maupun anggota.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default Laku;
