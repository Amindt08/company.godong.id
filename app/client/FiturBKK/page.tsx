import { CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import React from "react";
import Navigation from "@/components/NavigationBKK";


const FiturBKK = () => {
  return (
    <>
      <div className="fixed bg-white w-full h-[75px] shadow-md">
      <Navigation />
      </div>
    <div>
    <div className="mt-[100px]">
      {/* Section: Feature */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          TINGKATKAN KINERJA KOPERASI ANDA <br /> DENGAN FITUR - FITUR KAMI
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
          Core System Koperasi BKK hadir dengan berbagai fitur lengkap yang siap digunakan kapan saja, di mana saja.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          {["Simpanan", "Simpanan Berjangka", "Pinjaman", "Akutansi", "Tingkat Kesehatan Koperasi/CAMEL"].map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-lg font-medium text-black">
              <CheckCircle className="text-green-700" size={24} />
              {feature}
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Section: Simpanan */}
      {["Simpanan", "Simpanan Berjangka", "Pinjaman", "Tingkat Kesehatan Koperasi/CAMEL"].map((title, index) => (
        <div key={index} className="flex flex-col md:flex-row p-6 gap-6 mb-40 items-center">
          {/* Bagian Kiri (Gambar) */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <img src="/ka.png" alt="Gambar Utama" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
            <div className="flex gap-4 w-full max-w-md">
              <img src="/ka1.png" alt="Gambar 1" className="w-1/2 h-auto rounded-lg shadow-lg" />
              <img src="/ka2.png" alt="Gambar 2" className="w-1/2 h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Bagian Kanan (Teks dan Menu) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-600 text-xl mt-2">penjelasanpenjelasanpenjelasan...</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Fitur 1", "Fitur 2", "Fitur 3", "Fitur 4"].map((feature, idx) => (
                <div key={idx}>
                  <h2 className="font-bold text-2xl">{feature}</h2>
                  <p className="text-gray-600 text-xl">penjelasan...</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold mt-6 text-2xl">Keunggulan</h2>
            <ul className="mt-2 text-gray-600 text-xl">
              <li className="flex items-start gap-2">
                ✅ Keunggulan program ini terletak pada kemampuan program untuk menampilkan spesimen nasabah sesuai nomor rekening.
              </li>
              <li className="flex items-start gap-2 mt-2">
                ✅ Sistem perhitungan tabungan dapat dilakukan dengan metode harian dan metode saldo minimum.
              </li>
            </ul>
          </div>
        </div>
      ))}
      
      <Footer />
    </div>
    </>
  );
};

export default FiturBKK;
