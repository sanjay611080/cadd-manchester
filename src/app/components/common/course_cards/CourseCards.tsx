import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Course {
  logo: string;
  name: string;
}

const CourseCards: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Assuming the JSON data is already available
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/assets/coursesData.json'); // Correct path to your public assets
      const data: Course[] = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <div className="course-cards-container py-16 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="course-card w-full bg-white shadow-lg rounded-lg overflow-hidden text-center">
            {/* Course Logo */}
            <div className="course-logo-container relative w-full h-24 sm:h-32 md:h-40 lg:h-48">
              <Image
                src={course.logo}
                alt={course.name}
                width={50}  // Default logo width (for smaller devices)
                height={100} // Default logo height (for smaller devices)
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
              />
            </div>

            {/* Course Name */}
            <div className="course-name-container p-2 sm:p-3 md:p-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{course.name}</h3>
            </div>

            {/* Learn More Button */}
            <div className="learn-more-button-container p-2 sm:p-3 md:p-4">
              <button className="text-white bg-[rgba(0,15,102,1)] hover:bg-blue-700 py-1 sm:py-2 px-4 sm:px-6 rounded-md transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
