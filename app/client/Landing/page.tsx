

import { ArrowBigDown, ArrowRight, CircleArrowRight, CirclePlay, Phone, Store } from 'lucide-react'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Footer from '@/components/Footer'
import Link from 'next/link';
import Side from '@/components/side'
import DeskripsiDetail from "@/components/DeskripsiDetail";
// import ImageFetcher from "@/components/ImageFetcher";
import GetTitleById from '@/components/CMS_Landing/Title/page';
import GetDeskripsiById from '@/components/CMS_Landing/Deskripsi/page';
import GetImageById from '@/components/CMS_Landing/Image/page';



export default function Landing() {
    const buttonText = "Try Godong Free"

    const BusinessServiceCard = ({ title, description }: any) => {
        return (
            <div className='rounded-lg p-4 flex flex-col items-center'>
                <Store className='mb-2' />
                <h1 className='md:font-medium sm:text-xl'>{title}</h1>
                <p className='text-sm text-gray-600 text-center'>{description}</p>
            </div>
        );
    };

    const DashedArrow = () => (
        <div className="hidden md:flex items-center">
            <DashedLine />
            <ArrowRight className="w-4 h-4 text-[#366938]" />
        </div>
    );

    const products = [
        { name: "Godong Laku", img: "/logolaku.png", link: "/client/BKK" },
        { name: "Mobile Laku", img: "/bilku.png", link: "" },
        { name: "Godong Kasir", img: "/gosir.png", link: "/client/Godongkasir" },
        { name: "Mobile Kasir", img: "/sibil.png", link: "/client/Mobilekasir" },
        { name: "Godong Pharmacy", img: "/par.png", link: "" },
        { name: "Godong Hardware", img: "/werr.png", link: "" },
    ];

    const StepCard = ({ number, text }: any) => {
        return (
            <div className="w-[165px] h-[140px] relative hidden sm:block">
                <div className="w-[137.67px] h-[140px] left-[5.16px] top-0 absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[119.32px] h-[121.33px] left-[14.34px] top-[9.33px] absolute bg-[#88af89] rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[87.19px] h-[88.67px] left-[30.40px] top-[25.67px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-3 h-[12.25px] left-[135.95px] top-[63.58px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-3 h-[12.25px] left-0 top-[63.58px] absolute bg-white rounded-full border-2 border-[#88af89]"></div>
                <div className="w-[26.39px] h-[30.92px] left-[60.81px] top-[40.25px] absolute border-[#88af89] flex-col justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-[#2e2e2e] text-[44px] font-bold font-['Urbanist']">{number}</div>
                </div>
                <div className="w-[143px] left-0 top-[182px] absolute text-center text-[#07484a] text-2xl font-bold font-['Poppins']">{text}</div>
            </div>
        );
    };

    const DashedLine = () => {
        return (
            <div className="border-t-2 border-dashed border-[#366938] w-16"></div>
        );
    };

    const TestimonialCard = ({ content, name, role }: any) => {
        return (
            <CarouselItem>
                <div className="bg-[#F5F5F5] rounded-lg p-6 shadow-lg">
                    <div className="flex items-start mb-4">
                        <div className="flex-shrink-0">
                            <div className="text-[#366938] text-4xl font-serif">"</div>
                        </div>
                        <div className="ml-4">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                {content}
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/org3.jpg"
                                    alt="User Avatar"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-900">{name}</h4>
                                    <p className="text-sm text-gray-500">{role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        )
    }

    const NewsCard = ({ item }: any) => {
        return (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    src="/teh.jpg"
                    alt="Berita Franchise"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">
                        Bisnis Franchise Es Teh Semesta Rasanya, Begini Harga Buka Usahanya
                    </h3>

                    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                        <div className="flex items-center gap-2">
                            <span className='text-black'>21 Februari 2024 |</span>
                            <span>by Ngajen Explore</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76318 14.6923C8.76318 14.6923 0 7.46597 0 4.90004C0 2.16801 1.60257 0.846191 4.92929 0.846191C6.57239 0.846191 8.76318 3.07984 8.76318 3.07984C8.76318 3.07984 10.954 0.846191 12.5971 0.846191C15.9238 0.846191 17.5264 2.16715 17.5264 4.90004C17.5264 7.46597 8.76318 14.6923 8.76318 14.6923Z" fill="#C31815" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3365 14.6923H1.02804C0.459533 14.6923 0 14.3055 0 13.8278V5.17311C0 4.69542 0.459533 4.30773 1.02804 4.30773H2.5701V5.17311H1.54206C1.25832 5.17311 1.02804 5.36783 1.02804 5.60581V13.3943C1.02804 13.634 1.25832 13.8278 1.54206 13.8278H11.8224C12.1052 13.8278 12.3365 13.634 12.3365 13.3943V5.60581C12.3365 5.36783 12.1052 5.17311 11.8224 5.17311H10.7944V4.30773H12.3365C12.9039 4.30773 13.3645 4.69542 13.3645 5.17311V13.8278C13.3645 14.3055 12.9039 14.6923 12.3365 14.6923ZM8.909 3.75123L7.19627 2.30949V10.7981C7.19627 11.037 6.96496 11.2308 6.68225 11.2308C6.39851 11.2308 6.16823 11.037 6.16823 10.7981V2.30949L4.4545 3.75123C4.25917 3.91652 3.94042 3.91652 3.74509 3.75123C3.54976 3.58767 3.54976 3.31857 3.74509 3.15501L6.28444 1.01659C6.28752 1.01312 6.29365 1.01149 6.29674 1.00803C6.30805 0.996778 6.30398 0.980298 6.31632 0.969048C6.33585 0.953471 6.36352 0.958663 6.38408 0.946547C6.46016 0.894624 6.54855 0.859116 6.65239 0.853058C6.66061 0.853058 6.6679 0.848727 6.6751 0.848727C6.67818 0.848727 6.68017 0.846191 6.68326 0.846191C6.68634 0.846191 6.68846 0.847861 6.69154 0.848727C6.69771 0.847861 6.70181 0.851368 6.70798 0.851368C6.83032 0.85656 6.94128 0.897192 7.02661 0.961231C7.0338 0.967289 7.04516 0.964701 7.05133 0.969893C7.0575 0.976816 7.05442 0.986357 7.06162 0.991549C7.06573 0.995011 7.06466 1.00191 7.06877 1.00623L9.62042 3.15501C9.81678 3.31857 9.81678 3.58767 9.62042 3.75123C9.42304 3.91738 9.10536 3.91738 8.909 3.75123Z" fill="#2A2A2A" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.5L0 14V1C0 0.447716 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V14L7 10.5ZM12.6 1.875C12.6 1.32272 12.1523 0.875 11.6 0.875H2.4C1.84771 0.875 1.4 1.32272 1.4 1.875V12.25L7 9.1875L12.6 12.25V1.875Z" fill="#2A2A2A" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className='font-poppins h-full bg-white'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center px-4 lg:px-16 py-8 lg:py-20 mb-10 '>
                <div className='mt-20'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-[#1A1A1A] leading-tight'>
                        <GetTitleById id={1} />
                    </h1>
                    <p className='text-gray-600 mt-4 text-lg text-justify'>
                        <GetDeskripsiById id={1} />
                    </p>
                    <button className='mt-8 bg-[#366938] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2'>
                        {buttonText}
                        <CircleArrowRight />
                    </button>
                </div>
                <div className='hidden justify-center sm:flex'>
                    <GetImageById id={2} />
                </div>
            </div>


            <div className='bg-gradient-to-b from-white via-[#D4E2D2] to-white'>
                <h2 className='text-2xl lg:text-4xl font-bold mb-8 text-center mx-4'><GetTitleById id={2} /></h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:px-16 text-center' style={{ scrollbarWidth: 'none' }}>
                    <BusinessServiceCard title="Ritel Coffee Shop" description="Penjelasan"/>
                    <BusinessServiceCard title="Ritel Restoran" description="Penjelasan"/>
                    <BusinessServiceCard title="Ritel Toko Kelontong" description="Penjelasan"/>
                    <BusinessServiceCard title="Ritel Warung Lite" description="Penjelasan"/>
                    <BusinessServiceCard title="Supermarket" description="Penjelasan"/>
                </div>

                <div className='mt-16 mx-4 text-center'>
                    <h2 className='text-2xl md:text-5xl font-bold mb-4'><GetTitleById id={3} /></h2>
                    <p className='text-gray-600 px-4 mx-auto leading-relaxed text-justify md:text-center'>
                        <GetDeskripsiById id={2} />
                    </p>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='mt-8 bg-[#366938] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-content-center gap-2'>
                        {buttonText}
                        <CirclePlay />
                    </button>
                </div>
            </div>

            <div className='bg-white py-16'>
                <h2 className='text-center text-2xl md:text-4xl font-bold mb-8'><GetTitleById id={4} /></h2>
                <div
                    className="flex flex-wrap justify-center gap-4 lg:px-16 items-center"
                    style={{ scrollbarWidth: 'none' }}
                >
                    <img src="/bbi.webp" alt="VerifiedCompanyLogo" className="w-24 h-auto lg:w-32" />
                    <img src="/bank.jpg" alt="VerifiedCompanyLogo" className="w-24 h-auto lg:w-32" />
                    <img src="/iso.gif" alt="VerifiedCompanyLogo" className="w-24 h-auto lg:w-32" />
                    <img src="/2015.png" alt="VerifiedCompanyLogo" className="w-24 h-auto lg:w-32" />
                    <img src="/kop.png" alt="VerifiedCompanyLogo" className="w-24 h-auto lg:w-32" />
                </div>


                <h2 className='text-center text-2xl md:text-4xl font-bold mb-4 mt-20 mx-4'><GetTitleById id={5} /></h2>
                <p className='text-justify md:text-center text-xl text-gray-600 mb-12 mx-4 md:mx-20 md:px-40'>
                    <GetDeskripsiById id={3} />
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center lg:px-40 ">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white p-4 text-center border border-gray-100">
                            <img src={product.img} alt={product.name} className="mx-auto w-32 h-auto"/>
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-600 ">
                                Dengan keahlian dalam bidangnya dan kecanggihan teknologi, Godong Laku adalah...
                            </p>
                            {product.link ? (
                                <Link href={product.link}>
                                    <button className="text-[#538055] font-semibold flex items-center gap-2 mx-auto my-4">
                                        COBA SEKARANG <ArrowRight />
                                    </button>
                                </Link>
                            ) : (
                                <button className="text-[#538055] font-semibold flex items-center gap-2 mx-auto my-4">
                                    COBA SEKARANG <ArrowRight />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex justify-center mt-12'>
                    <button className='bg-[#366938] text-white px-8 py-3 rounded-sm hover:bg-green-700 transition-colors'>
                        Telusuri Semua Produk
                    </button>
                </div>
            </div>

            <div className="h-auto relative flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 p-4 lg:h-[704px]">
                <div className='w-2/4'>
                    <div className="relative flex flex-col items-center lg:absolute lg:left-[100px] lg:top-[177px]">
                        <div className="w-[328px] h-[155px] bg-white shadow p-4 flex flex-col items-center">
                            <span className="text-black text-7xl font-semibold font-['Work Sans']">4048</span>
                            <div className="w-[10.37px] h-[42px] left-[49.95px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                            <div className="w-[240.34px] h-5 left-[67.86px] top-[100px] absolute text-black text-2xl font-semibold font-['Work Sans']">Kerjasama</div>                    </div>
                    </div>
                    <div className="relative flex flex-col items-center lg:absolute lg:left-[100px] top-10 lg:top-[397px]">
                        <div className="w-[348px] h-[155px] bg-white shadow p-4 flex flex-col items-center">
                            <span className="text-black text-7xl font-semibold font-['Work Sans']">370K+</span>
                            <div className="w-[10.37px] h-[42px] left-[49.95px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                            <div className="w-[255px] h-5 left-[67.86px] top-[102px] absolute text-black text-xl font-semibold font-['Work Sans']">Pengikut</div>                    </div>
                    </div>
                    <div className="relative flex flex-col items-center lg:absolute lg:left-[390px] top-20 lg:top-[67px]">
                        <div className="w-[348px] h-[155px] bg-white shadow p-4 flex flex-col items-center">
                            <span className="text-black text-7xl font-semibold font-['Work Sans']">3700</span>
                            <div className="w-[11px] h-[42px] left-[53px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                            <div className="w-[255px] h-5 left-[72px] top-[102px] absolute text-black text-xl font-semibold font-['Work Sans']">Jangkauan Customer</div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center lg:absolute lg:left-[388px] top-28 lg:top-[300px] ">
                        <div className="w-80 h-[155px] bg-white shadow p-4 flex flex-col items-center">
                            <span className="text-black text-7xl font-semibold font-['Work Sans']">387</span>
                            <div className="w-[10.11px] h-[42px] left-[48.74px] top-[96px] absolute bg-[#4a864c] rounded-[10px]"></div>
                            <div className="w-[234.48px] h-5 left-[66.21px] top-[103px] absolute text-black text-xl font-semibold font-['Work Sans']">Program Demo</div>                    </div>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="lg:w-1/4 pb-4 lg:pb-10 ">
                    <h2 className="text-black text-2xl lg:text-4xl font-bold font-['Poppins']">2 Years<br />Experience</h2>
                    <p className=" text-justify text-black text-md lg:text-lg font-normal font-['Poppins'] mt-4">
                        <GetDeskripsiById id={4}/>
                    </p>
                        <div className="px-4 py-5 mt-4 bg-[#366938] rounded-lg inline-flex">
                            <Link href="/client/contact">
                                <div className="flex text-center gap-2 text-white text-lg font-medium font-['Poppins'] leading-[23px] cursor-pointer">
                                    Contact US <img src="phone-fill.svg" alt="" />
                                </div>
                            </Link>
                        </div>
                </div>
            </div>


            <div className="bg-white mt-4">
                {/* Header */}
                <div className="text-center px-4">
                    <h2 className="text-black text-2xl sm:text-3xl lg:text-[50px] font-bold font-['Poppins'] leading-tight tracking-tight">
                        <GetTitleById id={6} />
                    </h2>
                    <p className="text-[#020e35] text-md sm:text-lg font-normal mt-2 max-w-screen-md mx-auto pt-10">
                        <GetDeskripsiById id={5}/>
                    </p>
                </div>

                {/* Step Container */}
                <div className="pt-16 px-4 md:px-6 lg:px-40">
                    {/* Grid responsif */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center gap-6 md:gap-10">
                        <StepCard number="01" text="Daftar/Masuk" />
                        <DashedArrow />
                        <StepCard number="02" text="Pilih Layanan" />
                        <DashedArrow />
                        <StepCard number="03" text="Masukkan Pesanan" />
                        <DashedArrow />
                        <StepCard number="04" text="Cek Pesanan" />
                        <DashedArrow />
                        <StepCard number="05" text="Pembayaran" />
                    </div>
                </div>
            </div>


            <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-32">
                <Side />
            </div>

            <div className="py-16 px-8 bg-gradient-to-b from-white via-[#D4E2D2] to-white">
                <div className=" mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                            <GetTitleById id={8} />
                        </h2>
                        <p className="text-gray-600 mx-auto">
                            Dapatkan informasi terkini untuk mengetahui berita Anda yang menghadirkan update terbaru, berita yang viral, dan berita penting dari dunia bisnis, baik pelayanan regulasi hingga hari berbagai berita...
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-16 py-8' style={{ scrollbarWidth: 'none' }}>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/client/news">
                            <button className="bg-[#366938] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                Selengkapnya
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
