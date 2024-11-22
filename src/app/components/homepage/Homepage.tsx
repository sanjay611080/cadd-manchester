import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative"
        style={{
          backgroundImage: "url('/home/background.svg')", // Ensure the path is correct
          backgroundSize: "cover", // Ensure the image covers the section area
          backgroundPosition: "center", // Center the image
          width: "100%", // Full width of the section
          height: "calc(100vh - 80px)", // Full height minus the navbar height (80px)
          marginTop: "80px", // Offset the background to start below the navbar
        }}
      >
        {/* Content can go here */}
      </section>
    </>
  );
};

export default HomePage;
