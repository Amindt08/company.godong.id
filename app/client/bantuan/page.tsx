'use client';

import Footer from '@/components/Footer';
import React, { useState } from 'react';

type FAQ = {
    question: string;
    answer: string;
};

const Bantuan = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null); // State untuk melacak FAQ yang terbuka
    const [currentPage, setCurrentPage] = useState<number>(1); // State untuk melacak halaman aktif

    // Data FAQ untuk halaman solusi
    const faqs: { [key: number]: FAQ[] } = {
        1: [
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        ],
        2: [
            { question: 'Apakah Godong menyediakan software untuk koperasi?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        ],
        3: [
            { question: 'Berapa lama waktu yang dibutuhkan?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa itu Bantuan Konfigurasi dari Godong.Id?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { question: 'Apa saja yang akan dipelajari?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        ],
    };

    const toggleAnswer = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    // Pagination handling
    const totalPages = Object.keys(faqs).length;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setOpenQuestionIndex(null); // Reset open FAQ saat berpindah halaman
    };

    return (
        <>
            <div>
               {/* Section 1: Hero Section */}
    <section className="flex flex-col sm:flex-row items-center justify-start p-8 bg-gray-100">
    <div className="text-left max-w-xl ml-auto mb-8 sm:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bantuan Konfigurasi</h1>
        <p className="text-1xl text-gray-600">
            Kami menyediakan layanan “Bantuan Konfigurasi” untuk pelanggan godong.id. Simak pertanyaan yang sering diajukan terkait layanan “Bantuan Konfigurasi” berikut.
        </p>
    </div>
    <div className="w-full sm:w-4/5 md:w-1/2 xl:w-2/5 ml-auto">
        <img
            src="/bantuan1.png"
            alt="Support Illustration"
            className="w-full h-auto"
        />
    </div>
    </section>


                {/* Section 2: FAQ Section */}
                <section className="p-8 bg-white flex justify-center">
                    <div className="w-full max-w-3xl">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Question (FAQ) Orientasi</h2>
                        {faqs[currentPage].map((faq: FAQ, index: number) => (
                            <div
                                key={index}
                                className={`p-4 text-lg mb-4 border rounded-lg ${openQuestionIndex === index ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <h3
                                    onClick={() => toggleAnswer(index)}
                                    className="text-lg font-medium text-gray-800 cursor-pointer"
                                >
                                    {faq.question}
                                </h3>
                                {openQuestionIndex === index && (
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Pagination */}
                <section className="flex items-center justify-center space-x-4 py-6">
                    <button
                        className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Sebelum
                    </button>
                    {[...Array(totalPages).keys()].map((page: number) => (
                        <button
                            key={page}
                            className={`px-4 py-2 text-sm ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Lanjut
                    </button>
                </section>
            </div>

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
        </>
    );
};

export default Bantuan;
