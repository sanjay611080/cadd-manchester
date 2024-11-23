import React from "react";
import Cards from "../common/cards/Cards";
import CourseCards from "../common/course_cards/CourseCards";

const HomePage = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative mt-[70px] lg:mt-[135px]"
        style={{
          backgroundImage: "url('/home/background.svg')", // Ensure the path is correct
          backgroundSize: "cover", // Ensure the image covers the section area
          backgroundPosition: "center", // Center the image
          width: "100%", // Full width of the section
          height: "calc(100vh - 80px)", // Full height minus the navbar height (80px)
          // marginTop: "70px lg:50px", // Offset the background to start below the navbar
        }}
      >
        {/* Text Overlay */}
        <div className="absolute top-1/2 md:top-1.8/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 md:px-8  w-full max-w-5xl">
          <h1 className="text-white font-inter font-bold text-3xl md:text-5xl lg:text-6xl">
            Turn Your Dreams Into <br /> Reality With Quality Education.
          </h1>
        </div>

      </section>
      <div
        className={`transition-transform transition-opacity duration-1000 ease-in-out 
        }`}

      >
        <div
          className="py-16 text-center px-4 p"
          style={{
            background: 'linear-gradient(109.7deg, rgba(121, 176, 223, 0.18) -0.75%, rgba(91, 18, 133, 0.08) 123.88%)',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elevate your journey with our expertly designed courses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Bridge the gap between where you are and where you want to be with our expert guidance
          </p>
          <Cards />
        </div>
      </div>
      <div className="py-16 text-center px-4 bg-[rgba(246,246,246,0.8)]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Prepare for exams with guidance from expert instructors
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Get expert coaching, valuable exam tips, and personalized strategies to boost your confidence and
          ensure you’re fully prepared for the exam.
        </p>
        <CourseCards />
      </div>
    </>
  );
};

export default HomePage;
