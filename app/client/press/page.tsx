"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer"; // Pastikan path ke Footer sudah benar

// Tipe untuk data press release
interface PressReleaseItem {
  month: string;
  items: string[];
}

interface PressReleaseData {
  [year: string]: PressReleaseItem[];
}

const PressRelease = () => {
  // Data konten berdasarkan tahun
  const data: PressReleaseData = {
    "2024": [
      {
        month: "Agustus 2024",
        items: [
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong",
        ],
      },
      {
        month: "Agustus 2024",
        items: [
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong",
        ],
      },
      {
        month: "Agustus 2024",
        items: [
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong",
        ],
      },
      {
        month: "Agustus 2024",
        items: [
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong",
        ],
      },
       {
        month: "Agustus 2024",
        items: [
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong kasir",
          "Godong release tentang godong",
        ],
      },
      // Data lainnya
    ],
    "2023": [
      {
        month: "Juli 2023",
        items: [
          "Godong release tentang laporan 2023",
          "Fitur baru dirilis",
          "Peningkatan sistem keamanan",
        ],
      },
      {
        month: "Juli 2023",
        items: [
          "Godong release tentang laporan 2023",
          "Fitur baru dirilis",
          "Peningkatan sistem keamanan",
        ],
      },
      {
        month: "Juli 2023",
        items: [
          "Godong release tentang laporan 2023",
          "Fitur baru dirilis",
          "Peningkatan sistem keamanan",
        ],
      },
      {
        month: "Juli 2023",
        items: [
          "Godong release tentang laporan 2023",
          "Fitur baru dirilis",
          "Peningkatan sistem keamanan",
        ],
      },
      {
        month: "Juli 2023",
        items: [
          "Godong release tentang laporan 2023",
          "Fitur baru dirilis",
          "Peningkatan sistem keamanan",
        ],
      },
    ],
    "2022": [
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
      {
        month: "Mei 2022",
        items: [
          "Peluncuran awal Godong",
          "Pengenalan fitur kasir",
          "Godong mulai digunakan di beberapa bisnis kecil",
        ],
      },
    ],
  };

  // State untuk melacak tahun yang dipilih
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  return (
    <>
  {/* Section 1 */}
<section style={{ background: 'linear-gradient(to bottom, #DCE7DA 70%, #ffffff 50%)' }}>
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-center text-3xl sm:text-[40px] font-bold mb-8">Press Releases</h2>
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center text-center sm:text-left">
      <img
        src="/ceo.png" // Gantilah dengan path gambar yang benar
        alt="Bustanul Asy'ari"
        className="w-32 h-32 sm:w-44 sm:h-44 mb-4 sm:mb-0 sm:mr-8 rounded-full"
      />
      <div className="max-w-full sm:max-w-lg">
        <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
          <span className="text-xl sm:text-2xl font-bold text-black mr-2">“</span>
          KutipanKutipanKutipanKutipanKutipanKutipanKutipanKutipan
          KutipanKutipanKutipanKutipanKutipanKutipanKutipan
          <span className="text-xl sm:text-2xl font-bold text-black ml-2">”</span>
        </p>
        <p className="font-semibold text-sm sm:text-base">Bustanul Asy'ari</p>
        <p className="text-xs sm:text-sm text-gray-500">CEO of Godong</p>
      </div>
    </div>
  </div>
</section>


      {/* Section 2 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex">
          {/* Sidebar */}
          <div className="w-1/5">
          <ul className="space-y-4 text-green-700 text-[24px] mt-40">
  {Object.keys(data)
    .reverse() // Membalik urutan tahun
    .map((year) => (
      <li
        key={year}
        className={`relative cursor-pointer transition-all duration-300 ease-in-out ${
          selectedYear === year
            ? "text-green-900 font-bold scale-110 after:block after:absolute after:right-[70px] after:top-1/2 mr-[40px] after:translate-y-[-50%] after:w-[30px] after:h-[3px] after:bg-green-700" // Membesar saat dipilih
            : "scale-90" // Menyusut saat tidak dipilih
        }`}
        onClick={() => setSelectedYear(year)}
      >
        {year}
      </li>
    ))}
</ul>


          </div>

          {/* Content */}
          <div className="w-4/5">
            {/* Title */}
            <h2 className="text-[40px] font-bold text-center mb-8 mr-20">{selectedYear}</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data[selectedYear].map((card: PressReleaseItem, index: number) => (
                <div key={index} className="bg-[#E3E8DE] p-4 rounded-lg shadow relative">
                 <p className="text-sm font-semibold text-black mb-2 bg-[#88AF8A] inline-block rounded-lg px-4 py-1">{card.month}</p>

                  <ul className="text-gray-600 text-sm">
                    {card.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PressRelease;
