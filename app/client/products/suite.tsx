import GetTitleById from '@/components/CMS_Product_Page/Title/page';
import GetImageById from '@/components/CMS_Product_Page/Image/page';
import React from 'react';

const Suite: React.FC = () => {
    return (
        <div className='py-6 mb-32' id='suite'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                <div className="flex bg-blue-100 p-4 shadow-sm">
                    {/* <img src="/lakuone.png" alt="suite" style={{ width: "90px", height: "60px" }} /> */}
                    <GetImageById id={16} />
                    <div>
                        <div className='pl-3'>
                            <h1 className="text-[17px] font-semibold"><GetTitleById id={21} /></h1>
                            <p className="mt-2 text-[12px] font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-pink-100 p-4 shadow-sm">
                    <GetImageById id={16} />
                    <div>
                        <div className='pl-3'>
                            <h1 className="text-[17px] font-semibold"><GetTitleById id={21} /></h1>
                            <p className="mt-2 text-[12px] font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-green-100 p-4 shadow-sm">
                    <GetImageById id={16} />
                    <div>
                        <div className='pl-3'>
                            <h1 className="text-[17px] font-semibold"><GetTitleById id={21} /></h1>
                            <p className="mt-2 text-[12px] font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-orange-100 p-4 shadow-sm">
                    <GetImageById id={16} />
                    <div>
                        <div className='pl-3'>
                            <h1 className="text-[17px] font-semibold"><GetTitleById id={21} /></h1>
                            <p className="mt-2 text-[12px] font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ea cumque quod ipsum illum, dolore expedita fugiat ducimus
                                consectetur nam necessitatibus laboriosam distinctio aliquid
                                iure dolorem. Soluta, nisi? Ab, asperiores adipisci?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-yellow-100 p-4 shadow-sm">
                    <GetImageById id={16} />
                    <div>
                        <div className='pl-3'>
                            <h1 className="text-[17px] font-semibold"><GetTitleById id={21} /></h1>
                            <p className="mt-2 text-[12px] font-light">
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

export default Suite;
