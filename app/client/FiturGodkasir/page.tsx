"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react"; 
import Navigation from "@/components/Navigationgodkasir";

const FiturGodKasir = () => {
  return (
     <>
           <div className="fixed bg-white w-full h-[75px]">
          <Navigation />
          </div>
    <div className="font-sans">
      {/* Header Section */}
 <header className="bg-white py-10 mt-[100px] flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-screen-xl mx-auto">
        {/* Deskripsi Kiri */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-5xl font-bold mb-4">
            TINGKATKAN KINERJA DAN EFISIENSI KASIR ANDA DENGAN GODONG KASIR
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto md:mx-0">
            Godong Kasir hadir dengan fitur-fitur utama berikut yang mampu membantu anda dalam mengelola bisnis anda:
          </p>
        </div>

        {/* Gambar Kanan */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src="/kasir.png"
            alt="Deskripsi Gambar"
            className="w-50 h-auto"
          />
        </div>
      </header>

      {/* Section: Feature */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          Godong Kasir Enterprise menyediakan <br /> fitur utama yang Anda butuhkan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          {["Manajemen Inventaris", "Manajemen Pelanggan", "Manajemen Penjualan", "Laporan dan Analitik", "Dukungan Pelanggan"].map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-lg font-medium text-black">
              <CheckCircle className="text-green-700" size={24} />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Management Section */}
      <div className="bg-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Inventaris</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="mb-6">
              <img
                src="/mana.png"
                alt="Deskripsi Gambar"
                className="w-50 h-auto rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-semibold mb-4">Keunggulan</h2>
            <ul className="list-disc text-xl pl-6 space-y-2">
              <li>
                Keunggulan sistem ini terletak pada kemampuannya untuk melacak stok barang secara real-time, memberikan informasi terkini tentang ketersediaan produk dan memungkinkan penyesuaian inventaris dengan cepat.
              </li>
              <li>
                Sistem ini juga dilengkapi dengan fitur peringatan stok rendah yang otomatis, memastikan pengguna mendapatkan notifikasi ketika persediaan mendekati batas minimum, sehingga mencegah kehabisan barang yang penting untuk operasional.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {[
              { title: "Pelacakan Stock", description: "Penjelasan tentang pelacakan stock." },
              { title: "Peringatan Stock Rendah", description: "Penjelasan tentang peringatan stok rendah." },
              { title: "Pengelolaan Supplier", description: "Penjelasan tentang pengelolaan supplier." },
              { title: "Kategori Produk", description: "Penjelasan tentang kategori produk." },
            ].map((feature, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pelanggan Management Section */}
      <div className="bg-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Pelanggan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="mb-6">
              <img
                src="/ber.png"
                alt="Deskripsi Gambar"
                className="w-50 h-auto rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-semibold mb-4">Keunggulan</h2>
            <ul className="list-disc text-xl pl-6 space-y-2">
              <li>
                Keunggulan sistem ini terletak pada POS terintegrasi yang memudahkan proses penjualan di berbagai saluran, baik online maupun offline, dengan sistem yang efisien dan seragam, sehingga meningkatkan kecepatan dan akurasi transaksi.
              </li>
              <li>
                Sistem ini mendukung pemrosesan pembayaran dengan berbagai metode, termasuk tunai, kartu kredit/debit, dan e-wallet, memberikan fleksibilitas kepada pelanggan dan memperluas pilihan pembayaran, yang dapat meningkatkan kepuasan dan kenyamanan pelanggan.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {[
              { title: "Program loyalitas dan poin reward Pelanggan", description: "Penjelasan tentang program loyalitas." },
              { title: "Riwayat pembelian pelanggan", description: "Penjelasan tentang riwayat pembelian pelanggan." },
              { title: "Profile Pelanggan", description: "Penjelasan tentang profil pelanggan." },
              { title: "Diskon dan promosi khusus", description: "Penjelasan tentang diskon dan promosi." },
            ].map((feature, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laporan Management Section */}
      <div className="bg-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Laporan dan Analitik</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="mb-6">
              <img
                src="/lapo.png"
                alt="Deskripsi Gambar"
                className="w-50 h-auto rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-semibold mb-4">Keunggulan</h2>
            <ul className="list-disc text-xl pl-6 space-y-2">
              <li>
                Keunggulan sistem ini terletak pada kemampuannya untuk menghasilkan laporan penjualan harian, mingguan, dan bulanan secara otomatis, memberikan gambaran menyeluruh tentang performa bisnis yang membantu dalam pengambilan keputusan yang lebih cepat dan akurat.
              </li>
              <li>
                Sistem ini juga dilengkapi dengan fitur peringatan stok rendah yang otomatis, memastikan pengguna mendapatkan notifikasi ketika persediaan mendekati batas minimum, sehingga mencegah kehabisan barang yang penting untuk operasional.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {[
              { title: "Laporan berkala", description: "Penjelasan tentang laporan berkala." },
              { title: "Analisis produk dan tren penjualan", description: "Penjelasan tentang analisis produk." },
              { title: "Laporan keuangan dan laba rugi", description: "Penjelasan tentang laporan keuangan." },
              { title: "Dashboard analitik Interaktif", description: "Penjelasan tentang dashboard analitik." },
            ].map((feature, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dukungan Pelanggan Section */}
      <div className="bg-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Dukungan Pelanggan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="mb-6">
              <img
                src="/duk.png"
                alt="Deskripsi Gambar"
                className="w-50 h-auto rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-semibold mb-4">Keunggulan</h2>
            <ul className="list-disc text-xl pl-6 space-y-2">
              <li>
                Keunggulan sistem ini terletak pada layanan dukungan pelanggan 24/7 melalui chat dan email, yang memastikan bahwa pengguna dapat memperoleh bantuan kapan saja mereka membutuhkannya, sehingga masalah dapat diatasi dengan cepat dan operasional bisnis tetap berjalan lancar.
              </li>
              <li>
                Sistem ini dilengkapi dengan pusat bantuan yang komprehensif dan dokumentasi yang lengkap, memudahkan pengguna untuk menemukan solusi dan informasi yang mereka butuhkan secara mandiri, meningkatkan efisiensi dalam penggunaan sistem.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {[
              { title: "Layanan Pelanggan 24/7", description: "Penjelasan tentang layanan pelanggan 24/7." },
              { title: "Pusat bantuan dan dokumentasi", description: "Penjelasan tentang pusat bantuan." },
              { title: "Pelatihan dan onboarding pengguna", description: "Penjelasan tentang pelatihan pengguna." },
              { title: "Dashboard analitik Interaktif", description: "Penjelasan tentang dashboard analitik." },
            ].map((feature, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default FiturGodKasir;