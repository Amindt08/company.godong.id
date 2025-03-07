import React from 'react';
import Footer from '@/components/Footer';
import Navigation from "@/components/NavigationMobile";

const HargaGodongKasirMobile = () => {
    return (
        <div>
            <div className="fixed bg-white w-full h-[75px] z-50">
                <Navigation />
            </div>

            <div className="h-screen flex flex-col">
                <section className="bg-white py-20 text-center mt-32 sm:px-10 md:px-20 lg:px-32">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 sm:px-6 md:px-12 lg:px-20">
                        Nikmati Fitur Canggih dengan Harga Super Terjangkau!
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nihil a vero hic, ipsa, corrupti adipisci laudantium at obcaecati atque quaerat odit eveniet non sunt beatae, soluta blanditiis autem?
                    </p>
                </section>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 sm:px-20 md:px-32 lg:px-52">
                    <img
                        src="/gambkk.png"  
                        alt="Logo BKK"
                        className="w-12 h-12"
                    />
                    <div>
                        <h3 className="text-lg font-medium text-gray-600">Untuk Koperasi</h3>
                        <h2 className="text-xl font-semibold text-primary">BKK</h2>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg max-w-4xl mx-auto mb-20">
                    {/* Bagian Kiri */}
                    <div className="flex-1 p-6">
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officia quidem eveniet minima, temporibus tempora soluta et 
                            aspernatur fugiat assumenda id eum nemo eos inventore nostrum 
                            necessitatibus fuga voluptatum voluptatibus laborum?                    
                        </p>
                        <div className="text-3xl font-semibold text-neutral mb-4">
                            Rp 199.000<span className="text-lg font-normal text-gray-600">/bulan</span>
                        </div>
                        <button className="bg-coba hover:bg-green-600 text-white py-2 px-4 rounded-full">
                            Get started
                        </button>
                    </div>

                    {/* Bagian Kanan */}
                    <div className="flex-1 bg-include p-6 bg-green-200">
                        <h4 className="text-lg font-semibold text-primary mb-4">INCLUDE</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="text-green-500 text-xl mr-3">✔</span> include...
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 text-xl mr-3">✔</span> include...
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 text-xl mr-3">✔</span> include...
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 text-xl mr-3">✔</span> include...
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:mx-20">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* Gambar di Sebelah Kiri */}
                        <div className="w-full lg:w-1/2 flex justify-center relative">
                            <img
                                src="/BKK.png"  
                                alt="Ilustrasi Laptop Mockup"
                                className="relative -z-10 max-w-full"
                            />
                        </div>

                        {/* Tulisan di Sebelah Kanan */}
                        <div className="w-full lg:w-1/2 text-center pt-10 lg:pt-0 px-4 lg:px-10">
                            <h1 className="text-3xl mb-4 font-semibold">
                                Tidak perlu membayar lebih untuk mendapatkan kualitas terbaik!
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                                minima illum cumque pariatur quaerat? Dignissimos, distinctio
                                culpa laboriosam neque fugiat voluptate hic ad harum eum nemo
                                in, voluptatem molestiae dolorem?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-5 sm:px-10 md:px-20 lg:px-60">
  <div className="w-full text-center pt-20 sm:pt-24 lg:pt-32">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight px-10 sm:px-20">
      Mari bergabung dengan 100+ Koperasi lainnya
    </h1>
    <p className="pt-6 sm:pt-8 text-lg sm:text-xl md:text-2xl text-gray-700">
      Uji coba gratis 14 hari. Tanpa perlu kartu kredit. Login hanya dalam hitungan detik.
    </p>
    <button className="bg-godongButton text-green-600 px-6 py-3 text-lg sm:text-xl font-medium rounded-md my-12 shadow-md hover:scale-105 transition-transform">
      MULAI UJI COBA GRATIS
    </button>
  </div>
</div>


                <Footer />
            </div>
        </div>
    );
};

export default HargaGodongKasirMobile;
