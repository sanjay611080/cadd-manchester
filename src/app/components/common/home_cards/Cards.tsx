import React, { useState } from 'react';
import Image from 'next/image';
import cardsData from '../../../../../public/assets/cardsData.json';

const Cards: React.FC = () => {
  const [cards, setCards] = useState(cardsData.slice(0, 4));
  const [startIndex, setStartIndex] = useState(4);
  const [hasMoreCards, setHasMoreCards] = useState(cardsData.length > 4);

  const loadMoreCards = () => {
    const newCards = cardsData.slice(startIndex, startIndex + 4);
    if (newCards.length > 0) {
      setCards((prevCards) => [...prevCards, ...newCards]);
      setStartIndex((prevIndex) => prevIndex + 4);
    }
    if (startIndex + 4 >= cardsData.length) {
      setHasMoreCards(false);
    }
  };

  return (
    <>
      <div className="cards-container flex flex-col items-center w-full max-w-[1241px] bg-gray-100 mx-auto">
        <div className="cards-grid flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-[15px] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card w-full bg-white shadow-lg rounded-[10px] flex flex-col opacity-100 transition-transform duration-500 hover:scale-105 p-[5px]"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="card-content flex flex-col justify-between p-4">
                {/* Title */}
                <h2 className="card-title text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 text-left font-akkurat">
                  {card.title}
                </h2>

                {/* Description */}
                <p
                  className="card-description text-gray-600 text-left mb-4 font-akkurat"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3, // Limit to 3 lines
                    overflow: 'hidden', // Hide extra lines
                    textOverflow: 'ellipsis', // Show ellipsis for truncated text
                    marginBottom: '10px', // Reduced margin for consistent spacing
                  }}
                >
                  {card.description}
                </p>

                {/* Learn More Button */}
                <div className="learn-more-button-container flex justify-start mt-auto">
                  <button className="learn-more-button text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 py-2 px-4 rounded-[4px] shadow-md transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="explore-more-button-container flex justify-center w-full p-8 mt-6">
        <button
          className="explore-more-button inline-block px-6 py-3 text-white bg-[rgba(0,15,102,1)] hover:bg-blue-600 hover:text-black rounded-[4px] transition duration-300"
          onClick={loadMoreCards}
          disabled={!hasMoreCards}
        >
          {hasMoreCards ? 'Explore more courses' : 'No more courses'}
        </button>
      </div>
    </>
  );
};

export default Cards;
