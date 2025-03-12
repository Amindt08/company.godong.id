import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

export default function Footer() {
    return (
        <div className="w-full bg-[#CADBBB] py-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                        <img src="/logoGodong.svg" alt="Godong Logo" className="h-8 mb-4" />
                        <p className="text-sm text-gray-600">
                            Kami menawarkan berbagai layanan SaaS yang dirancang untuk memenuhi kebutuhan beragam bisnis.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Alamat</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <MapPin />
                            <span className='flex items-center gap-2'>Jl. Letkol Suwarno Ruko Bale Lintang No. 2 Kota Madiun - Jawa Timur</span>
                        </div>
                    </div>

                    <div >
                        <h4 className="font-semibold mb-4">Hubungi Kami</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Phone />
                            <span>0811-0516-19</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail />
                            <span>info@godong.id</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Newsletter</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Untuk mendapatkan informasi dari kami secara langsung, silakan daftarkan email anda.
                        </p>

                        <Input type="email" placeholder="Email Anda" className='bg-[#F5EFE0]' icon={<Send className="w-4 h-4" />} />

                    </div>
                    <div >
                        <h4 className="font-semibold mb-4">Coba Hari Ini</h4>
                        <p className='text-sm text-gray-600 mb-4'>
                            Coba gratis sekarang
                        </p>
                        <button className="bg-[#366938] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Coba sekarang
                        </button>
                    </div>
                </div>

                <hr className='mt-8 border-t border-black'/>
                <div className="flex justify-between items-center pt-6 border-t border-gray-300">
                    <p className="text-sm text-gray-600">
                        Copyright © 2024 All right reserved by Godong.id
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-[#366938]"><Facebook/></a>
                        <a href="#" className="text-gray-600 hover:text-[#366938]"><Twitter/></a>
                        <a href="#" className="text-gray-600 hover:text-[#366938]"><Linkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
