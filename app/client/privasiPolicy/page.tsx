"use client";
import Footer from '@/components/Footer'
import React from 'react'

export default function PrivasiPolicyPage() {
    const title = "Ringkasan Kebijakan Privasi kami"
    const description = "Kebijakan ini mencakup setiap situs web Godong yang ditautkan di sini, dan semua produk serta layanan yang terdapat di situs web tersebut."


    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='font-[Poppins]'>
            <div className=' flex flex-col justify-center items-center mb-10 w-full text-center bg-[#DCE7DA] pt-20'>
                <h2 className='mb-10 text-2xl font-bold '>{title}</h2>
                <p className='w-1/2'>{description}</p>
                <p className='w-1/2 pb-10'>{description}</p>
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
            <Footer />
        </div>
    )
}