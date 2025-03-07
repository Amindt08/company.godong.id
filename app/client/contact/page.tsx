'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Footer from "@/components/Footer"
import React from "react"

const contactCards = [
    {
        id: 1,
        badge: "SAYA PELANGGAN BARU",
        badgeColor: "bg-[#049949]",
        icon: "/icon/card_1_contact.png",
        description: "Ingin mencoba demo dari aplikasi nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    },
    {
        id: 2,
        badge: "SAYA PELANGGAN LAMA",
        badgeColor: "bg-[#e44d4d]",
        icon: "/icon/card_2_contact.png",
        description: "Ingin mencoba demo dari nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    },
    {
        id: 3,
        badge: "BANTUAN",
        badgeColor: "bg-[#049949]",
        icon: "/icon/card_3_contact.png",
        description: "Ingin mencoba demo dari aplikasi nya dan pertanyaan seputar godong?",
        link: "https://laku.godong.id"
    }
]

export default function ContactPage() {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className="w-screen py-16 flex flex-col bg-gradient-to-b from-[#EBF1EE] to-white">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-3xl font-bold mb-2">Mencari hal yang spesifik?</h1>
                    <p className="text-gray-600 mb-12">Kami siap membantu</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto bg-white rounded-lg shadow p-4">
                        {contactCards.map((card) => (
                            <div key={card.id} className="bg-[#f0f0f0] rounded-lg p-4 flex flex-col items-center h-auto sm:h-[380px]">
                                <Badge className={card.badgeColor}>{card.badge}</Badge>
                                <img src={card.icon} alt={card.badge} className="w-32 h-32 mt-8 mb-6" />
                                <p className="text-[#333] text-lg text-center px-2">{card.description}</p>
                                <Link href={card.link} className="text-[#056cb8] text-lg underline mt-4">{card.link}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold leading-tight">Tertarik dengan produk? Hubungi tim penjualan kami</h2>
                    <p className="text-gray-600 mt-4">Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk menghubungi kami.</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    {[{
                        title: "Location",
                        value: "Jl. Letkol Suwarno Ruko Bale Lintang No.2 Kota Madiun - Jawa Timur",
                        icon: "location"
                    }, {
                        title: "Email Address",
                        value: "info@godong.id",
                        icon: "email"
                    }, {
                        title: "Phone number",
                        value: "0811-3036-09",
                        icon: "phone"
                    }].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#0D503C] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-600">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gradient-to-b from-white via-[#DCE7DA] to-white py-16 px-4">
                <div className="container mx-auto text-left">
                    <h2 className="text-2xl font-bold text-center mb-6">Bantuan dan Pertanyaan</h2>
                    <form className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
                        {['Name', 'Email', 'Subject'].map((field) => (
                            <div key={field} className="mb-4">
                                <Label htmlFor={field.toLowerCase()}>{field}</Label>
                                <Input id={field.toLowerCase()} type={field === 'Email' ? 'email' : 'text'} placeholder={`${field}*`} required />
                            </div>
                        ))}
                        <div className="mb-4">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your Message*" className="min-h-[100px]" required />
                        </div>
                        <Button type="submit" className="w-full bg-[#0D503C] text-white hover:bg-[#0a3f2f]">SUBMIT</Button>
                    </form>
                </div>
            </div>
            <section className="bg-white py-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/lusi.png" alt="Deskripsi Gambar" className="w-40 sm:w-50 md:w-60 lg:w-80 h-auto" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Kami hadir untuk membantu bisnis Anda berkembang</h1>
                    <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto md:mx-0">Temukan solusi yang benar-benar sesuai dengan kebutuhan bisnis Anda.</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}