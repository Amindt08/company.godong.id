import React from "react";

const Marketplace: React.FC = () => {
    return (
        <div className="p-4 md:p-6 mb-40" id="marketplace">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center bg-white px-6 md:px-20  mt-6 mx-20 border border-gray-300">
                <div className="md:w-1/2 text-center md:text-left pt-28">
                    <img 
                        src="/logoGodong.svg" 
                        alt="godong.id" 
                        className="w-24 md:w-32 h-auto mx-auto md:mx-0"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-black my-2">
                        MARKETPLACE
                    </h1>
                    <p className="text-gray-700 mt-4 font-light break-words">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatum, esse ipsam totam cumque dolore sint alias, ea neque eius nemo laudantium repudiandae inventore quod. At ratione deleniti officia quam?.
                    </p>
                    <button className="bg-godongButton text-white py-2 px-6 rounded-sm mt-4 md:mt-6 hover:bg-green-800">
                        JELAJAHI MARKETPLACE
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img
                        src="/mark1.png"
                        alt="Illustration"
                        className="w-[400px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
