"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Ellipsis, Megaphone, Search, Menu, X } from "lucide-react";
import axios from "axios";
import { Button } from "./ui/button";
import { apiEndpoints } from "@/app/api/api";
import GetNavbarById from '@/components/Navbar/page';


interface ContentNavbarGeneral {
  id: number;
  kode: string;
  kode_main_navbar: string;
  nama: string;
  link_to: string;
}

interface NavbarItem {
  id: number;
  kode_navbar: number;
  nama: string;
  status: string;
  link_to: string;
  content_navbar_general: ContentNavbarGeneral[];
}

export default function NavigationBar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [navbar, setNavbar] = useState<NavbarItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ellipsisMenuOpen, setEllipsisMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false); // State untuk toggle Produk

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const router = useRouter();

  // Fetch data navbar dari API
  useEffect(() => {
    axios
      .get(apiEndpoints.allNavbar)
      .then((response) => {
        setNavbar(response.data);
      })
      .catch((error) => {
        console.error("Error fetching navbar data:", error);
      });
  }, []);

  // Fungsi Toggle Produk
  const handleProductClick = () => {
    if (isProductPage) {
      router.push("/client/Landing"); // Kembali ke halaman Landing
    } else {
      router.push("/client/products"); // Pindah ke halaman Products
    }
    setIsProductPage(!isProductPage);
  };

  return (
    <div className="font-poppins ">
      <header className="flex items-center justify-between px-10 py-4 bg-white text-gray-800  shadow-md fixed  w-full z-50 transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center pr-20">
          <Link href="/client/Landing">
            <Image src="/logoGodong.svg" width={128} height={29} alt="godong.id Logo" />
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 gap-12 ">
          {[
            <button onClick={handleProductClick} className="text-[17px] font-medium hover:text-green-700">
              <GetNavbarById id={1} />
            </button>,

            <Link href="/client/customer" className="text-[17px] font-medium hover:text-green-700">
              <GetNavbarById id={2} />
            </Link>,

            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-[17px] font-medium flex items-center gap-1 hover:text-green-700">
                <GetNavbarById id={3} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-[200px] p-3">
                  <ul className="grid gap-3">
                    <ListItem title="Tentang Kami" href="/client/aboutUs" />
                    <ListItem title="Tim Kami" href="/client/company" />
                    <ListItem title="Press" href="/client/press" />
                    <ListItem title="Karir" href="/client/karir" />
                    <ListItem title="Godong Story" href="/client/GodongStory" />
                  </ul>
                </div>
              )}
            </div>,

            <div className="relative">
              <Ellipsis className="cursor-pointer" height={25} width={25} onClick={() => setEllipsisMenuOpen(!ellipsisMenuOpen)} />
              {ellipsisMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-[200px] p-3">
                  <ul className="grid gap-3">
                    <ListItem title="Privasi Policy" href="/client/privasiPolicy" />
                    <ListItem title="FAQ" href="/client/faq" />
                    <ListItem title="Hubungi Kami" href="/client/contact" />
                    <ListItem title="Berita" href="/client/news" />
                    <ListItem title="Dukungan" href="/client/support" />
                  </ul>
                </div>
              )}
            </div>
          ]?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer font-medium transition-colors flex items-center ${activeDropdown === index ? "text-green-500" : "text-gray-800"
                }`}
              onClick={() => toggleDropdown(index)}
            >
              {item}
              {(index === 0 || index === 2) && (
                <span className={`ml-2 transform transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}>
                  <ChevronDown size={16} />
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Menu Kanan (Search, Megaphone, Masuk) */}
        <div className="hidden lg:flex items-end gap-5 lg:px-8">

          <button className="text-lg" onClick={toggleSearch}>
            {isSearchActive ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <g clipPath="url(#clip0_255_316)">
                  <path d="M8.77355 17.4677C3.98248 17.4677 0.0527344 13.5918 0.0527344 8.74687C0.0527344 3.90198 3.98248 0.026062 8.77355 0.026062C13.5646 0.026062 17.4944 3.95581 17.4944 8.74687C17.4944 13.5379 13.5646 17.4677 8.77355 17.4677ZM8.77355 1.4257C5.75894 1.4257 3.06734 3.20216 1.93686 6.00143C0.806385 8.80071 1.45237 11.923 3.55183 14.0224C5.65128 16.1219 8.82738 16.7679 11.6267 15.5836C14.4259 14.3993 16.1486 11.7076 16.1486 8.74687C16.1486 6.80892 15.3949 4.92479 13.9953 3.52515C12.5956 2.12552 10.7115 1.4257 8.77355 1.4257Z" fill="black" />
                  <path d="M18.2586 17.4569C18.0971 17.4569 17.9356 17.4031 17.8279 17.2416L14.7595 14.227C14.4903 13.9578 14.4903 13.5272 14.7595 13.3119C15.0286 13.0427 15.4055 13.0427 15.6746 13.3119L18.7431 16.3265C18.8507 16.4341 18.9584 16.5956 18.9584 16.7571C18.9584 16.9186 18.9046 17.0801 18.7431 17.1878C18.6354 17.4031 18.4201 17.4569 18.2586 17.4569Z" fill="black" />
                </g>
              </svg>
            )}
          </button>

          <button className="text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
              <path d="M3.3006 13.5416H0.669107C0.489746 13.5285 0.322253 13.4516 0.200235 13.3262C0.0782167 13.2009 0.0107006 13.0365 0.0112336 12.866V4.96654C0.0238979 4.80512 0.0972759 4.65337 0.218014 4.53892C0.338753 4.42446 0.498827 4.3549 0.669107 4.3429H3.3006C3.47508 4.3429 3.64241 4.4086 3.76579 4.52556C3.88916 4.64251 3.95847 4.80114 3.95847 4.96654V12.866C3.96607 12.9521 3.95469 13.0389 3.92505 13.1206C3.89541 13.2024 3.84816 13.2774 3.7863 13.341C3.72443 13.4045 3.64931 13.4551 3.56569 13.4897C3.48208 13.5242 3.39181 13.5419 3.3006 13.5416ZM1.3818 12.2423H2.5879V5.64215H1.3818V12.2423Z" fill="black" />
              <path d="M21.8307 17.7003H21.6663L3.13618 13.5423C2.98132 13.5175 2.84092 13.441 2.74037 13.3266C2.63982 13.2122 2.58576 13.0675 2.58795 12.9186V4.96658C2.60362 4.82274 2.66414 4.6866 2.76179 4.57551C2.85943 4.46443 2.98978 4.38344 3.13618 4.34289L21.6663 0.184956C21.7639 0.160547 21.8668 0.162191 21.9636 0.189705C22.0603 0.217219 22.1471 0.269534 22.2145 0.340878C22.2939 0.39468 22.3598 0.464569 22.4072 0.545476C22.4546 0.626383 22.4824 0.71628 22.4886 0.808646V17.0246C22.4909 17.1258 22.4671 17.226 22.4193 17.3166C22.3716 17.4071 22.3013 17.4853 22.2145 17.5443C22.1103 17.638 21.9742 17.6933 21.8307 17.7003ZM3.95852 12.3469L21.118 16.193V1.64023L3.95852 5.48632V12.3469Z" fill="black" />
              <path d="M12.0173 18.2196H11.8528L6.86394 17.1802C6.70922 17.1366 6.57296 17.0478 6.47454 16.9265C6.37611 16.8052 6.32054 16.6576 6.31572 16.5046V13.8541C6.31097 13.7577 6.32809 13.6614 6.36592 13.5717C6.40374 13.4821 6.4614 13.4012 6.53501 13.3344C6.6226 13.2788 6.72136 13.2408 6.82511 13.2229C6.92887 13.205 7.0354 13.2076 7.13806 13.2305L12.1269 14.2699C12.2818 14.2947 12.4222 14.3712 12.5227 14.4856C12.6233 14.6 12.6774 14.7447 12.6752 14.8935V17.544C12.6724 17.737 12.5943 17.9222 12.4559 18.0637C12.3324 18.161 12.1778 18.216 12.0173 18.2196ZM7.68628 15.9849L11.3046 16.7645V15.4132L7.68628 14.6857V15.9849Z" fill="black" />
            </svg>
          </button>

          <div className="flex items-end">
            <button className="text-gray-800 font-medium rounded-lg text-base cursor-pointer hover:text-[#366938]">Daftar</button>
          </div>

        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </header>
      {isSearchActive && (
        <div
          className={`bg-gray-100 px-36 py-3 shadow-md fixed top-20 left-0 w-full z-50 flex items-center gap-2 transition-all duration-700 ease-in-out ${isSearchActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
        >
          <input
            type="text"
            className="flex-1 p-2 pl-5 border border-gray-300 rounded-lg text-base"
            placeholder="Cari sesuatu..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="text-gray-800 p-2 rounded-md flex items-center justify-center hover:text-[#366938]" onClick={handleSearchSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <g clip-path="url(#clip0_255_316)">
                <path d="M8.77355 17.4677C3.98248 17.4677 0.0527344 13.5918 0.0527344 8.74687C0.0527344 3.90198 3.98248 0.026062 8.77355 0.026062C13.5646 0.026062 17.4944 3.95581 17.4944 8.74687C17.4944 13.5379 13.5646 17.4677 8.77355 17.4677ZM8.77355 1.4257C5.75894 1.4257 3.06734 3.20216 1.93686 6.00143C0.806385 8.80071 1.45237 11.923 3.55183 14.0224C5.65128 16.1219 8.82738 16.7679 11.6267 15.5836C14.4259 14.3993 16.1486 11.7076 16.1486 8.74687C16.1486 6.80892 15.3949 4.92479 13.9953 3.52515C12.5956 2.12552 10.7115 1.4257 8.77355 1.4257Z" fill="black" />
                <path d="M18.2586 17.4569C18.0971 17.4569 17.9356 17.4031 17.8279 17.2416L14.7595 14.227C14.4903 13.9578 14.4903 13.5272 14.7595 13.3119C15.0286 13.0427 15.4055 13.0427 15.6746 13.3119L18.7431 16.3265C18.8507 16.4341 18.9584 16.5956 18.9584 16.7571C18.9584 16.9186 18.9046 17.0801 18.7431 17.1878C18.6354 17.4031 18.4201 17.4569 18.2586 17.4569Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_255_316">
                  <rect width="19" height="17.5469" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      )}


      {/* Dropdown Menu - Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-white p-4 rounded-lg shadow-lg pt-20 fixed top-0 left-0 w-full ">
          <button onClick={handleProductClick} className="text-start text-md font-medium py-2 rounded-md">
            Produk
          </button>
          <div className="border-t-2 border-gray-100 my-2"></div>

          <Link href="/client/customer" className="text-[17px] font-medium py-2  rounded-md">
            Pelanggan
          </Link>

          <div className="border-t-2 border-gray-100 my-2"></div>

          {/* Perusahaan - Dropdown */}
          <div className="mt-2">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-[17px] font-medium flex items-center ">
              Perusahaan
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}/>
            </button>

            <div className="border-t-2 border-gray-100 my-2"></div>
            {dropdownOpen && (
              <div className="mt-2 mr-10 bg-white rounded-md text-[10px]">
                <ListItem title="Tentang Kami" href="/client/aboutUs" />
                <ListItem title="Tim Kami" href="/client/company" />
                <ListItem title="Press" href="/client/press" />
                <ListItem title="Karir" href="/client/karir" />
                <ListItem title="Godong Story" href="/client/GodongStory" />
              </div>
            )}
          </div>
          <div className="flex items-end mt-2">
            <button className="text-[#db5757] font-bold rounded-lg text-base cursor-pointer hover:text-[#39793c]">Daftar</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Component untuk item dalam dropdown
const ListItem = ({ href, title }: { href: string; title: string }) => (
  <Link href={href} className="block text-[15px] py-1 hover:text-green-600">
    {title}
  </Link>
);
