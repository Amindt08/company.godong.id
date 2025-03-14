import React from "react";
import Footer from '@/components/Footer';
import Navigation from "@/components/NavigationMobile";
import GetDeskripsiById from "@/components/CMS_MK_Lite_Page/Deskripsi/page";
import GetTitleById from "@/components/CMS_MK_Lite_Page/Title/page";

const MasterDataPage = () => {
  return (
    <div className="font-poppins h-screen flex flex-col">

      <div className="fixed bg-white w-full h-[90px] shadow-md">
        <Navigation />
      </div>

      <section className="bg-white pt-20 px-8 text-center mt-32">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 lg:px-32">
          <GetTitleById id={9}/>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg mb-6 sm:mb-8 lg:px-28">
          <GetDeskripsiById id={8}/>
        </p>

        <button className="mt-4 bg-[#88AF8A] text-white py-2 px-6 rounded">
          MASTER DATA
        </button>
      </section>

      {/* Master Data Section */}
      <div className="md:mx-20">
        <div className="w-full pt-24">
          <h1 className="text-3xl font-semibold"><GetTitleById id={10}/></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
            <div className="p-4 flex flex-col m-2">
              <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
              <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={11}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={12}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={13}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={14}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={15}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={16}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={17}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={18}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={19}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={20}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={21}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={22}/></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="p-4 flex flex-col m-2">
            <img src="/hp.png" alt="Image" className="w-20 h-20 p-2 bg-master border border-gray-200" />
            <h1 className="font-semibold pt-2 pb-4"><GetTitleById id={23}/></h1>
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
          <GetTitleById id={24}/>
          </h1>
          <p className="pt-4 sm:pt-6 text-sm sm:text-base md:text-lg">
            <GetDeskripsiById id={10}/>
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