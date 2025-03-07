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

const Apps: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Aplikasi");
    const [activeProduct, setActiveProduct] = useState<string | null>("Godong Laku"); // Default
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Deteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize(); // Set awal
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Set default produk berdasarkan ukuran layar
    useEffect(() => {
        if (isSmallScreen) {
            setActiveProduct("Telusuri Semua Produk"); // Default ke semua produk di layar kecil
        } else {
            setActiveProduct("Godong Laku"); // Default normal
        }
    }, [isSmallScreen]);

    // Fungsi untuk menangani klik produk
    const handleProductClick = (product: string) => {
        setActiveProduct(product === activeProduct ? null : product);
    };

    // Fungsi untuk menangani perubahan tab
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

    return (
        <div className="h-screen flex flex-col">
        {/* Menu Navigasi Horizontal */}
        <div className="fixed top-16 left-0 right-0 bg-gray-100 shadow-md flex justify-center z-10">
            <div className="flex space-x-2 px-2 py-1 text-sm sm:text-base">
                {["Aplikasi", "Suite", "Laku One", "Marketplace"].map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-3 sm:py-3 sm:px-5 font-semibold transition-colors duration-300 ${
                            activeTab === tab ? "text-black border-b-2 sm:border-b-4 border-black" : "text-gray-600 hover:text-black"
                        }`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

            {/* Konten Utama */}
            <div className="flex pt-32 flex-1">
                {/* Sidebar hanya muncul jika layar besar */}
                {activeTab === "Aplikasi" && !isSmallScreen && (
                    <Sidebar
                        className="w-80 h-[calc(100vh-4rem)] bg-white shadow-md fixed left-0 top-32 z-30"
                        onProductClick={handleProductClick}
                        activeProduct={activeProduct}
                    />
                )}

                {/* Konten Dinamis */}
                <main className={`flex-1 p-8 bg-white ${activeTab === "Aplikasi" && !isSmallScreen ? "ml-80" : ""}`}>
                    {activeTab === "Aplikasi" && (
                        <>
                            {/* Jika layar kecil, tampilkan semua produk langsung */}
                            {isSmallScreen || activeProduct === "Telusuri Semua Produk" ? (
                                <>
                                    <GodongLaku />
                                    <GodongKasir />
                                    <MobileKasir />
                                    <MobileLaku />
                                    <GodongPharmacy />
                                </>
                            ) : (
                                <>
                                    {activeProduct === "Godong Laku" && <GodongLaku />}
                                    {activeProduct === "Godong Kasir" && <GodongKasir />}
                                    {activeProduct === "Mobile Kasir" && <MobileKasir />}
                                    {activeProduct === "Mobile Laku" && <MobileLaku />}
                                    {activeProduct === "Godong Pharmacy" && <GodongPharmacy />}
                                </>
                            )}
                        </>
                    )}
                    {activeTab === "Suite" && <Suite />}
                    {activeTab === "Laku One" && <LakuOne />}
                    {activeTab === "Marketplace" && <Marketplace />}
                </main>
            </div>

            {/* Footer tetap di bawah */}
            
            <Footer />
        </div>
    );
};

export default Apps;
