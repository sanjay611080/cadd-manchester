import React from "react";

const HomePage = () => {
    return (
        <>
            {/* Background Image Section */}
            <section
                className="relative"
                style={{
                    backgroundImage: "url('/home/background.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "calc(100vh - 80px)", // Full height minus navbar height
                    marginTop: "80px", // Offset to start below navbar
                }}
            >
                <div className="absolute top-1/2 md:top-1.8/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 md:px-8 w-full max-w-5xl">
                    <h1 className="text-white font-inter font-bold text-3xl md:text-5xl lg:text-6xl">
                        Turn Your Dreams Into <br /> Reality With Quality Education.
                    </h1>
                </div>
            </section>
            <div className="py-16 bg-gray-50">
                <div className="text-center px-4 mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Your All-in-One Fitness Solution
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Discover flexible gym memberships, find gyms near you, and book and pay online. Transform your fitness journey with ease.
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomePage;
