import React from "react";
import Cards from "../common/home_cards/Cards";
import CourseCards from "../common/course_cards/CourseCards";
import Image from 'next/image';
import StudentsCarousel from "../common/students_carousel/StudentsCarousel";

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
        className={`transition-transform transition-opacity duration-1000 ease-in-out`}
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

      <div className="bg-[radial-gradient(73.44%_47%_at_50%_47.99%,_rgba(0,_140,_255,_0.14)_0%,_rgba(0,_140,_255,_0)_100%)]">
        <div className="mt-20 flex justify-center items-center px-4">
          {/* Card with Content */}
          <div className="relative w-full max-w-6xl h-[350px] sm:h-[400px] md:h-[450px] bg-white shadow-[0px_0px_42px_1px_rgba(0,_140,_255,_0.12)] rounded-[20px] opacity-100">
            {/* Text on top and centered */}
            <div className="flex flex-col mt-8 h-full px-6 sm:px-10 py-6 relative z-20">
              <div className="text-center sm:z-20 mt-10">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  What are students saying!
                </h2>
                {/* Underline with space */}
                <span className="block mt-2 w-32 sm:w-52 md:w-64 mx-auto border-t-4 border-blue-500"></span>
              </div>
            </div>

            {/* Icon on the top-left */}
            <div className="absolute top-6 left-6 z-10">
              <Image
                src="/home/text-icon.svg" // Replace with your image path
                alt="Image description"
                width={80} // Image width
                height={80} // Image height
                className="mt-8 ml-8 w-16 h-16 sm:w-20 sm:h-10 md:w-24 md:h-24" // Icon size adjustments for responsiveness
              />
            </div>
          </div>
        </div>
      </div>

      {/* Students Carousel Section */}
      <div className="">
        <StudentsCarousel />
      </div>
    </>
  );
};

export default HomePage;
