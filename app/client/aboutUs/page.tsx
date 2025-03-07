"use client";
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import React, { useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUsPage() {
    const title = "Mewujudkan Bisnis Hebat dengan Solusi Software Terpercaya";
    const description = "Kami di Godong.ID berkomitmen untuk menyediakan layanan digital terbaik yang dirancang khusus untuk membantu bisnis Anda tumbuh dan berkembang. Dengan keahlian dan dedikasi, kami menghadirkan teknologi yang memudahkan pengelolaan bisnis modern.";

    const deskripsi1 = "Kami percaya bahwa software adalah produk terbaik hasil kerja keras tangan dan pikiran. Kami bangga telah menciptakan produk dan solusi yang membantu Anda berkembang baik itu untuk memecahkan masalah bisnis, mengantisipasi kebutuhan, ataupun menemukan peluang.";
    const deskripsi2 = "Kami lebih suka membangun inovasi sendiri daripada mengembangkan platform kami lewat akuisisi. Kami berinvestasi lebih pada dukungan pelanggan dan pengembangan produk alih-alih penjualan dan pemasaran. Kami yakin, inilah cara terbaik untuk memberikan pelanggan kami pilihan dan manfaat.";
    const deskripsi3 = "Pemikiran semacam ini tidak inovatif. Namun, dalam iklim bisnis saat ini, pola pikir ini semakin jarang ditemui.";
    const title2 = "Perusahaan independen dengan misi untuk memenuhi kebutuhan software publik";
    const title3 = "Perusahaan swasta Dengan Visi Publik";
    const title4 = "Teman Anda di Segala Situasi";
    const title5 = "Cara baru menjalankan bisnis";
    const title6 = "Komitmen terhadap masyarakat";
    const deskripsi4 = "Karena kami tidak pernah mengambil uang dari investor, kami dapat selalu fokus pada apa yang terbaik bagi pelanggan. Daripada mengkhawatirkan profit jangka pendek, kami memiliki kebebasan untuk berpikir jangka panjang. Kebebasan semacam ini mengubah cara kami memecahkan masalah, memberdayakan kami untuk berpikir dengan cara yang benar-benar berbeda.";
    const deskripsi5 = "Dengan memilih Godong, Anda tidak hanya memperoleh produk, paket, atau platform, tetapi juga sebuah sistem operasi bisnis yang komprehensif. Ini adalah hasil dari lebih dari satu dekade kerja keras dalam rekayasa dan desain, yang dirancang untuk mendukung dan memperkuat kebutuhan bisnis Anda. Dengan lebih dari 55 aplikasi yang terintegrasi secara mendalam baik di website maupun mobile, kami menyediakan solusi yang dapat memenuhi hampir semua kebutuhan bisnis dan koperasi. Dan jika ada yang belum kami kembangkan, percayalah bahwa kami akan segera membuatnya.";
    const deskripsi6 = "Software bisnis seharusnya memecahkan masalah, bukan menjadi penyebabnya. Kami tidak menodong Anda dengan kontrak bertahun-tahun yang harganya selalu naik. Kami tidak memaksa staf penjualan untuk memaksa Anda. Produk kami tersedia satuan atau di dalam sebuah paket, dan kami menawarkan opsi pembayaran yang fleksibel sesuai anggaran Anda. Harga kami sama transparannya dengan kebijakan privasi kami, dan kami bangga dengan keduanya.";
    const deskripsi7 = "Saat memilih Zoho, Anda tidak sekadar mendapat produk, suite, atau platform. Anda mendapat apa yang kami sebut sistem operasi untuk bisnis, hasil dari upaya rekayasa dan desain selama lebih dari satu dekade. Dengan tersedianya 55 lebih aplikasi yang terintegrasi mendalam di web dan seluler, kami menawarkan solusi yang memenuhi hampir semua kebutuhan bisnis. Dan jika kami belum membuatnya, percayalah bahwa kami akan segera melakukannya.";
    const deskripsi8 = "Sebagai perusahaan global, kami memahami nilai berwarga negara yang baik. Itulah sebabnya kami selalu berusaha lebih banyak memberi dan mencari cara untuk mendukung masyarakat di tempat tinggal kami. Dari memberikan bantuan langganan untuk bisnis yang terdampak bencana alam, hingga membangun kebun tenaga surya untuk mengimbangi jejak karbon kami, kami mengambil inisiatif yang mengubah kehidupan pelanggan dan karyawan kami menjadi lebih baik.";

    const sectionRefs = {
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
        section6: useRef(null),
    };

    const router = useRouter();

    const scrollToSection = (sectionRef: MutableRefObject<HTMLElement | null>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='font-[Poppins]'>
            <div className='flex flex-col justify-center items-center mb-10 w-full text-center bg-gradient-to-b from-[#D4E2D2] to-[#FFFFFF]'>
                <h2 className='text-2xl font-bold my-5'>{title}</h2>
                <p className='w-1/2'>{description}</p>
            </div>
            <img src="/about.png" alt="landingpage" className="w-full h-auto object-cover sm:h-96" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="text-center max-w-[600px] mx-auto bg-[#B7D0B8] py-10 px-9">
                        <img src="/logoGodong.svg" alt="Logo" className="mx-auto mb-4 w-34 h-34 mt-10 object-contain" />
                        <p className="text-[#484848] text-2xl mt-10 font-[Poppins]">
                            <span className="block">Software as</span>
                            <span className="block">a Service</span>
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <p className='mb-5'>{deskripsi1}</p>
                        <p>{deskripsi2}</p>
                    </div>
                    <div className="w-full lg:w-1/3 text-start">
                        <p>{deskripsi3}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-10 flex flex-row gap-5">
                            <div className="border-l-2 border-gray-300 h-[200px] mr-5"></div>
                            <div className="flex flex-col gap-5">
                                <button onClick={() => scrollToSection(sectionRefs.section2)} className="hover:text-blue-500 text-left">
                                    Pendekatan logis soal privasi
                                </button>
                                <button onClick={() => scrollToSection(sectionRefs.section3)} className="hover:text-blue-500 text-left">
                                    Perusahaan swasta dengan visi publik
                                </button>
                                <button onClick={() => scrollToSection(sectionRefs.section4)} className="hover:text-blue-500 text-left">
                                    Teman Anda di segala situasi
                                </button>
                                <button onClick={() => scrollToSection(sectionRefs.section5)} className="hover:text-blue-500 text-left">
                                    Cara baru menjalankan bisnis
                                </button>
                                <button onClick={() => scrollToSection(sectionRefs.section6)} className="hover:text-blue-500 text-left">
                                    Komitmen terhadap masyarakat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <div ref={sectionRefs.section2}>
                            <h2 className='text-4xl mb-5'>{title2}</h2>
                            <p className='mb-5'>{deskripsi4}</p>
                        </div>
                        <div ref={sectionRefs.section3}>
                            <h2 className='text-4xl my-5'>{title3}</h2>
                            <p>{deskripsi5}</p>
                        </div>
                        <div ref={sectionRefs.section4}>
                            <h2 className='text-4xl my-5'>{title4}</h2>
                            <p>{deskripsi6}</p>
                        </div>
                        <div ref={sectionRefs.section5}>
                            <h2 className='text-4xl my-5'>{title5}</h2>
                            <p>{deskripsi7}</p>
                        </div>
                        <div ref={sectionRefs.section6}>
                            <h2 className='text-4xl my-5'>{title6}</h2>
                            <p>{deskripsi8}</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 border-2 border-gray-300 rounded-lg p-5">
                    <h2 className='text-4xl text-center mb-5'>Tentang Kami</h2>
                    <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
                        <div className="w-full lg:w-1/4">
                            <img src="/misi.png" alt="Visi Icon" className='mb-5 w-12 h-12 object-contain' />
                            <h2 className='text-2xl mb-5'>Visi</h2>
                            <p className='mb-5 break-words'>Pencapaian...</p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <img src="/mission.png" alt="Misi Icon" className='mb-5 w-12 h-12 object-contain' />
                            <h2 className='text-2xl mb-5'>Misi</h2>
                            <p className='mb-5 break-words'>Pencapaian...</p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <img src="/pencapaian.png" alt="Pencapaian Icon" className='mb-5 w-12 h-12 object-contain' />
                            <h2 className='text-lg mb-5'>Pencapaian</h2>
                            <p className='mb-5 break-words'>Pencapaian...</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button 
                            onClick={() => router.push('/client/GodongStory')} 
                            className='w-[300px] mx-auto flex text-center py-2 px-2 border bg-[#366938] items-center'>
                            <span className='mx-auto text-white'>Simak Perjalanan Kami</span>
                            <ArrowRight className='flex text-white' />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
