import React from 'react';

const MobileLaku: React.FC = () => {
    return (
        <div className='p-6 mb-4' id='mobile-laku'>
            <h1 className='font-extrabold text-3xl'>Mobile Laku</h1>
            <p className='mt-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus necessitatibus ratione aliquam quas repudiandae corrupti, 
                temporibus officia suscipit quae sed, labore incidunt doloremque ea 
                totam perspiciatis aliquid! Quaerat, labore eaque.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mt-6'>
                <div className='bg-slate-50 p-4 shadow-sm'>
                    <p className="mt-2 text-xl text-gray-600">
                        belum ada produk
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MobileLaku;
