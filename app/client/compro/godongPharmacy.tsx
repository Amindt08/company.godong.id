import React from 'react';

const GodongPharmacy: React.FC = () => {
    return (
        <div className='p-6 mb-60' id='godong-pharmacy'>
            <h1 className='font-bold text-2xl'>Godong Pharmacy</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                <div className='p-4 border border-gray-200'>
                    <div className='flex'>
                        <img src="/mobile.svg" alt="mobile" style={{ width: "100px", height: "100px" }} />
                        <div className='px-4'>
                            <h1 className="text-xl font-semibold">Versi Mobile</h1>
                            <p className="mt-2 text-[12px] font-light text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-4 border border-gray-200'>
                    <div className='flex'>
                        <img src="/web.svg" alt="mobile" style={{ width: "100px", height: "100px" }} />
                        <div className='px-4'>
                            <h1 className="text-xl font-semibold">Versi Web</h1>
                            <p className="mt-2 text-[12px] font-light text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GodongPharmacy;
