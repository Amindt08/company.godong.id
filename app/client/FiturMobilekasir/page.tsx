import React from "react";
import Footer from '@/components/Footer';
import Navigation from "@/components/NavigationMobile";

const MasterDataPage = () => {
  return (
    <div className="h-screen flex flex-col">
      
     <div className="fixed bg-white w-full h-[75px] z-10">
             <Navigation />
           </div>
      
      <section className="bg-white pt-20 px-8 text-center mt-32">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 lg:px-32">
          SEDERHANAKAN OPERASIONAL ANDA, MAKSIMALKAN POTENSI BISNIS
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg mb-6 sm:mb-8 lg:px-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat pariatur distinctio laudantium, dicta inventore qui 
          voluptates dolor corporis sapiente quos sint architecto quasi 
          expedita ipsum nisi nemo consequatur facere adipisci!
        </p>

        <button className="mt-4 bg-[#88AF8A] text-white py-2 px-6 rounded">
          MULAI SEKARANG
        </button>
      </section>

      {/* Master Data Section */}
      <div className="md:mx-20">
        <div className="w-full pt-24">
          <h1 className="text-3xl font-semibold">Master Data</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 bg-master" />
              <h1 className="font-semibold pt-2 pb-4">Barang atau Jasa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            {/* Repeat for other items */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-5 sm:px-10 md:px-20 lg:px-40 pb-10 xl:px-56 bg-gradient-to-b from-white to-button">
        <div className="w-full text-center pt-16 sm:pt-20 lg:pt-24">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Siap Mengambil Langkah Berikutnya?                    
          </h1>
          <p className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minima illum cumque pariatur quaerat? 
            Dignissimos, distinctio culpa laboriosam neque fugiat voluptate hic ad harum eum nemo in, voluptatem 
            molestiae dolorem?
          </p>
          <button className="mt-4 bg-[#538055] text-white py-2 px-6 rounded">
            MULAI SEKARANG
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MasterDataPage;