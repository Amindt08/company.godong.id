import React from 'react';

const GodongPharmacy: React.FC = () => {
    return (
        <div className='p-6 mb-4' id='godong-pharmacy'>
            <h1 className='font-extrabold text-3xl'>Godong Pharmacy</h1>
            <p className='mt-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus necessitatibus ratione aliquam quas repudiandae corrupti, 
                temporibus officia suscipit quae sed, labore incidunt doloremque ea 
                totam perspiciatis aliquid! Quaerat, labore eaque.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                <div className='bg-slate-50 p-4 shadow-sm'>
                    <img src="/mobilee.png" alt="mobile"  style={{ width: "100px", height: "100px" }} />
                    <h1 className="text-xl font-semibold">Versi Mobile</h1>
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
                <div className='bg-slate-50 p-4 rounded-t-md'>
                    <img src="/web.png" alt="pro"  style={{ width: "100px", height: "100px" }} />
                    <h1 className="text-xl font-semibold">Versi Web</h1>
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

export default GodongPharmacy;
