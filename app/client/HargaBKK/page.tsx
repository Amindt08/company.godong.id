import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import Navigation from "@/components/NavigationBKK";


const HargaBKK = () => {
  return (
    <>
      <div className="fixed bg-white w-full h-[75px] shadow-md">
      <Navigation />
      </div>
      <div className="flex flex-col items-center p-8 min-h-screen mt-[85px]">
      <div className="text-center mb-12 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-black">
          Nikmati Fitur Canggih dengan <br /> Harga Super Terjangkau!
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Core System Koperasi BKK hadir dengan fitur lengkap untuk manajemen koperasi Anda
        </p>
      </div>

      {/* Card Harga */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row mb-12 mx-auto">
        {/* Bagian Kiri */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center gap-2 mb-4">
            <img src="/gambkk.png" alt="BKK Logo" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Untuk Koperasi BKK</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            Semua fitur yang Anda butuhkan untuk manajemen koperasi yang lebih efisien dan modern, tersedia dengan harga yang sangat bersahabat.
          </p>
          <p className="text-2xl font-bold text-black">
            Rp 199.000<span className="text-gray-500 text-sm">/bulan</span>
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700">
            Get started
          </button>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full md:w-1/2 bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-black">INCLUDE</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">✅ include...</li>
            <li className="flex items-center gap-2">✅ include...</li>
            <li className="flex items-center gap-2">✅ include...</li>
            <li className="flex items-center gap-2">✅ include...</li>
          </ul>
        </div>
      </div>

      {/* Section 2 - Centered Content */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 w-full justify-center mb-30">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold">Tidak perlu membayar lebih untuk mendapatkan kualitas terbaik!</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Segera beralih ke sistem manajemen keuangan yang canggih dan hemat biaya. 
            Hubungi kami sekarang dan buat koperasi Anda melesat lebih maju!
          </p>
        </div>
        <Image src="/BKK.png" width={400} height={400} alt="Mobile App" />
      </div>

      <div className='homepage bg-white pb-24  mb-50'>
                <div className='container mx-auto px-4 '>
                    <div className="hero items-center">
                        <div className="box">
                            <h1 className='text-4xl/tight  font-bold mb-7 text-center pt-14 px-36'>
                            Mari bergabung dengan 100+ Koperasi lainnya
                            </h1>
                            <p className='text-center px-16 pb-5'>
                            Uji coba gratis 14 hari. Tanpa perlu kartu kredit. Login hanya dalam hitungan detik.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                         Mulai Uji Coba Gratis!
                        </button>
                        </div>
                    </div>
                </div>
                </div>


      {/* Footer */}

    </div>
    <Footer />
    </>
  );
};

export default HargaBKK;
