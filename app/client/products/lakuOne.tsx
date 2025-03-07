import React from "react";

const LakuOne: React.FC = () => {
    return (
        <div className='p-6 mb-4' id="lakuone">
            <h1 className='font-extrabold text-3xl'>Laku One</h1>
            <p className='mt-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus necessitatibus ratione aliquam quas repudiandae corrupti, 
                temporibus officia suscipit quae sed, labore incidunt doloremque ea 
                totam perspiciatis aliquid! Quaerat, labore eaque.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between bg-green-100 px-2 mt-10">
                {/* Logo Laku One di atas teks */}
                <div className="mb-4 text-center">
                    <img 
                        src="/logolaku.png" 
                        alt="laku" 
                        style={{ width: "60px", height: "60px" }} // Ukuran kecil untuk logo
                    />
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm">Suite all-in-one:</p>
                    <h1 className="text-4xl font-bold my-2">
                        Laku One
                    </h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className="text-gray-700 mt-4 text-xl break-words">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatum, esse ipsam totam cumque dolore sint alias, ea neque eius nemo laudantium repudiandae inventore quod. At ratione deleniti officia quam?.
                    </p>
                    <button className="bg-godongButton text-white py-2 px-6 rounded-sm mt-6 bg-green-800 hover:bg-green-400 ">
                        <a href="/laku-one-page">COBA LAKU ONE</a>
                    </button>
                </div>

                <div className="md:w-1/3 mt-8 md:mt-0">
                    <img
                        src="/loglak.png"
                        alt="Illustration"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default LakuOne;
