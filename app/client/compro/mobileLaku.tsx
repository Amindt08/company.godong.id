import GetTitleById from '@/components/CMS_Product_Page/Title/page';
import React from 'react';

const MobileLaku: React.FC = () => {
    return (
        <div className='p-6 mb-80' id='mobile-laku'>
            <h1 className='font-bold text-2xl'><GetTitleById id={17}/></h1>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mt-6'>
                <div className='p-4 border border-gray-200 bg-slate-50'>
                    <p className="t-2 text-[12px] font-light text-gray-600">
                        belum ada produk
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MobileLaku;
