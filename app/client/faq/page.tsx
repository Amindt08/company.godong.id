'use client'

import Footer from '@/components/Footer'
import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Paginator } from 'primereact/paginator';

export default function FAQPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5);

    const onPageChange = (event: any) => {
        setCurrentPage(event.page);
    };

    const faqItems = [
        {
            header: "Ada yang dapat kami bantu?",
            content: "Dengan tutorial aksial untuk dalih dan petualangan memperkenalkan harga mereka, memiliki perangkat lunak yang dapat melacak pekerjaan yang sulit..."
        },
        {
            header: "Bagaimana cara mendaftar godong?",
            content: "Untuk mendaftar Godong, Anda dapat mengunjungi website kami di godong.id dan klik tombol 'Daftar'. Isi formulir pendaftaran dengan data yang valid..."
        },
        {
            header: "Adakah tutorial untuk mengasah software godong lebih?",
            content: "Ya, kami menyediakan berbagai tutorial dan panduan lengkap di platform pembelajaran kami. Anda dapat mengakses tutorial video, dokumentasi..."
        },
        {
            header: "Bagaimana cara saya upgrade versi pro?",
            content: "Untuk upgrade ke versi Pro, login ke akun Anda, kunjungi halaman 'Berlangganan' dan pilih paket Pro. Ikuti proses pembayaran dan Anda akan langsung..."
        },
        {
            header: "Apakah godong menyediakan verifikasi untuk koperasi?",
            content: "Ya, Godong menyediakan layanan verifikasi khusus untuk koperasi. Proses ini membantu memastikan keabsahan dan kredibilitas koperasi dalam platform kami."
        },
        {
            header: "Apa saja fitur dalam godong saat ini?",
            content: "Godong menawarkan berbagai fitur seperti manajemen anggota, pencatatan keuangan, laporan otomatis, integrasi pembayaran, dan masih banyak lagi."
        },
        {
            header: "Seberapa credible software godong?",
            content: "Godong telah terbukti melayani ribuan pengguna dan mendapat berbagai sertifikasi keamanan. Kami juga bekerja sama dengan berbagai institusi terpercaya..."
        },
        {
            header: "Bagaimana cara mendaftar godong?",
            content: "Untuk mendaftar Godong, Anda dapat mengunjungi website kami di godong.id dan klik tombol 'Daftar'. Isi formulir pendaftaran dengan data yang valid..."
        },
        {
            header: "Adakah tutorial untuk mengasah software godong lebih?",
            content: "Ya, kami menyediakan berbagai tutorial dan panduan lengkap di platform pembelajaran kami. Anda dapat mengakses tutorial video, dokumentasi..."
        },
        {
            header: "Bagaimana cara saya upgrade versi pro?",
            content: "Untuk upgrade ke versi Pro, login ke akun Anda, kunjungi halaman 'Berlangganan' dan pilih paket Pro. Ikuti proses pembayaran dan Anda akan langsung..."
        },
        {
            header: "Apakah godong menyediakan verifikasi untuk koperasi?",
            content: "Ya, Godong menyediakan layanan verifikasi khusus untuk koperasi. Proses ini membantu memastikan keabsahan dan kredibilitas koperasi dalam platform kami."
        },
        {
            header: "Apa saja fitur dalam godong saat ini?",
            content: "Godong menawarkan berbagai fitur seperti manajemen anggota, pencatatan keuangan, laporan otomatis, integrasi pembayaran, dan masih banyak lagi."
        },
        {
            header: "Bagaimana cara mendaftar godong?",
            content: "Untuk mendaftar Godong, Anda dapat mengunjungi website kami di godong.id dan klik tombol 'Daftar'. Isi formulir pendaftaran dengan data yang valid..."
        },
        {
            header: "Adakah tutorial untuk mengasah software godong lebih?",
            content: "Ya, kami menyediakan berbagai tutorial dan panduan lengkap di platform pembelajaran kami. Anda dapat mengakses tutorial video, dokumentasi..."
        },
        {
            header: "Bagaimana cara saya upgrade versi pro?",
            content: "Untuk upgrade ke versi Pro, login ke akun Anda, kunjungi halaman 'Berlangganan' dan pilih paket Pro. Ikuti proses pembayaran dan Anda akan langsung..."
        },
        {
            header: "Apakah godong menyediakan verifikasi untuk koperasi?",
            content: "Ya, Godong menyediakan layanan verifikasi khusus untuk koperasi. Proses ini membantu memastikan keabsahan dan kredibilitas koperasi dalam platform kami."
        },
        {
            header: "Apa saja fitur dalam godong saat ini?",
            content: "Godong menawarkan berbagai fitur seperti manajemen anggota, pencatatan keuangan, laporan otomatis, integrasi pembayaran, dan masih banyak lagi."
        },
    ];

    const faq = "FAQ"
    const deskripsi = "Punya banyak pertanyaan tentang produk-produk Godong.Id? Kami telah mengumpulkan jawaban untuk pertanyaan-pertanyaan yang sering diajukan..."
    const gambar = "/faqq.png"
    const judul = "godong.id"
    const cari = "Cari artikel, proses, pertanyaan umum, dan lainnya..."
    const pertanyaan = "Frequently Asked Questions"

    // Calculate the current page items
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = faqItems.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total pages (ceil of total items / items per page)
    const totalPages = Math.ceil(faqItems.length / itemsPerPage);

    return (
        <div>
            <div>
                <div className="bg-green-100 p-10 rounded-md shadow-md flex items-center">
                    <div className="flex-1">
                        <h2 className="text-green-700 font-bold text-2xl">{faq}</h2>
                        <h1 className="text-black font-bold text-6xl">{judul}</h1>
                        <p className="text-gray-700 text-2xl mt-4">{deskripsi}</p>
                    </div>
                    <div className="flex-1">
                        <img src={gambar} alt="FAQ Illustration" className="w-auto h-auto" />
                    </div>
                </div>
                <div className="m-20">
                    <input
                        type="text"
                        placeholder={cari}
                        className="w-full p-3 border border-gray-300 rounded-md mb-5"
                    />
                    <h2 className="text-center text-3xl font-bold mb-5">{pertanyaan}</h2>
                    <div className="space-y-4">
                        <Accordion>
                            {currentItems.map((item, index) => (
                                <AccordionTab
                                    key={indexOfFirstItem + index}
                                    header={item.header}
                                >
                                    <p className="m-0 text-gray-700 text-1xl">{item.content}</p>
                                </AccordionTab>
                            ))}
                        </Accordion>

                        {/* Pagination */}
                        <Paginator
                            first={currentPage * itemsPerPage}
                            rows={itemsPerPage}
                            totalRecords={faqItems.length}
                            onPageChange={onPageChange}
                            template="PrevPageLink PageLinks NextPageLink"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
