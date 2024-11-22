import React from "react";
import Image from "next/image";

const HomePage = () => {
    return (
        <>
            {/* Background Image Section */}
            <section
                className="relative text-white"
                style={{
                    backgroundImage: "url('/homepage/nav-background.png')", // Add your background image path
                    backgroundSize: "cover", // Ensure the image covers the section area
                    backgroundPosition: "center", // Center the image
                    width: "1440px", // Set the width to 1440px
                    height: "711.09px", // Set the height to 711.09px
                    top: "157px", // Position the section 157px from the top
                    opacity: "1", // Make sure the opacity is 1 (fully visible)
                    margin: "0 auto", // Centers the section horizontally
                }}
            >
                {/* Optional: Add overlay or content */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                {/* Content Section */}
                <div
                    className="absolute top-1/2 left-16 transform -translate-y-1/2 px-4 py-2 rounded-lg max-w-full z-10"
                >
                    {/* You can add your content here */}
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
                    <p className="text-lg">Your gateway to the best courses and exams</p>
                </div>
            </section>
        </>
    );
};

export default HomePage;
