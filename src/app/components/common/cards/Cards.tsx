import React from 'react';
import Image from 'next/image';

const Cards = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-[15px] w-full max-w-[1241px] h-auto bg-gray-100 mx-auto">
            {/* Feature Cards */}
            <div className="w-full h-auto md:h-[550px] bg-white shadow-lg rounded-[10px] opacity-100 transition-transform duration-500 hover:scale-105 p-[5px]">
                <Image
                    src="/home/card1.png" // Check this path
                    alt="Flexible Memberships"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-[10px]"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left font-akkurat">
                        Digital Marketing
                    </h2>
                    <p className="text-gray-600 text-left mb-4 font-akkurat">
                        The digital marketing course at CADD Manchester covers SEO, social media, email marketing, and analytics, equipping you to boost online presence and enhance career opportunities.
                    </p>
                    <button className="flex flex-start inline-block text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 py-2 px-4 rounded-[4px] shadow-md transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full h-auto md:h-[550px] bg-white shadow-lg rounded-[10px] opacity-100 transition-transform duration-500 hover:scale-105 p-[5px]">
                <Image
                    src="/home/card2.png" // Check this path
                    alt="Find Gyms Nearby"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-[10px]"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left font-akkurat">
                        Digital Marketing
                    </h2>
                    <p className="text-gray-600 text-left mb-4 font-akkurat">
                        The digital marketing course at CADD Manchester covers SEO, social media, email marketing, and analytics, equipping you to boost online presence and enhance career opportunities.
                    </p>
                    <button className="flex flex-start inline-block text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 py-2 px-4 rounded-[4px] shadow-md transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full h-auto md:h-[550px] bg-white shadow-lg rounded-[10px] opacity-100 transition-transform duration-500 hover:scale-105 p-[5px]">
                <Image
                    src="/home/card3.png" // Check this path
                    alt="Book & Pay Online"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-[10px]"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left font-akkurat">
                        Digital Marketing
                    </h2>
                    <p className="text-gray-600 text-left mb-4 font-akkurat">
                        The digital marketing course at CADD Manchester covers SEO, social media, email marketing, and analytics, equipping you to boost online presence and enhance career opportunities.
                    </p>
                    <button className="flex flex-start inline-block text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 py-2 px-4 rounded-[4px] shadow-md transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full h-auto md:h-[550px] bg-white shadow-lg rounded-[10px] opacity-100 transition-transform duration-500 hover:scale-105 p-[5px]">
                <Image
                    src="/home/card4.png" // Check this path
                    alt="Premium Gym Equipment"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-[10px]"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left font-akkurat">
                        Digital Marketing
                    </h2>
                    <p className="text-gray-600 text-left mb-4 font-akkurat">
                        The digital marketing course at CADD Manchester covers SEO, social media, email marketing, and analytics, equipping you to boost online presence and enhance career opportunities.
                    </p>
                    <button className="flex flex-start inline-block text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 py-2 px-4 rounded-[4px] shadow-md transition-all duration-300">
                        Learn More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Cards;
