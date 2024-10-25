"use client";
import { useState } from "react";

type ColorSet = {
  base: string;
  shades: string[];
};

const Colorselect = () => {
  // List of favorite colors (base color for buttons)
  const favoriteColors: ColorSet[] = [
    { base: "Tomato", shades: ["#FF7F50", "#FF4500", "#FF6347"] }, // Tomato
    { base: "Steel Blue", shades: ["#5F9EA0", "#6495ED", "#4682B4"] }, // Steel Blue
    { base: "Lime Green", shades: ["#66CDAA", "#3CB371", "#32CD32"] }, // Lime Green
    { base: "Gold", shades: ["#FFEC8B", "#FFD700", "#FFA500"] }, // Gold
  ];

  // State to track the selected shades for the three boxes
  const [selectedColors, setSelectedColors] = useState<string[]>(favoriteColors[0].shades);

  // Function to update the boxes with different shades of the selected color
  const handleColorClick = (shades: string[]) => {
    setSelectedColors(shades); // Set the boxes to different shades of the selected color
  };

  return (
    <main className="mt-[-5rem] bg-[#A2E3F5] w-full">
      <div className="flex flex-col items-center justify-center w-full"> {/* Ensure this div also takes full width */}
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-black">
          Checkout Trending Colors:
        </h2>

        {/* Buttons for each favorite color */}
        <div className="flex flex-wrap justify-center mb-6">
          {favoriteColors.map((colorSet, index) => (
            <button
              key={index}
              className="px-3 py-2 text-xs sm:text-base rounded-md shadow-lg"
              style={{ backgroundColor: colorSet.shades[1] }} // Using the second shade for button background
              onClick={() => handleColorClick(colorSet.shades)}
            >
              {colorSet.base} {/* Displaying the color name */}
            </button>
          ))}
        </div>

        {/* Display the three boxes with different shades */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6 mb-6">
          {selectedColors.map((color, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-md"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* See More Button */}
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          See More
        </button>
      </div>
    </main>
  );
};

export default Colorselect;
