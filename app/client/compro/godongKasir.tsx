import React from 'react';

const GodongKasir: React.FC = () => {
    return (
        <div className='p-6 mb-40' id='godong-kasir'>
            <h1 className='font-bold text-2xl'>Godong Kasir</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                <div className='p-4 border border-gray-200'>
                    <div className='flex'>
                        <img src="/ritel.svg" alt="ritel" className="w-[90px] h-[90px]" />
                        <div className='px-4'>
                            <h1 className="font-semibold text-xl">RITEL</h1>
                            <p className="mt-2 font-light text-[12px] text-gray-600">
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
                        <img src="/bengkel.svg" alt="ritel" className="w-[90px] h-[90px]" />
                        <div className='px-4'>
                            <h1 className="font-semibold text-xl">BENGKEL</h1>
                            <p className="mt-2 font-light text-[12px] text-gray-600">
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
                        <img src="/toko.svg" alt="ritel" className="w-[90px] h-[90px]" />
                        <div className='px-4'>
                            <h1 className="font-semibold text-xl">TOKO</h1>
                            <p className="mt-2 font-light text-[12px] text-gray-600">
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

export default GodongKasir;
