import React, { useState, useEffect } from 'react';
import studentsData from '../../../../../public/assets/students_review.json'; // Import the JSON file

const StudentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 card for smaller screens
  const [isClient, setIsClient] = useState(false); // State to check if the component is rendered on the client side
  const totalCards = studentsData.length;

  // Function to automatically move the carousel to the left
  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component mounts on the client side
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards); // Loop to the first card
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [totalCards]);

  // Function to determine the number of cards visible based on screen width
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5;  // 5 cards for large screens (desktops)
      if (window.innerWidth >= 768) return 3;   // 3 cards for medium screens (tablets, laptops)
      return 3;  // 3 cards for smaller screens (phones)
    }
    return 3; // Default to 3 if window is not available (for SSR)
  };

  useEffect(() => {
    if (isClient) { // Only run this on the client side
      // Update visible cards when window is resized
      const handleResize = () => {
        setVisibleCards(getVisibleCards());
      };

      // Run once on mount to get initial visible cards
      setVisibleCards(getVisibleCards());

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient]);

  const customBoxShadow = "-2px 2px 26px 4px rgba(0, 140, 255, 0.1)"; // Custom shadow style
  const backgroundImagePath = "/home/Testimonial_card.png"; // Relative path to the background image

  if (!isClient) {
    return null; // Prevent rendering before the component is mounted
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden pt-10 pb-28">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move carousel horizontally based on the number of visible cards
        }}
      >
        {/* Loop through studentsData and display cards */}
        {studentsData.concat(studentsData).map((student, index) => {
          // Determine if the card is in the center
          const isCenter =
            index === currentIndex + Math.floor(visibleCards / 2) ||
            index === currentIndex + Math.floor(visibleCards / 2) + totalCards;

          // Use a unique key combining the student id and index
          const uniqueKey = `${student.id}-${index}`;

          return (
            <div
              key={uniqueKey}
              className={`relative flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                isCenter ? 'scale-110 shadow-2xl mx-4' : 'scale-90 opacity-80'
              }`}
              style={{
                boxShadow: customBoxShadow,
                width: `${100 / visibleCards}%`, // Dynamically adjust the width based on visible cards
                transform: isCenter ? 'scale(1.02)' : 'scale(0.9)', // Apply zoom effect only on center card
                transition: 'transform 0.3s ease-in-out',
                overflow: 'hidden', // Prevent overflow
                marginLeft: isCenter ? '0px' : '', // Apply margin only to the zoomed-in card
                marginRight: isCenter ? '0px' : '', // Apply margin only to the zoomed-in card
                transformOrigin: 'center center', // Ensure zoom happens from the center
                maxWidth: window.innerWidth < 768 ? '50%' : '', // Limit the width of cards on mobile
              }}
            >
              <div
                className="flex flex-col items-center p-4"
                style={{
                  width: '100%',
                  height: '100%', // Ensure the card takes up full height within the parent container
                  transition: 'transform 0.3s ease-in-out',
                  position: 'relative',
                  backgroundImage: `url(${backgroundImagePath})`, // Add relative background image path
                  backgroundSize: 'cover', // Ensure the image covers the card area
                  backgroundPosition: 'center', // Keep the image centered
                  borderRadius: '8px', // Optional, add some border radius for rounded corners
                }}
              >
                {/* Profile Image */}
                <img
                  src={student.avatar} // Local image path
                  alt={student.name}
                  className={`rounded-full mb-4 ${window.innerWidth < 768 ? 'w-12 h-12' : window.innerWidth < 1024 ? 'w-16 h-16' : 'w-20 h-20'}`} // Adjust image size based on screen width
                  style={{ zIndex: 2 }} // Ensure the profile image is above the background
                />
                
                {/* Student Name */}
                <h3
                  className={`font-semibold text-center ${window.innerWidth < 768 ? 'text-xs' : window.innerWidth < 1024 ? 'text-sm' : 'text-lg'}`}
                  style={{
                    marginBottom: '8px',
                    zIndex: 2, // Ensure the name is above the background
                    color: 'black', // Text color set to black for contrast on light or dark backgrounds
                  }}
                >
                  {student.name}
                </h3>

                {/* Student Review */}
                <p
                  className={`md:ml-8 text-left ${window.innerWidth < 768 ? 'text-[8px] ml-2' : window.innerWidth < 1024 ? 'text-sm' : 'text-base'}`}
                  style={{
                    marginBottom: '20px',
                    zIndex: 2, // Ensure the review text is above the background
                    color: 'black', // Text color set to black for contrast on light or dark backgrounds
                  }}
                >
                  {student.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsCarousel;
