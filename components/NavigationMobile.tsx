"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-poppins bg-[#CADBBB] mt-12 py-2 px-6 w-full  relative z-40">

      {/* Header Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="col-span-1 flex justify-center pt-2 ml-[145px]">
          <Image src="/Logo_Mobile_Kasir.svg" width={100} height={21} alt="godong.id Logo" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center text-end gap-4 pr-48">
          <Link href="/client/Mobilekasir/fitur" className="text-[14px] font-normal px-3 py-2">
            Fitur
          </Link>
          <Link href="/client/Mobilekasir/harga" className="text-[14px] font-normal px-3 py-2">
            Harga
          </Link>
          <Link href="/client/Mobilekasir/solusi " className="text-[14px] font-normal px-3 py-2">
            Solusi
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav
        className="absolute top-[70px] left-0 w-[90%] bg-[#CADBBB] z-40 p-6 rounded-lg shadow-md flex flex-col items-start gap-4 mx-4">
          <Link href="/client/FiturGodkasir" className="text-[17px] font-normal px-2 py-1">
            Fitur
          </Link>
          <Link href="/client/HargaGodkasir" className="text-[17px] font-normal px-2 py-1">
            Harga
          </Link>
          <Link href="/solusi" className="text-[17px] font-normal px-2 py-1">
            Solusi
          </Link>
        </nav>
      )}
    </div>
  );
}
