"use client"; 

import Footer from '@/components/Footer';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Pastikan import dari 'next/navigation'

const Support = () => {
  const router = useRouter(); // Inisialisasi router untuk navigasi
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set state ketika komponen sudah dipasang
  }, []);

  // Fungsi untuk navigasi ke halaman lain dengan menambahkan tipe parameter
  const navigateToPage = (page: string) => {
    if (router) {
      router.push(page); // Navigasi ke halaman berdasarkan path yang diterima
    }
  };

  if (!isMounted) {
    return null; // Menghindari kesalahan render saat belum dipasang
  }

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-100 py-10 px-5 md:px-10 flex flex-col md:flex-row items-center">
        {/* Gambar Kiri (di atas pada layar kecil, di samping pada layar medium ke atas) */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/su1.png"
            alt="Deskripsi Gambar"
            className="w-32 sm:w-40 md:w-60 lg:w-72 h-auto transition-all duration-300"
          />
        </div>

        {/* Deskripsi Kanan */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Selamat Datang di Layanan Godong</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto md:mx-0">
            Kami hadir untuk mendukung dan mempercepat kesuksesan bisnis Anda. Temukan solusi terbaik untuk memenuhi kebutuhan Anda,
            dengan layanan yang profesional didukung oleh teknologi terkini. Bersama kami, kembangkan potensi bisnis Anda ke level berikutnya.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-200 py-4">
        <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10 text-center">
          <li>
            <a href="#layanan" className="text-xl md:text-2xl text-green-700 hover:underline">
              Rencana Layanan
            </a>
          </li>
          <li>
            <a href="#dukungan" className="text-xl md:text-2xl text-green-700 hover:underline">
              Layanan Dukungan
            </a>
          </li>
          <li>
            <a href="#kontak" className="text-xl md:text-2xl text-green-700 hover:underline">
              Kontak Kami
            </a>
          </li>
        </ul>
      </nav>
{/* Service Plans */}
<div className="text-center mb-6 px-4 md:px-8">
  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
    Rencana Layanan Kami
  </h2>
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
    Kami menawarkan berbagai rencana dukungan yang mencakup semua ukuran 
    bisnis, mulai dari onboarding dengan panduan hingga dukungan teknis 24/7.
  </p>
</div>


        <section className="py-10 px-5">
  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {/* Paket Klasik */}
    <div className="border rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">Paket Klasik</h3>
      <span className="block bg-green-500 text-white text-center text-sm rounded-full px-3 py-2 mb-5 max-w-max mx-auto">
        Untuk UMKM
      </span>
      <p className="text-gray-600 text-center">
        Penjelasan Paket Klasik yang disediakan untuk UMKM.
      </p>
    </div>

    {/* Paket Perusahaan */}
    <div className="border rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">Paket Perusahaan</h3>
      <span className="block bg-yellow-500 text-white text-center text-sm rounded-full px-3 py-2 mb-5 max-w-max mx-auto">
        Untuk Bisnis Menengah
      </span>
      <p className="text-gray-600 text-center">
        Penjelasan Paket Perusahaan yang disediakan untuk bisnis besar.
      </p>
    </div>

    {/* Paket Premium */}
    <div className="border rounded-lg p-10 shadow-lg sm:col-span-2 lg:col-span-1">
      <h3 className="text-xl font-bold mb-7 text-center">Paket Premium</h3>
      <span className="block bg-blue-500 text-white text-center text-sm rounded-full px-3 py-2 mb-5 max-w-max mx-auto">
        Untuk Bisnis Besar
      </span>
      <p className="text-gray-600 text-center">
        Penjelasan Paket Premium yang disediakan untuk kebutuhan lebih besar.
      </p>
    </div>
  </div>
</section>



{/* Layanan Dukungan */}
<section id="dukungan" className="py-24 bg-white">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold mb-4">Layanan Dukungan</h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
      Kami menawarkan solusi yang menyeluruh untuk mendukung pertumbuhan bisnis Anda, baik skala kecil maupun besar.
    </p>
  </div>

  <div className="space-y-24 max-w-6xl mx-auto px-5">
    {/* Solusi Menyeluruh */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src="/solusi.png" alt="Solusi Menyeluruh" className="w-2/3 md:w-1/3 h-auto" />
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-4">Solusi Menyeluruh</h3>
        <p className="text-gray-600 text-lg mb-6">
          Jika Anda menjalankan bisnis skala menengah hingga besar dan menginginkan implementasi produk kami yang lancar dan menyeluruh, Layanan Godong.id adalah pilihan yang tepat.
        </p>
        <button className="bg-green-500 text-white px-5 py-3 rounded-md">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>

    {/* Bantuan Konfigurasi */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
      <img src="/bantuan.png" alt="Bantuan Konfigurasi" className="w-2/3 md:w-1/3 h-auto" />
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-4">Bantuan Konfigurasi</h3>
        <p className="text-gray-600 text-lg mb-6">
          Ingin memulai tanpa proses pengaturan awal dan segera memulai? Kami siap membantu dengan layanan Godong.id Jumpstart.
        </p>
        <button className="bg-green-500 text-white px-5 py-3 rounded-md">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>

    {/* Pelatihan Produk */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src="/pelatihan.png" alt="Pelatihan Produk" className="w-2/3 md:w-1/3 h-auto" />
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-4">Pelatihan Produk</h3>
        <p className="text-gray-600 text-lg mb-6">
          Daftarlah untuk pelatihan langsung yang disesuaikan dengan kebutuhan Anda dan biarkan pelatih ahli dari Godong.Id membimbing Anda.
        </p>
        <button className="bg-green-500 text-white px-5 py-3 rounded-md">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  </div>
</section>

<div className="max-w-6xl mx-auto px-5 py-24">
  {/* Kontak Kami */}
  <section id="kontak" className="bg-gray-50 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Deskripsi Kontak */}
      <div>
        <h2 className="text-4xl font-bold mb-6">Kontak Kami</h2>
        <p className="text-gray-600 text-lg">
          Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini atau praktik privasi kami, silakan hubungi kami melalui:
        </p>
      </div>

      {/* Informasi Kontak */}
      <div className="space-y-8">
        {/* Lokasi */}
        <div className="flex items-start">
          <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full">
            📍
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Lokasi</h3>
            <p className="text-gray-600 text-sm">
              Jl. Letkol Suwarno Ruko Bale Lintang No.2, Kota Madiun - Jawa Timur
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full">
            📧
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600 text-sm">info@godong.id</p>
          </div>
        </div>

        {/* Telepon */}
        <div className="flex items-start">
          <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full">
            📞
          </div>
          <div className="ml-4">
            <h3 className="textlg font-semibold">Telepon</h3>
            <p className="text-gray-600 text-sm">0811-3036-09</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    <Footer />
    </div>

  );
};  

export default Support;
