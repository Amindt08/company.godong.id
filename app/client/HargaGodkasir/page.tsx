import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigationgodkasir";

const HargaKasir: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="fixed bg-white w-full h-[75px] z-50 shadow-md">
        <Navigation />
      </div>

      <div className="pt-[140px]">
 {/* Section 1 */}
<section className="bg-white py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4">
  {/* Kontainer Gambar */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
    <div className="relative w-[250px] md:w-[300px] h-[280px] md:h-[320px] flex justify-center items-center">
      <img
        src="/82.png"
        alt="Godong Kasir UI 1"
        className="absolute top-[-20px] md:top-[-80px] left-[-10px] md:left-[-30px] w-28 md:w-36 lg:w-44 max-w-xs shadow-lg border-2 border-black rounded-lg"
      />
      <img
        src="/83.png"
        alt="Godong Kasir UI 2"
        className="absolute top-[10px] md:top-[-50px] left-[20px] md:left-[20px] w-28 md:w-36 lg:w-44 max-w-xs shadow-lg border-2 border-black rounded-lg"
      />
      <img
        src="/84.png"
        alt="Godong Kasir UI 3"
        className="absolute top-[40px] md:top-[-20px] left-[50px] md:left-[70px] w-28 md:w-36 lg:w-44 max-w-xs shadow-lg border-2 border-black rounded-lg"
      />
    </div>
  </div>

  {/* Kontainer Teks */}
  <div className="w-full md:w-1/2 text-center md:text-left ml-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
      Nikmati Fitur Kasir Terbaik untuk Bisnis Anda!
    </h1>
    <p className="text-gray-600 text-lg md:text-1xl leading-relaxed">
      Solusi kasir lengkap dari Godong Kasir hadir untuk mempermudah operasional bisnis Anda dengan harga yang terjangkau.
    </p>
  </div>
</section>


      {/* Card Harga untuk Godong Kasir */}
<div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row mb-16 mx-auto">
  {/* Bagian Kiri */}
  <div className="w-full md:w-1/2 p-6">
    <div className="flex items-center gap-4 mb-6">
      <img src="/sirr.png" alt="Godong Kasir Logo" className="w-12 h-12" />
      <h2 className="text-xl font-bold">Untuk Godong Kasir</h2>
    </div>
    <p className="text-gray-700 text-base md:text-lg mb-6">
      Semua fitur yang Anda butuhkan untuk manajemen kasir yang lebih efisien dan modern, tersedia dengan harga yang sangat bersahabat.
    </p>
    <p className="text-3xl md:text-4xl font-bold text-black">
      Rp 199.000<span className="text-gray-500 text-lg md:text-xl">/bulan</span>
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
        "Manajemen Penjualan & Transaksi",
        "Laporan Keuangan Otomatis",
        "Manajemen Inventaris",
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


{/* Section Operasional */}
<section className="flex flex-col md:flex-row justify-between items-center bg-white px-8 md:px-24 py-20">
  {/* Kontainer Gambar (Lebih Dekat dengan Teks) */}
  <div className="w-full md:w-[45%] flex justify-center mb-4 md:mb-0">
    <img
      src="/BKK.png"
      alt="Operasional"
      className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
    />
  </div>

  {/* Kontainer Teks */}
  <div className="w-full md:w-[50%] text-center md:text-left">
    <h1 className="text-5xl font-bold text-black leading-tight">
      Jangan Biarkan Operasional Bisnis Anda Terlambat
    </h1>
    <p className="text-xl text-gray-800 leading-8">
      Segera Gunakan <span className="font-semibold">Godong Kasir</span> untuk mengelola bisnis Anda dengan lebih efisien. 
      Optimalkan setiap transaksi dengan fitur-fitur terbaik yang dirancang khusus untuk kemajuan usaha Anda. 
      <span className="text-green-600 font-semibold"> Hubungi kami sekarang</span> dan bawa bisnis Anda ke level berikutnya!
    </p>
  </div>
</section>

        {/* Section Join */}
        <section className="flex flex-col items-center justify-center bg-white text-center py-16">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-5 leading-[1.4]">
            Bergabunglah dengan Beragam Bisnis Sukses yang Telah Mempercayakan Godong Kasir!
          </h1>
          <p className="text-base md:text-lg text-gray-800 mb-8">
            Uji coba gratis 14 hari. Tanpa perlu kartu kredit. Login hanya dalam hitungan detik.
          </p>
          <button className="text-white text-base font-bold bg-[#538055] px-6 py-2 rounded-md transition-all duration-300 hover:bg-[#45a049]">
            Mulai Uji Coba Gratis
          </button>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HargaKasir;
