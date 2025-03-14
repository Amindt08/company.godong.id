'use client';
import React from 'react'
import Footer from '@/components/Footer';
import Navigation from "@/components/NavigationMobile";
import GetTitleById from '@/components/CMS_MK_Lite_Page/Title/page';
import GetDeskripsiById from '@/components/CMS_MK_Lite_Page/Deskripsi/page';
import GetImageById from '@/components/CMS_MK_Lite_Page/Image/page';


const MobileKasirLite = () => {
    return (
        <div className='font-poppins'>
            <div className="fixed bg-white w-full h-[90px] shadow-md">
                <Navigation />
            </div>
            <div className="h-screen flex flex-col">

                <section className="bg-white py-20 px-8 text-center mt-32">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 px-20">
                        <GetTitleById id={1}/>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-8">
                        <GetDeskripsiById id={1}/>
                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#538055] text-white px-6 py-3 rounded-sm text-lg hover:bg-green-800 focus:bg-green-800 focus:outline-none">
                        MULAI UJI COBA GRATIS
                    </button>

                    {/* Hero Image */}
                    <div className="mt-10">
                        {/* <img
                            src="/Laptop_Mockup_Instagram_Post.png"
                            alt="Hero Phones"
                            className="mx-auto w-full"
                        /> */}
                        <GetImageById id={2}/>
                    </div>
                </section>

                <div className="pb-10 pl-16 md:mx-20">
                    {/* Filters Section */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-1/2 text-center pt-24">
                            <h1 className="text-3xl mb-4 font-semibold"><GetTitleById id={2}/></h1>
                            <p><GetDeskripsiById id={2}/></p>
                        </div>

                        {/* Job Search Section */}
                        <div className="w-full lg:w-1/2 flex justify-center relative">
                            {/* Gambar Pertama */}
                            <img
                                src="/Godong_Mockup_Mobile.png"
                                alt="ILUSTRATION"
                                className="w-1/2 relative -z-10"
                            />
                            {/* <GetImageById id={3}/> */}
                            {/* Gambar Kedua */}
                            <img
                                src="/Godong_Mockup_Mobile.png"
                                alt="ILUSTRATION"
                                className="w-1/2 absolute top-8 left-8 opacity-80 -z-20"
                            />
                            {/* <GetImageById id={3}/> */}
                        </div>

                    </div>
                </div>

                <div className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-56">
                    <div className="w-full text-center pt-16 sm:pt-20 lg:pt-24">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                            <GetTitleById id={3}/>
                        </h1>
                        <p className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg">
                            <GetDeskripsiById id={3}/>
                        </p>
                    </div>
                </div>


                <div className="md:mx-20">
                    <div className="w-full text-center pt-24 ">
                        <h1 className="text-3xl font-semibold"><GetTitleById id={4}/></h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10'>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                {/* <img src="/easy.png" alt="" className='w-20 h-auto' /> */}
                                <GetImageById id={4}/>
                                <h1 className='font-semibold pt-2 pb-4'><GetTitleById id={5}/></h1>
                                <p>
                                    <GetDeskripsiById id={4}/>
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                {/* <img src="/hemat.png" alt="" className='w-20 h-auto' /> */}
                                <GetImageById id={5}/>
                                <h1 className='font-semibold pt-2 pb-4'><GetTitleById id={6}/></h1>
                                <p>
                                <GetDeskripsiById id={5}/>
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                {/* <img src="/easy.png" alt="" className='w-20 h-auto' /> */}
                                <GetImageById id={6}/>
                                <h1 className='font-semibold pt-2 pb-4'><GetTitleById id={7}/></h1>
                                <p>
                                <GetDeskripsiById id={6}/>
                                </p>
                            </div>
                            <div className='bg-slate-100 p-4 items-center text-center flex flex-col m-2'>
                                {/* <img src="/aman.png" alt="" className='w-20 h-auto' /> */}
                                <GetImageById id={7}/>
                                <h1 className='font-semibold pt-2 pb-4'><GetTitleById id={8}/></h1>
                                <p>
                                <GetDeskripsiById id={7}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MobileKasirLite