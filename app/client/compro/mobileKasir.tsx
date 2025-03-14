import React from 'react';
import GetTitleById from '@/components/CMS_Product_Page/Title/page';
import GetImageById from '@/components/CMS_Product_Page/Image/page';

const MobileKasir: React.FC = () => {
    return (
        <div className='p-6 mb-40' id='mobile-kasir'>
            <h1 className='font-bold text-2xl'><GetTitleById id={14}/></h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
                <div className='p-4 border border-gray-200'>
                    <div className='flex'>
                        {/* <img src="/lite.svg" alt="lite" style={{ width: "130px", height: "130px" }} /> */}
                        <GetImageById id={12}/>
                        <div className='p-4'>
                            <h1 className="text-lg font-semibold"><GetTitleById id={15}/></h1>
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
                        {/* <img src="/pro.svg" alt="lite" style={{ width: "130px", height: "130px" }} /> */}
                        <GetImageById id={13}/>
                        <div className='p-4'>
                            <h1 className="text-lg font-semibold"><GetTitleById id={16}/></h1>
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
