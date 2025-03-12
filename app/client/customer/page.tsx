'use client'; // This ensures that this component runs on the client side

import Footer from '@/components/Footer';
import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';

export default function Customerpage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const allCategories = ["Akuntansi", "Kasir", "Godong Laku", "Godong Kasir", "Mobile Kasir", "Mobile Laku", "Godong Pharmacy"];

    const handleCheckboxChange = (category: string) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((item) => item !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const SidebarCheckbox = ({ id, label }: { id: string; label: string }) => {
        return (
            <div className="flex items-center space-x-2">
                <Checkbox id={id} checked={selectedCategories.includes(id)} onChange={() => handleCheckboxChange(id)} />
                <label htmlFor={id} className="text-sm font-medium leading-none cursor-pointer">{label}</label>
            </div>
        );
    };

    const colors = [
        "bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", 
        "bg-purple-200", "bg-pink-200", "bg-gray-200", "bg-orange-200", 
        "bg-teal-200", "bg-indigo-200", "bg-lime-200", "bg-rose-200", 
        "bg-cyan-200", "bg-amber-200"
    ];

    return (
        <div>
            <div className="font-poppins container mx-auto px-4 py-12 my-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        Dipercaya oleh <span className="text-[#34A45C]">100 Ribu Orang</span> di Indonesia
                    </h2>
                    <p className="text-gray-600 text-lg mt-3 md:text-xl">
                        Solusi terpercaya untuk pengelolaan bisnis yang lebih efisien
                    </p>
                </div>

                {/* Grid 14 Kolom dengan Warna Berbeda */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {[...Array(14)].map((_, index) => (
                        <div key={index} className={`p-10 sm:p-20 shadow-sm flex items-center justify-center ${colors[index]}`}>
                            <span className="text-gray-800">icon</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-[#F5F5F5]">
                <div className="w-full md:w-1/4 p-8">
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-[#366938] mb-4">Industri</h3>
                        <div className="space-y-3">
                            <SidebarCheckbox id="Akuntansi" label="Akuntansi" />
                            <SidebarCheckbox id="Kasir" label="Kasir" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-[#366938] mb-4">Produk</h3>
                        <div className="space-y-3">
                            <SidebarCheckbox id="Godong Laku" label="Godong Laku" />
                            <SidebarCheckbox id="Godong Kasir" label="Godong Kasir" />
                            <SidebarCheckbox id="Mobile Kasir" label="Mobile Kasir" />
                            <SidebarCheckbox id="Mobile Laku" label="Mobile Laku" />
                            <SidebarCheckbox id="Godong Pharmacy" label="Godong Pharmacy" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Menampilkan semua jika tidak ada yang dicentang */}
                        {(selectedCategories.length === 0 ? allCategories : selectedCategories).map((category, index) => (
                            <TestimonialCard key={index} index={index} category={category} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

const TestimonialCard = ({ index, category }: { index: number; category: string }) => {
    const ratings = [5, 4, 3, 5, 4, 2, 4, 5, 3, 5];
    const testimonialContent = [
        "Godong benar-benar mengubah cara kami berbisnis. Fitur-fitur yang ditawarkan memudahkan kami mengelola operasional. Sangat membantu!",
        "Layanan Godong sangat profesional dan efisien. Kami merasakan kemajuan yang signifikan dalam mengelola bisnis kami.",
        "Sangat puas dengan fitur yang ada, mempermudah proses operasional. Kami merasa lebih terorganisir.",
        "Produk Godong sangat memudahkan kami dalam menjalankan bisnis. Tim dukungannya juga sangat responsif!",
        "Saya sangat merekomendasikan Godong untuk membantu bisnis Anda. Platformnya mudah digunakan dan sangat efisien.",
        "Fitur-fitur yang ada sangat membantu dalam proses transaksi. Kami merasa lebih cepat dan akurat.",
        "Pengalaman kami menggunakan Godong sangat menyenangkan, terutama dalam hal laporan yang lebih transparan.",
        "Aplikasi Godong mempermudah pencatatan keuangan dan inventaris. Ini sangat bermanfaat bagi kami!",
        "Kami sangat puas dengan kemudahan menggunakan platform ini. Sangat cocok untuk bisnis kecil hingga besar.",
        "Dukungan pelanggan dari Godong sangat cepat dan membantu setiap kali kami membutuhkan bantuan.",
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex">
                <span className="text-5xl text-[#366938] font-bold">“</span>
            </div>
            <div className="mt-2">
                <div className="flex mb-2">
                    {[...Array(ratings[index % ratings.length])].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">⭐</span>
                    ))}
                </div>
                <p className="text-gray-600">{testimonialContent[index % testimonialContent.length]}</p>
            </div>
            <div className="flex items-center mt-4 border-t pt-4">
                <img 
                    src="/org2.jpg" 
                    alt="User avatar" 
                    className="w-12 h-12 rounded-full object-cover" 
                />
                <div className="ml-4">
                    <p className="text-lg font-bold text-gray-800">Dewi Utami</p>
                    <p className="text-sm text-gray-600">Pemilik Toko Elektronik</p>
                </div>
            </div>
        </div>
    );
};