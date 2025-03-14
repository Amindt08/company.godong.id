import React, { useEffect, useState } from "react";

interface SidebarProps {
    className?: string;
    onProductClick: (product: string) => void;
    activeProduct: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onProductClick, activeProduct }) => {
    const [maxHeight, setMaxHeight] = useState("calc(100vh - 1rem)"); // Default tinggi sidebar

    useEffect(() => {
        const updateSidebarHeight = () => {
            const footer = document.getElementById("footer");
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Jika footer masuk ke layar, sidebar harus berhenti sebelum footer
                if (footerTop < windowHeight) {
                    setMaxHeight(`${footerTop - 64}px`); // 64px adalah perkiraan jarak aman
                } else {
                    setMaxHeight("calc(100vh - 10rem)"); // Jika tidak mendekati footer, gunakan tinggi normal
                }
            }
        };

        window.addEventListener("scroll", updateSidebarHeight);
        window.addEventListener("resize", updateSidebarHeight);
        updateSidebarHeight(); // Panggil langsung saat pertama kali dimuat

        return () => {
            window.removeEventListener("scroll", updateSidebarHeight);
            window.removeEventListener("resize", updateSidebarHeight);
        };
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="sidebar" className={`w-hidden lg:w-1/4 self-start bg-white border-gray-100 border-r-2 mb-8 fixed z-20 left-0  transition-all duration-300 ${className}`} style={{ maxHeight, overflowY: "auto" }}>
            {/* <ul className="space-y-2 mt-2 flex flex-col gap-2 text-[#010200] text-base">
                {["Godong Laku", "Godong Kasir", "Mobile Kasir", "Mobile Laku", "Godong Pharmacy"].map((product) => (
                    <li
                        key={product}
                        className={`pl-3 py-2 cursor-pointer ${
                            activeProduct === product ? "text-green-700 font-bold" : ""
                        }`}
                        onClick={() => onProductClick(product)}
                    >
                        {product}
                    </li>
                ))}
            </ul> */}

            <ul className=" flex flex-col gap-2 text-gray-600 font-medium">
                {["Godong Laku", "Godong Kasir", "Mobile Kasir", "Mobile Laku", "Godong Pharmacy"].map((product) => (
                    <li
                        key={product}
                        className={`pl-2 py-2 cursor-pointer text-[14px] ${activeProduct === product ? "text-gray-800 font-bold" : ""
                            }`}
                        onClick={() => onProductClick(product)}
                    >
                        {product}
                    </li>
                ))}
            </ul>

            {/* Tombol Telusuri Semua Produk */}
            <div className="mt-2">
                <button
                    className=" text-start p-4 bg-[#538055] py-2 text-white text-[15px] hover:bg-[#517754]"
                    onClick={() => onProductClick("Telusuri Semua Produk")}
                >
                    TELUSURI SEMUA PRODUK <span className="ml-2 ">&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
