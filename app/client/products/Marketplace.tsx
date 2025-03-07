import React from "react";

const Marketplace: React.FC = () => {
    return (
        <div className="p-4 md:p-6 mb-4" id="marketplace">
            <h1 className="font-extrabold text-2xl md:text-3xl">Marketplace</h1>
            <p className="mt-2 text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus necessitatibus ratione aliquam quas repudiandae corrupti, 
                temporibus officia suscipit quae sed, labore incidunt doloremque ea 
                totam perspiciatis aliquid! Quaerat, labore eaque.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white px-6 md:px-20 py-6 md:py-10 mt-6 shadow-lg">
                <div className="md:w-1/2 text-center md:text-left">
                    <img 
                        src="/godonglog.png" 
                        alt="godong.id" 
                        className="w-24 md:w-32 h-auto mx-auto md:mx-0"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-black my-2">
                        MARKETPLACE
                    </h1>
                    <p className="text-gray-700 mt-4 text-base md:text-xl break-words">
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
                        className="w-4/5 sm:w-3/4 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
