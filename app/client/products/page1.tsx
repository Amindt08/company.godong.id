"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../compro/slidebar";
import GodongLaku from "../compro/godongLaku";
import GodongKasir from "../compro/godongKasir";
import MobileKasir from "../compro/mobileKasir";
import MobileLaku from "../compro/mobileLaku";
import GodongPharmacy from "../compro/godongPharmacy";
import Suite from "./suite";
import LakuOne from "./lakuOne";
import Footer from "@/components/Footer";
import Marketplace from "./Marketplace";

const PopUpProduct = () => {
    const [activeTab, setActiveTab] = useState("Aplikasi");
    const [activeProduct, setActiveProduct] = useState<string | null>("Godong Laku"); // Default
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab !== "Aplikasi") {
            setActiveProduct(null);
        } else if (isSmallScreen) {
            setActiveProduct("Telusuri Semua Produk");
        } else {
            setActiveProduct("Godong Laku");
        }
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='max-h-[600px] overflow-y-auto font-poppins absolute mt-10 -left-[280px] right-[50px] bg-white border border-[#C4C4C4A3] w-[1350px] p-3'>
            <div className="fixed top-16 pl-10 left-0 right-0 bg-gray-100  flex justify-start z-0">
                <div className="flex space-x-2 px-2 py-1 text-sm sm:text-base">
                    {["Aplikasi", "Suite", "Laku One", "Marketplace"].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-3 sm:py-3 sm:px-5 font-semibold transition-colors duration-300 ${activeTab === tab ? "text-black border-b-2 sm:border-b-4 border-[#366938]" : "text-gray-600 hover:text-black"
                                }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/3 lg:sticky top-16 self-start">

                            <div className="space-y-4">
                                <div className="border-b pb-4">
                                    <a href="#syarat" onClick={(e) => handleSmoothScroll(e, 'syarat')} className="font-semibold text-lg hover:underline">Syarat & Ketentuan</a>
                                </div>
                                <div className="border-b pb-4">
                                    <a href="#privasi" onClick={(e) => handleSmoothScroll(e, 'privasi')} className="font-semibold text-center text-lg hover:underline">Kebijakan Privasi Godong Kasir</a>
                                </div>
                                <div className="border-b pb-4">
                                    <a href="#kebijakan" onClick={(e) => handleSmoothScroll(e, 'kebijakan')} className="font-semibold text-lg hover:underline">Kebijakan Izin dan API yang Mengakses Informasi Sensitif</a>
                                </div>
                                <div className="border-b pb-4">
                                    <a href="#izin" onClick={(e) => handleSmoothScroll(e, 'izin')} className="font-semibold text-lg hover:underline">Izin dan API yang Mengakses Informasi Sensitif</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 text-start">
                            <div className="flex flex-col gap-8">
                                {/* Tambahkan judul utama */}
                                <h1 id="syarat" className="pb-10 ml-40  text-left text-2xl text-[30px] text-gray-800">SYARAT DAN KETENTUAN</h1>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">1. Persetujuan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan aplikasi ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">2. Penggunaan Aplikasi</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Hak Penggunaan: Kami memberikan Anda lisensi non-eksklusif, tidak dapat dipindah tangankan, dan dapat dibatalkan untuk menggunakan aplikasi ini untuk tujuan yang sah dan sesuai dengan syarat ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">3. Hak Kekayaan Intelektual</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Semua konten, nama merek, logo, merek dagang dan merek layanan dalam aplikasi ini termasuk tetapi tidak terbatas pada hak cipta, merek dagang, dan hak kekayaan intelektual lainnya adalah milik kami atau pemberi lisensi kami.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">4. Pembatasan Tanggung Jawab</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tanggung Jawab: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tidak langsung maupun tersirat.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">5. Perubahan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diumumkan di aplikasi kami. Anda disarankan untuk memeriksa syarat dan ketentuan ini secara berkala.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">6. Hukum yang Berlaku</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Negara Indonesia tanpa memperhatikan prinsip konflik hukum.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                {/* Tambahkan judul utama */}
                                <h1 id="privasi" className="pt-20 pb-10 ml-40 text-2xl text-[30px] text-gray-800">Kebijakan Privasi Godong Kasir</h1>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">1. Persetujuan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan aplikasi ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">2. Penggunaan Aplikasi</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Hak Penggunaan: Kami memberikan Anda lisensi non-eksklusif, tidak dapat dipindah tangankan, dan dapat dibatalkan untuk menggunakan aplikasi ini untuk tujuan yang sah dan sesuai dengan syarat ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">3. Hak Kekayaan Intelektual</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Semua konten, nama merek, logo, merek dagang dan merek layanan dalam aplikasi ini termasuk tetapi tidak terbatas pada hak cipta, merek dagang, dan hak kekayaan intelektual lainnya adalah milik kami atau pemberi lisensi kami.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">4. Pembatasan Tanggung Jawab</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tanggung Jawab: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tidak langsung maupun tersirat.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">5. Perubahan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diumumkan di aplikasi kami. Anda disarankan untuk memeriksa syarat dan ketentuan ini secara berkala.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">6. Hukum yang Berlaku</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Negara Indonesia tanpa memperhatikan prinsip konflik hukum.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                {/* Tambahkan judul utama */}
                                <h1 id="kebijakan" className="pt-20 pb-10 ml-40 text-center text-[30px] text-gray-800">Kebijakan Izin dan API yang Mengakses Informasi Sensitif</h1>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">1. Persetujuan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan aplikasi ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">2. Penggunaan Aplikasi</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Hak Penggunaan: Kami memberikan Anda lisensi non-eksklusif, tidak dapat dipindah tangankan, dan dapat dibatalkan untuk menggunakan aplikasi ini untuk tujuan yang sah dan sesuai dengan syarat ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">3. Hak Kekayaan Intelektual</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Semua konten, nama merek, logo, merek dagang dan merek layanan dalam aplikasi ini termasuk tetapi tidak terbatas pada hak cipta, merek dagang, dan hak kekayaan intelektual lainnya adalah milik kami atau pemberi lisensi kami.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">4. Pembatasan Tanggung Jawab</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tanggung Jawab: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tidak langsung maupun tersirat.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">5. Perubahan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diumumkan di aplikasi kami. Anda disarankan untuk memeriksa syarat dan ketentuan ini secara berkala.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">6. Hukum yang Berlaku</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Negara Indonesia tanpa memperhatikan prinsip konflik hukum.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                {/* Tambahkan judul utama */}
                                <h1 id="izin" className="pt-20 pb-10 ml-40 text-center text-[30px] text-gray-800">Izin dan API yang Mengakses <br /> Informasi Sensitif</h1>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">1. Persetujuan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan aplikasi ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">2. Penggunaan Aplikasi</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Hak Penggunaan: Kami memberikan Anda lisensi non-eksklusif, tidak dapat dipindah tangankan, dan dapat dibatalkan untuk menggunakan aplikasi ini untuk tujuan yang sah dan sesuai dengan syarat ini.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">3. Hak Kekayaan Intelektual</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Semua konten, nama merek, logo, merek dagang dan merek layanan dalam aplikasi ini termasuk tetapi tidak terbatas pada hak cipta, merek dagang, dan hak kekayaan intelektual lainnya adalah milik kami atau pemberi lisensi kami.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">4. Pembatasan Tanggung Jawab</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tanggung Jawab: Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tidak langsung maupun tersirat.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">5. Perubahan Syarat & Ketentuan</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diumumkan di aplikasi kami. Anda disarankan untuk memeriksa syarat dan ketentuan ini secara berkala.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-lg">6. Hukum yang Berlaku</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Negara Indonesia tanpa memperhatikan prinsip konflik hukum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpProduct
