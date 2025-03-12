import React from "react";

const LakuOne: React.FC = () => {
    return (
        <div className='py-6 mb-40' id="lakuone">
            <div className="flex flex-col md:flex-row bg-green-100 mx-20 px-2 py-8">
                {/* Logo Laku One di atas teks */}
                <div className="mb-4 text-center">
                    <img 
                        className="w-40 h-40 mb-20"
                        src="/logolaku.png" 
                        alt="laku" 
                    />
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm">Suite all-in-one:</p>
                    <h1 className="text-4xl font-bold my-2">
                        Laku One
                    </h1>
                    <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className="text-gray-700 mt-4 font-light break-words">
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
