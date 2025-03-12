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
        <div className="max-h-[600px] overflow-y-auto absolute mt-10 bg-white border border-[#C4C4C4A3] w-[1290px] -left-[263px] ">
            <div className="fixed top-16 pl-10 left-0 right-0 bg-gray-100  flex justify-start z-30">
                <div className="flex space-x-2 px-2 py-1 text-[10px] md:text-[12px] font-normal lg:text-[14px]">
                    {["Aplikasi", "Suite", "Laku One", "Marketplace"].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-3 sm:py-3 sm:px-5 text-medium transition-colors duration-300 ${activeTab === tab ? "text-black border-b-2 sm:border-b-4 border-[#366938]" : "text-gray-600 hover:text-black"
                                }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 pt-14 bg-white">
                {activeTab === "Aplikasi" && !isSmallScreen && (
                    <Sidebar className="lg:sticky bg-white fixed left-0 top-20 z-30" onProductClick={handleProductClick} activeProduct={activeProduct}/>
                )}
                <div className="w-full">
                <main className={`w-full text-start bg-white ${activeTab === "Aplikasi" && !isSmallScreen ? "ml-2" : ""}`}>
                    {activeTab === "Aplikasi" && (
                        <>
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
                </main>
                    {activeTab === "Suite" && <Suite />}
                    {activeTab === "Laku One" && <LakuOne />}
                    {activeTab === "Marketplace" && <Marketplace />}
                </div>
            </div>
        </div>
    );
};

export default Apps;
