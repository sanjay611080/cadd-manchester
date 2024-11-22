import React from "react";

const HomePage = () => {
    return (
        <>
        <section
            className="relative"
            style={{
                backgroundImage: "url('/home/background.svg')", // Ensure the path is correct
                backgroundSize: "cover", // Ensure the image covers the section area
                backgroundPosition: "center", // Center the image
                width: "100%", // Full width of the section
                height: "100vh", // Full height of the viewport
                opacity: "1", // Make sure the opacity is 1 (fully visible)
                margin: "0 auto", // Centers the section horizontally
            }}
        >
            {/* Background image section only */}
        </section>
       
        </>
    );
};

export default HomePage;
