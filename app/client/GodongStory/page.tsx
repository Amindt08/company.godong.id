import React from "react";
import Footer from '@/components/Footer';

export default function GodongStory() {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="text-center py-20 bg-[#DCE7DA] w-full">
        <h1 className="text-3xl font-bold">Godong tidak dibangun dalam semalam.</h1>
        <h2 className="text-2xl mt-4">Dan berikut adalah perjalanan kami.</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mt-6">
          Pada tahun 2009, di sebuah kos-kosan kecil di pinggiran Kota Madiun,
          muncul sebuah ide sederhana namun inovatif: "Mengembangkan teknologi
          cerdas untuk meningkatkan efisiensi bisnis." Ide inilah yang mendorong
          kami untuk tumbuh menjadi perusahaan teknologi yang diakui oleh
          masyarakat luas.
        </p>
      </section>

      {/* Section 2: Story Image */}
      <section className="flex justify-center items-center bg-white py-0">
        <img src="/image.png" alt="landingpage" className="w-full h-auto object-cover sm:h-97" />
      </section>

  {/* Section 3: Image with Caption and Content */}
  <section className="py-10 bg-gray-50">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-20">
    {/* Bagian Kiri: Gambar dan Caption */}
    <div className="lg:sticky lg:top-20 self-start text-center">
      <div className="w-full max-w-xs mx-auto lg:max-w-none">
        <img src="/ceo.png" alt="Bustanul Asyari" className="rounded-lg mx-auto w-48" />
        <div className="mt-4">
          <div className="font-bold text-lg">Bustanul Asy'ari</div>
          <hr className="border-t-2 border-gray-300 w-1/2 mx-auto my-2" />
          <div className="text-sm text-gray-600">CEO Godong Id</div>
        </div>
      </div>
    </div>
          {/* Bagian Kanan: Konten */}
          <div className="lg:col-span-2 space-y-8">
            {/* Judul dan Konten */}
            <div>
              <h2 className="text-[35px] font-bold text-gray-800">Tingkat Keahlian yang Luar Biasa</h2>
              <p className="text-gray-700 leading-relaxed mt-4">
              Dunia kerja saat ini menuntut kita untuk terus berkembang dan menguasai keterampilan yang unggul. Penguasaan teknologi adalah kunci untuk tetap relevan dalam lingkungan kerja yang terus berubah. Ketika kita memadukan keterampilan teknis dengan pengalaman, kita bukan hanya menjadi pekerja biasa, tapi kita menjadi inovator yang mampu menciptakan solusi baru.<br/><br/>Saat ini, teknologi sudah bukan sekadar alat. Teknologi adalah mitra yang memungkinkan kita untuk melangkah lebih jauh. Kemampuan kita untuk memanfaatkan teknologi ini adalah cermin dari seberapa siap kita menghadapi tantangan masa depan.
              </p>
            </div>
            <div>
              <h2 className="text-[35px] font-bold text-gray-800">Swasta: Menciptakan Nilai, Meraih Kebanggaan</h2>
              <p className="text-gray-700 leading-relaxed mt-4">
              Perusahaan swasta sering kali menjadi pelopor dalam menciptakan nilai bagi pemegang sahamnya. Mereka bangga dengan kemampuan mereka untuk terus mengalirkan profit. Kunci dari keberhasilan ini adalah fokus yang tajam pada efisiensi dan inovasi.<br/><br/>Ketika sektor swasta berfokus pada keuntungan, mereka juga menginspirasi yang lain untuk mengikuti jejak mereka. Hal ini menciptakan siklus kebaikan yang tidak hanya menguntungkan perusahaan, tetapi juga para pekerja dan masyarakat luas.
              </p>
            </div>
            <div>
              <h2 className="text-[35px] font-bold text-gray-800">Perusahaan yang Menjunjung Inovasi</h2>
              <p className="text-gray-700 leading-relaxed mt-4">
              Inovasi adalah denyut nadi bagi perusahaan yang ingin tetap terdepan. Tanpa inovasi, sebuah perusahaan hanya akan berjuang untuk bertahan hidup di pasar yang kompetitif.<br/><br/>Para karyawan di perusahaan inovatif selalu didorong untuk keluar dari zona nyaman mereka. Mereka dibekali dengan keterampilan baru dan diberi ruang untuk berkreasi. Di tempat seperti inilah, ide-ide segar bermunculan dan solusi kreatif tercipta.
              </p>
            </div>
            <div>
              <h2 className="text-[35px] font-bold text-gray-800">Pendekatan Karyawan yang Menyeluruh</h2>
              <p className="text-gray-700 leading-relaxed mt-4">Kesejahteraan karyawan kini tidak hanya diukur dari besarnya gaji. Pendekatan holistik yang mengakui kebutuhan fisik, mental, dan emosional karyawan menjadi semakin penting.<br/><br/>Perusahaan yang memahami ini akan membangun lingkungan kerja yang mendukung pertumbuhan setiap individu. Di sini, karyawan bukan hanya bekerja tetapi mereka juga berkembang, belajar, dan berkontribusi dalam lingkungan yang sehat dan positif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
