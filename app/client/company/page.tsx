import Footer from '@/components/Footer';
import React from 'react';

export default function Teamspage() {
    return (
        <div className="bg-white">
            <div className="w-full max-w-6xl mx-auto px-4">
                {/* Bagian Tim Godong */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
                    <div className="max-w-md text-center md:text-left">
                        <h1 className="text-[#010101] text-4xl md:text-6xl font-normal leading-tight">Tim Godong</h1>
                        <p className="text-[#333333] text-lg md:text-xl leading-relaxed mt-4">
                            Penjelasan singkat mengenai Tim Godong yang lebih ringkas dan mudah dibaca di berbagai perangkat.
                        </p>
                    </div>
                    {/* Grid Foto */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl">
                        {[...Array(6)].map((_, index) => (
                            <img key={index} className="w-full h-auto rounded-md shadow" src="/pak1.png" />
                        ))}
                    </div>
                </div>

                {/* First Section */}
<div className="w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left py-10 gap-6">
    <div className="max-w-lg">
        <h2 className="text-4xl sm:text-7xl md:text-5xl text-black">5+ Tahun</h2>
        <p className="text-gray-600 text-xl sm:text-3xl md:text-xl font-bold mt-2">
            Pengalaman dalam mengembangkan berbagai inovasi dan solusi terbaik.
        </p>
    </div>
    <div>
        <img src="/5t.png" alt="Device Mockup" className="w-62 sm:w-82 md:w-80 h-auto object-contain" />
    </div>
</div>


                {/* Tim Members */}
                <section className="py-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                        Tim <span className="text-green-500">Godong</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[{ name: "BUSTANUL ASY'ARI", role: "Head Marketing", img: "/pak1.png" },
                          { name: "JAWARA RAMADHAN DIO", role: "Business Development", img: "/pak2.png" },
                          { name: "T. ANGGAYUHNO PAMBUDI", role: "Implementation Application Support", img: "/pak3.png" }].map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                                <img src={member.img} alt={member.name} className="w-24 md:w-32 h-24 md:h-32 mx-auto rounded-full shadow-md mb-4" />
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
