import React, { useState, useEffect } from 'react';
import studentsData from '../../../../../public/assets/students_review.json'; // Import the JSON file

const StudentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = studentsData.length;

  // Function to automatically move the carousel to the left
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards); // Loop to the first card
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [totalCards]);

  const customBoxShadow = "-2px 2px 26px 4px rgba(0, 140, 255, 0.1)"; // Custom shadow style

  return (
    <div className="relative w-full mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 6}%)`, // Move carousel horizontally
        }}
      >
        {/* Loop through studentsData and display cards */}
        {studentsData.concat(studentsData).map((student, index) => {
          // To create the infinite loop effect, we duplicate the array of cards using concat
          const isCenter = index === currentIndex;
          const isLeft = index === (currentIndex - 1 + totalCards) % totalCards;
          const isRight = index === (currentIndex + 1) % totalCards;

          // Use a unique key combining the student id and index
          const uniqueKey = `${student.id}-${index}`;

          return (
            <div
              key={uniqueKey} // Use unique key here
              className={`relative bottom-40 flex-shrink-0 w-2/4  md:w-1/4 lg:w-1/5 mx-3 bg-white rounded-lg transition-transform duration-500 ease-in-out transform ${
                isCenter ? 'scale-110 shadow-2xl' : 'shadow-lg'
              } ${isLeft || isRight ? 'scale-90 opacity-80' : ''} ${
                isCenter ? 'z-10' : ''
              }`} // Apply scaling and shadow for active and adjacent cards
              style={{ boxShadow: customBoxShadow }} // Apply custom shadow here
            >
              <div className="flex flex-col items-center p-5">
                <img
                  src={student.avatar} // Local image path
                  alt={student.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4"
                />
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">{student.name}</h3>
                <p className="text-left text-xs sm:text-sm md:text-base text-gray-600 mt-2">{student.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsCarousel;
