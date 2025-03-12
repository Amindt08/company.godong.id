import React from 'react';

const MobileKasir: React.FC = () => {
    return (
        <div className='p-6 mb-40' id='mobile-kasir'>
            <h1 className='font-bold text-2xl'>Mobile Kasir</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                <div className='p-4 border border-gray-200'>
                    <div className='flex'>
                        <img src="/lite.svg" alt="lite" style={{ width: "130px", height: "130px" }} />
                        <div className='p-4'>
                            <h1 className="text-lg font-semibold">Versi Lite</h1>
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
                        <img src="/pro.svg" alt="lite" style={{ width: "130px", height: "130px" }} />
                        <div className='p-4'>
                            <h1 className="text-lg font-semibold">Versi Pro</h1>
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
}

export default MobileKasir;
