'use client';
import React from 'react'
import Footer from '@/components/Footer';
import Navigation from "@/components/NavigationMobile";


const MobileKasirLite = () => {
    return (
        <>
              <div className="fixed bg-white w-full h-[90px] shadow-md">
              <Navigation />
              </div>
        <div className="h-screen flex flex-col">
           
            <section className="bg-white py-20 px-8 text-center mt-32">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 px-20">
                Solusi Kasir Mobile Terbaik untuk UMKM dan Bisnis Kecil
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8">
                Godong Kasir Mobile Lite – Pengelolaan Bisnis dalam Genggaman Anda
            </p>

            {/* CTA Button */}
            <button className="g-godongText text-white px-6 py-3 rounded-sm text-lg hover:bg-green-800 focus:bg-green-800 focus:outline-none">
                MULAI UJI COBA GRATIS
            </button>

            {/* Hero Image */}
            <div className="mt-10">
                <img
                    src="/Laptop_Mockup_Instagram_Post.png"
                    alt="Hero Phones"
                    className="mx-auto w-full"
                />
            </div>
        </section>
        
        <div className="pb-10 pl-16 md:mx-20">
                {/* Filters Section */}
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2 text-center pt-24">
                        <h1 className="text-3xl mb-4 font-semibold">Apa Itu Godong Kasir Mobile Lite?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minima illum cumque pariatur quaerat? Dignissimos, distinctio culpa laboriosam neque fugiat voluptate hic ad harum eum nemo in, voluptatem molestiae dolorem?</p>
                    </div>

                    {/* Job Search Section */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">
                        {/* Gambar Pertama */}
                        <img
                            src="/hp.png"
                            alt="ILUSTRATION"
                            className="w-1/2 relative -z-10"
                        />
                        {/* Gambar Kedua */}
                        <img
                            src="/hp.png"
                            alt="ILUSTRATION"
                            className="w-1/2 absolute top-8 left-8 opacity-80 -z-20"
                        />
                    </div>

                </div>
            </div>

            <div className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-56">
                <div className="w-full text-center pt-16 sm:pt-20 lg:pt-24">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                        Mengapa Bisnis Anda Membutuhkan Godong Kasir Mobile Lite?
                    </h1>
                    <p className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minima illum cumque pariatur quaerat? 
                        Dignissimos, distinctio culpa laboriosam neque fugiat voluptate hic ad harum eum nemo in, voluptatem 
                        molestiae dolorem?
                    </p>
                </div>
            </div>


            <div className="md:mx-20">
                <div className="w-full text-center pt-24 ">
                        <h1 className="text-3xl font-semibold">Manfaat Menggunakan Godong Kasir Mobile Lite</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10'>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                <img src="/easy.png" alt="" className='w-20 h-auto'/>
                                <h1 className='font-semibold pt-2 pb-4'>Mudah dan Cepat</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet dicta, 
                                    sunt laborum voluptates illo distinctio in, molestias alias expedita assumenda 
                                    tempore quos est nobis. Adipisci quisquam ab fuga aperiam.
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                <img src="/hemat.png" alt="" className='w-20 h-auto'/>
                                <h1 className='font-semibold pt-2 pb-4'>Hemat Waktu</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet dicta, 
                                    sunt laborum voluptates illo distinctio in, molestias alias expedita assumenda 
                                    tempore quos est nobis. Adipisci quisquam ab fuga aperiam.
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                <img src="/easy.png" alt="" className='w-20 h-auto'/>
                                <h1 className='font-semibold pt-2 pb-4'>Akses Kapan Saja dan Dimana Saja</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet dicta, 
                                    sunt laborum voluptates illo distinctio in, molestias alias expedita assumenda 
                                    tempore quos est nobis. Adipisci quisquam ab fuga aperiam.
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                <img src="/aman.png" alt="" className='w-20 h-auto'/>
                                <h1 className='font-semibold pt-2 pb-4'>Keamanan Terjamin</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet dicta, 
                                    sunt laborum voluptates illo distinctio in, molestias alias expedita assumenda 
                                    tempore quos est nobis. Adipisci quisquam ab fuga aperiam.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default MobileKasirLite