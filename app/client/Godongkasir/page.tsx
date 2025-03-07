import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigationgodkasir";

const GodongKasir: React.FC = () => {
  return (
    <>
       <div className="absolute  bg-white w-full h-[75px]">
      <Navigation />
      </div>
      <div>
        {/* Section 1 */}
        <section className="bg-[#DCE7DA] py-[120px] px-5 text-center pb-13 ">
          <div className="max-w-[800px] mx-auto"> 
            <h1 className="font-bold text-black text-[36px] mt-5 ">
              Selamat Datang di Era Baru
            </h1>
            <h2 className="font-bold text-black text-[36px] ">
              Manajemen Kasir Cerdas dan Terintegrasi
            </h2>
            <p className="text-black text-base text-[24px]">
              Ubah cara bisnis Anda menangani transaksi dengan{" "}
              <strong>Godong Kasir Versi Website</strong> yang modern. Sistem kami
              dirancang untuk mempermudah pengelolaan kasir Anda dengan fitur yang
              terintegrasi, memonitor penjualan, serta memberikan laporan keuangan
              yang komprehensif.
            </p>
          </div>
        </section>

        {/* Section 2 */}
<section className="flex flex-col md:flex-row items-center justify-center py-10 bg-[#FFFFFF]">
  <div className="flex flex-col md:flex-row items-center gap-5 max-w-[1200px] mx-auto">
    {/* Gambar (Di atas saat ukuran kecil) */}
    <img
      src="/BKK.png"
      alt="Dashboard Godong Kasir"
      className="w-full md:w-[50%] rounded-lg order-1 md:order-2"
    />
    {/* Deskripsi (Di bawah saat ukuran kecil) */}
    <div className="w-full md:w-[50%] text-center md:text-left order-2 md:order-1">
      <h2 className="font-bold text-black text-[24px] md:text-[30px] mb-2">
        Optimalkan Efisiensi Operasional Bisnis Anda dengan Godong Kasir!
      </h2>
      <p className="text-black text-[16px] md:text-[18px] leading-tight">
        Ubah cara bisnis Anda menangani transaksi dengan Godong Kasir versi Website yang modern.
        Sistem kami dirancang untuk mempermudah pengelolaan kasir Anda dengan fitur yang terintegrasi,
        memonitor penjualan, serta memberikan laporan keuangan yang komprehensif.
      </p>
    </div>
  </div>
</section>



        {/* Section 3 */}
        <section
  className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-5"
  style={{ backgroundImage: 'url("/BAR.png")' }}
>
  <div className="absolute inset-0 bg-white bg-opacity-60"></div>
  <div className="relative z-10 text-center max-w-2xl">
    <p className="text-black text-sm tracking-wide uppercase mb-3">
      UNTUK MEMPERMUDAH PEKERJAAN ANDA
    </p>
    <h2 className="font-bold text-black text-2xl md:text-[32px] mb-5">
      Manajemen Transaksi dan Kasir yang Mudah dan Aman!
    </h2>
    <p className="text-black text-base md:text-[20px] text-center leading-6">
      Dengan Godong Kasir versi Website, Anda dapat dengan mudah memantau semua transaksi penjualan dari berbagai cabang,
      memproses pembayaran dengan cepat, dan memberikan pengalaman belanja terbaik bagi pelanggan Anda.
    </p>
  </div>
</section>


        {/* Section 4 */}
        <section className="bg-white py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center">
      <div className="md:w-1/2 pr-10">
        <h2 className="text-2xl md:text-[40px] font-bold text-black leading-snug">
          Mengapa Pilih<br />Godong Kasir untuk<br />Bisnis Anda?
        </h2>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0">
        <div>
          <h3 className="font-bold text-black">Efisiensi Operasional</h3>
          <p className="text-gray-600">
            Automatisasi proses manajemen inventaris dan penjualan mengurangi kesalahan manusia dan meningkatkan produktivitas.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-black">Keputusan Berbasis Data</h3>
          <p className="text-gray-600">
            Laporan dan analitik membantu pemilik minimarket membuat keputusan bisnis yang lebih baik dan berdasarkan data.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-black">Peningkatan Layanan Pelanggan</h3>
          <p className="text-gray-600">
            Fitur manajemen pelanggan dan program loyalitas meningkatkan kepuasan dan retensi pelanggan.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-black">Keamanan dan Kepatuhan</h3>
          <p className="text-gray-600">
            Perlindungan data pelanggan dan transaksi dengan standar keamanan yang tinggi.
          </p>
        </div>
      </div>
    </section>

        <Footer />
      </div>
    </>
  );
};

export default GodongKasir;