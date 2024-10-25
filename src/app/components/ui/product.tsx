"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

// Define the type for card information
type Card = {
  image: string;
  description: string;
};

const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active card
  const containerRef = useRef<HTMLDivElement>(null);

  // An array of card data with image URLs and descriptions
  const cards: Card[] = [
    {
      image: "/product/product1 (2.webp",
      description: "This is the description for Card 1",
    },
    {
      image: "/product/product1.webp",
      description: "This is the description for Card 2",
    },
    {
      image: "/product/product1 (2.webp",
      description: "This is the description for Card 1",
    },
    {
      image: "/product/product1 (4).webp",
      description: "This is the description for Card 3",
    },
    {
      image: "/product/product1 (4).webp",
      description: "This is the description for Card 4",
    },
  ];

  // Scroll to the card based on active index
  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index); // Update active card on dot click
    }
  };

  // Handle scroll to adjust the active card index
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <main className="bg-[#f1b724] min-h-full  py-10 px-2 ">
      <h1 className="text-center text-2xl font-bold mb-5">Trending Products</h1>

      {/* Horizontal scrolling container with snap behavior */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 scrollbar-hide scroll-smooth justify-center"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`min-w-[250px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4 snap-start transition-transform duration-300 ${
                index === activeIndex ? "scale-110" : "scale-90"
              }`}
            >
              {/* Image container with white space */}
              <div className="w-full h-40 bg-white flex items-center justify-center rounded-md mb-3">
                <Image
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="object-contain w-full h-full"
                  width={800} // Set width for optimization
                  height={400} // Add height to avoid the error
                />
              </div>
              <p className="text-sm text-gray-700 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-4 p-10">
          {cards.map((_, index) => (
            <button
              aria-label="."
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 focus:outline-none ${
                index === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Optional: Left and Right Scroll buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
          onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
          onClick={() =>
            scrollToCard(Math.min(activeIndex + 1, cards.length - 1))
          }
        >
          ▶
        </button>
      </div>
    </main>
  );
};

export default Product;
