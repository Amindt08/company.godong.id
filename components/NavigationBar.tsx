"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Ellipsis, Megaphone, Search, Menu, X } from "lucide-react";
import axios from "axios";
import { Button } from "./ui/button";
import { apiEndpoints } from "@/app/api/api";
import GetNavbarById from '@/components/CMS_Landing/Navbar/page';
import GetImageById from "./CMS_Landing/Image/page";
import Apps from "@/app/client/products/page";
import PopUpProduct from "@/app/client/products/page1";


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
  const [dropdownProductOpen, setDropdownProductOpen] = useState(false);
  const [dropdownPerusahaanOpen, setDropdownPerusahaanOpen] = useState(false);
  const [dropdownSelengkapnyaOpen, setDropdownSelengkapnyaOpen] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false); // State untuk toggle Produk
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);




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

  const handleSetActive = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


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

  // Fungsi untuk menangani klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    // Menambahkan event listener saat dropdown terbuka
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousedown", handleSetActive);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleSetActive);
    };
  }, [dropdownOpen]);

  ``
  // Fungsi Toggle Produk
  const handleProductClick = () => {
    if (isProductPage) {
      router.push("/client/Landing"); // Kembali ke halaman Landing
    } else {
      router.push("/client/products"); // Pindah ke halaman Products
    }
    setIsProductPage(!isProductPage);
  };



  // Component untuk item dalam dropdown
  const ListItem = ({ href, title }: { href: string; title: string }) => (
    <Link href={href} className="block text-[15px] py-1 hover:text-[#366938] px-3">
      {title}
    </Link>
  );



  return (
    <div className="font-poppins ">
      <header className="flex items-center justify-between px-6 py-2 bg-white text-gray-800 border-b border-gray-300 fixed  w-full z-50 transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center pr-28">
          <Link href="/client/Landing">
            <Image src="/logoGodong.svg" width={128} height={29} alt="godong.id Logo" />
            {/* <GetImageById id={1} width={128} height={29}/> */}
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 gap-8 ">
          {[
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => { setDropdownProductOpen(!dropdownProductOpen); handleSetActive(0); }}
                className={`text-[15px] font-medium ${activeIndex === 0 ? "text-[#366938]" : "text-gray-800"} hover:text-[#366938]`}
              >
                <GetNavbarById id={1} />
              </button>
              {dropdownProductOpen && (
                <Apps/>
              )}
            </div>,

            <Link
              href="/client/customer"
              className={`text-[15px] font-medium ${activeIndex === 1 ? "text-[#366938]" : "text-gray-800"} hover:text-[#366938]`}
              onClick={() => handleSetActive(1)}
            >
              <GetNavbarById id={2} />
            </Link>
            ,

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => { setDropdownOpen(!dropdownOpen); handleSetActive(2); }}
                className={`text-[15px] font-medium flex items-center gap-1 ${activeIndex === 2 ? "text-[#366938]" : "text-gray-800"} hover:text-[#366938]`}
              >
                <GetNavbarById id={3} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 w-[200px] p-3">
                  <ul className="grid gap-3">
                    <ListItem title="Tentang Kami" href="/client/aboutUs" />
                    <ListItem title="Tim Kami" href="/client/company" />
                    <div className="border-t border-gray-200"></div>
                    <ListItem title="Press" href="/client/press" />
                    <ListItem title="Karir" href="/client/karir" />
                    <div className="border-t border-gray-200"></div>
                    <ListItem title="Godong Story" href="/client/GodongStory" />
                  </ul>
                </div>
              )}
            </div>,

            <div className="relative" onMouseEnter={() => setEllipsisMenuOpen(true)} onMouseLeave={() => setEllipsisMenuOpen(false)}>
              <Ellipsis className="cursor-pointer hover:text-[#366938]" height={25} width={25} />
              {ellipsisMenuOpen && (
                <div className="absolute top-full left-1 mt-2 bg-white  border border-gray-200 w-[200px] p-3">
                  <ul className="grid gap-3">
                    <ListItem title="Privasi Policy" href="/client/privasiPolicy" />
                    <ListItem title="FAQ" href="/client/faq" />
                    <div className="border-t border-gray-200 "></div>
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
              className={`cursor-pointer font-medium transition-colors flex items-center ${activeDropdown === index ? "text-black" : "text-gray-800"
                }`}
              onClick={() => toggleDropdown(index)}
            >
              {item}
              {(index === 0 || index === 2) && (
                <span className={`hover:text-[#366938] text-gray-500 ml-2 transform transition-transform  ${activeDropdown === index ? "rotate-180" : ""}`}>
                  <ChevronDown size={16} />
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Menu Kanan (Search, Megaphone, Masuk) */}
        <div className="hidden lg:flex items-end gap-5 lg:px-8">

          <button className="text-lg mb-2" onClick={toggleSearch}>
            {isSearchActive ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="20" y1="8" x2="8" y2="20" /><line x1="8" y1="8" x2="20" y2="20" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <g clipPath="url(#clip0_255_316)">
                  <path d="M8.77355 17.4677C3.98248 17.4677 0.0527344 13.5918 0.0527344 8.74687C0.0527344 3.90198 3.98248 0.026062 8.77355 0.026062C13.5646 0.026062 17.4944 3.95581 17.4944 8.74687C17.4944 13.5379 13.5646 17.4677 8.77355 17.4677ZM8.77355 1.4257C5.75894 1.4257 3.06734 3.20216 1.93686 6.00143C0.806385 8.80071 1.45237 11.923 3.55183 14.0224C5.65128 16.1219 8.82738 16.7679 11.6267 15.5836C14.4259 14.3993 16.1486 11.7076 16.1486 8.74687C16.1486 6.80892 15.3949 4.92479 13.9953 3.52515C12.5956 2.12552 10.7115 1.4257 8.77355 1.4257Z" fill="black" />
                  <path d="M18.2586 17.4569C18.0971 17.4569 17.9356 17.4031 17.8279 17.2416L14.7595 14.227C14.4903 13.9578 14.4903 13.5272 14.7595 13.3119C15.0286 13.0427 15.4055 13.0427 15.6746 13.3119L18.7431 16.3265C18.8507 16.4341 18.9584 16.5956 18.9584 16.7571C18.9584 16.9186 18.9046 17.0801 18.7431 17.1878C18.6354 17.4031 18.4201 17.4569 18.2586 17.4569Z" fill="black" />
                </g>
              </svg>
            )}
          </button>

          <button className="text-lg mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
              <path d="M3.3006 13.5416H0.669107C0.489746 13.5285 0.322253 13.4516 0.200235 13.3262C0.0782167 13.2009 0.0107006 13.0365 0.0112336 12.866V4.96654C0.0238979 4.80512 0.0972759 4.65337 0.218014 4.53892C0.338753 4.42446 0.498827 4.3549 0.669107 4.3429H3.3006C3.47508 4.3429 3.64241 4.4086 3.76579 4.52556C3.88916 4.64251 3.95847 4.80114 3.95847 4.96654V12.866C3.96607 12.9521 3.95469 13.0389 3.92505 13.1206C3.89541 13.2024 3.84816 13.2774 3.7863 13.341C3.72443 13.4045 3.64931 13.4551 3.56569 13.4897C3.48208 13.5242 3.39181 13.5419 3.3006 13.5416ZM1.3818 12.2423H2.5879V5.64215H1.3818V12.2423Z" fill="black" />
              <path d="M21.8307 17.7003H21.6663L3.13618 13.5423C2.98132 13.5175 2.84092 13.441 2.74037 13.3266C2.63982 13.2122 2.58576 13.0675 2.58795 12.9186V4.96658C2.60362 4.82274 2.66414 4.6866 2.76179 4.57551C2.85943 4.46443 2.98978 4.38344 3.13618 4.34289L21.6663 0.184956C21.7639 0.160547 21.8668 0.162191 21.9636 0.189705C22.0603 0.217219 22.1471 0.269534 22.2145 0.340878C22.2939 0.39468 22.3598 0.464569 22.4072 0.545476C22.4546 0.626383 22.4824 0.71628 22.4886 0.808646V17.0246C22.4909 17.1258 22.4671 17.226 22.4193 17.3166C22.3716 17.4071 22.3013 17.4853 22.2145 17.5443C22.1103 17.638 21.9742 17.6933 21.8307 17.7003ZM3.95852 12.3469L21.118 16.193V1.64023L3.95852 5.48632V12.3469Z" fill="black" />
              <path d="M12.0173 18.2196H11.8528L6.86394 17.1802C6.70922 17.1366 6.57296 17.0478 6.47454 16.9265C6.37611 16.8052 6.32054 16.6576 6.31572 16.5046V13.8541C6.31097 13.7577 6.32809 13.6614 6.36592 13.5717C6.40374 13.4821 6.4614 13.4012 6.53501 13.3344C6.6226 13.2788 6.72136 13.2408 6.82511 13.2229C6.92887 13.205 7.0354 13.2076 7.13806 13.2305L12.1269 14.2699C12.2818 14.2947 12.4222 14.3712 12.5227 14.4856C12.6233 14.6 12.6774 14.7447 12.6752 14.8935V17.544C12.6724 17.737 12.5943 17.9222 12.4559 18.0637C12.3324 18.161 12.1778 18.216 12.0173 18.2196ZM7.68628 15.9849L11.3046 16.7645V15.4132L7.68628 14.6857V15.9849Z" fill="black" />
            </svg>
          </button>

          <div className="flex items-end">
            <button className=" px-2 py-1  font-medium text-base cursor-pointer text-[#366938]">Masuk</button>
          </div>

          <div className="flex items-end">
            <button className=" px-2 py-1 border border-[#366938] hover:bg-[#366938] font-medium  text-base cursor-pointer text-[#366938] hover:text-white">Daftar</button>
          </div>

        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </header>
      {
        isSearchActive && (
          <div
            className={`bg-white px-36 py-3 border-b border-gray-300 fixed top-16 left-0 w-full z-0 flex items-center gap-2 transition-all duration-700 ease-in-out ${isSearchActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
          >
            <input
              type="text"
              className="flex-1 p-2 pl-5 border border-gray-300 text-base"
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
        )
      }


      {/* Dropdown Menu - Mobile */}
      {
        isMenuOpen && (
          <div className="lg:hidden flex flex-col bg-white p-3 border border-gray-200 pt-16 fixed top-0 left-0 w-full ">
            <input
              type="text"
              className="flex-1 p-2 pl-5 border border-gray-300 text-base mt-5"
              placeholder="Cari sesuatu..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleProductClick} className="text-start text-md font-normal pb-2 rounded-md pt-5">
              <GetNavbarById id={1} />
            </button>

            <Link href="/client/customer" className="text-[17px] font-normal py-2  rounded-md">
              <GetNavbarById id={2} />
            </Link>


            {/* Perusahaan - Dropdown */}
            <div className="mt-2">
              <button onClick={() => setDropdownPerusahaanOpen(!dropdownPerusahaanOpen)} className="text-[17px] font-normal flex items-center pb-2 gap-2 text-center">
                <GetNavbarById id={3} />
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownPerusahaanOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {dropdownPerusahaanOpen && (
                <div className="mt-2 bg-white rounded-md text-[10px] text-gray-600">
                  <ListItem title="Tentang Kami" href="/client/aboutUs" />
                  <ListItem title="Tim Kami" href="/client/company" />
                  <ListItem title="Press" href="/client/press" />
                  <ListItem title="Karir" href="/client/karir" />
                  <ListItem title="Godong Story" href="/client/GodongStory" />
                </div>
              )}
            </div>
            <div className="mt-2">
              <button onClick={() => setDropdownSelengkapnyaOpen(!dropdownSelengkapnyaOpen)} className="text-[17px] font-normal flex items-center pb-2 gap-2 text-center">
                <GetNavbarById id={4} />
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownSelengkapnyaOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {dropdownSelengkapnyaOpen && (
                <div className="mt-2 bg-white rounded-md text-[10px] text-gray-600">
                  <ListItem title="Privasi Policy" href="/client/privasiPolicy" />
                  <ListItem title="FAQ" href="/client/faq" />
                  <ListItem title="Hubungi Kami" href="/client/contact" />
                  <ListItem title="Berita" href="/client/news" />
                  <ListItem title="Dukungan" href="/client/support" />
                </div>
              )}
            </div>
            <div className="border-t border-gray-200 my-2"></div>

            <div className="flex items-end mt-2">
              <button className="text-[#db5757] font-bold py-2 text-base cursor-pointer hover:text-gray-500">Daftar</button>
            </div>
          </div>
        )
      }
    </div >
  );
}


