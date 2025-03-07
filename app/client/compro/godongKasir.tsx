import React from 'react';

const GodongKasir: React.FC = () => {
    return (
        <div className='p-6 mb-4' id='godong-kasir'>
            <h1 className='font-extrabold text-3xl'>Godong Kasir</h1>
            <p className='mt-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus necessitatibus ratione aliquam quas repudiandae corrupti, 
                temporibus officia suscipit quae sed, labore incidunt doloremque ea 
                totam perspiciatis aliquid! Quaerat, labore eaque.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                {/** Item 1 */}
                <div className='bg-slate-50 p-4 shadow-sm'>
                    <img src="/ritel.png" alt="ritel" className="w-[150px] h-[150px]" />
                    <h1 className="text-xl font-semibold">RITEL</h1>
                    <p className="mt-2 text-xl text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea cumque quod ipsum illum, dolore expedita fugiat ducimus 
                        consectetur nam necessitatibus laboriosam distinctio aliquid 
                        iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                    </p>
                    <button className="bg-coba hover:bg-godongText text-white rounded-sm px-3 py-2 mt-3">
                        COBA SEKARANG <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>

                {/** Item 2 */}
                <div className='bg-slate-50 p-4 shadow-sm'>
                    <img src="/bengkel.png" alt="bengkel" className="w-[150px] h-[150px]" />
                    <h1 className="text-xl font-semibold">BENGKEL</h1>
                    <p className="mt-2 text-xl text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea cumque quod ipsum illum, dolore expedita fugiat ducimus 
                        consectetur nam necessitatibus laboriosam distinctio aliquid 
                        iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                    </p>
                    <button className="bg-coba hover:bg-godongText text-white rounded-sm px-3 py-2 mt-3">
                        COBA SEKARANG <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>

                {/** Item 3 */}
                <div className='bg-slate-50 p-4 shadow-sm'>
                    <img src="/toko.png" alt="toko" className="w-[150px] h-[150px]" />
                    <h1 className="text-xl font-semibold">TOKO</h1>
                    <p className="mt-2 text-xl text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea cumque quod ipsum illum, dolore expedita fugiat ducimus 
                        consectetur nam necessitatibus laboriosam distinctio aliquid 
                        iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                    </p>
                    <button className="bg-coba hover:bg-godongText text-white rounded-sm px-3 py-2 mt-3">
                        COBA SEKARANG <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GodongKasir;
