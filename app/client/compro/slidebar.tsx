import React, { useEffect, useState } from "react";

interface SidebarProps {
    className?: string;
    onProductClick: (product: string) => void;
    activeProduct: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onProductClick, activeProduct }) => {
    const [maxHeight, setMaxHeight] = useState("calc(100vh - 27rem)"); // Default tinggi sidebar

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

    return (
        <div
            id="sidebar"
            className={`w-60 md:w-64 lg:w-72 bg-white shadow-md p-4 absolute left-0 top-16 rounded-lg transition-all duration-300 ${className}`}
            style={{ maxHeight, overflowY: "auto" }} // Pastikan sidebar tidak melebihi batas
        >
            {/* Judul */}
            <h2 className="text-lg font-bold text-gray-800">Aplikasi</h2>

            {/* Daftar Produk */}
            <ul className="mt-4 flex flex-col gap-3 text-gray-700 text-base">
                {["Godong Laku", "Godong Kasir", "Mobile Kasir", "Mobile Laku", "Godong Pharmacy"].map((product) => (
                    <li
                        key={product}
                        className={`pl-3 py-2 cursor-pointer hover:text-green-700 ${
                            activeProduct === product ? "text-green-700 font-semibold" : ""
                        }`}
                        onClick={() => onProductClick(product)}
                    >
                        {product}
                    </li>
                ))}
            </ul>

            {/* Tombol Telusuri Semua Produk */}
            <div className="mt-6">
                <button
                    className="w-full bg-green-700 text-white py-2 rounded-lg text-base flex items-center justify-center hover:bg-green-800"
                    onClick={() => onProductClick("Telusuri Semua Produk")}
                >
                    TELUSURI SEMUA PRODUK <span className="ml-2 text-lg">&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
