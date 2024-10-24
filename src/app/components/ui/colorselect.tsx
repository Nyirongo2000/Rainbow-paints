"use client";
import { useState } from "react";

type ColorSet = {
  base: string;
  shades: string[];
};

const Colorselect = () => {
  // List of favorite colors (base color for buttons)
  const favoriteColors: ColorSet[] = [
    { base: "#FF6347", shades: ["#FF7F50", "#FF4500", "#FF6347"] }, // Tomato
    { base: "#4682B4", shades: ["#5F9EA0", "#6495ED", "#4682B4"] }, // Steel Blue
    { base: "#32CD32", shades: ["#66CDAA", "#3CB371", "#32CD32"] }, // Lime Green
    { base: "#FFD700", shades: ["#FFEC8B", "#FFD700", "#FFA500"] }, // Gold
  ];

  // State to track the selected shades for the three boxes
  const [selectedColors, setSelectedColors] = useState<string[]>(
    favoriteColors[0].shades
  );

  // Function to update the boxes with different shades of the selected color
  const handleColorClick = (shades: string[]) => {
    setSelectedColors(shades); // Set the boxes to different shades of the selected color
  };

  return (
    <main className="mt-5">
      <div className="flex flex-col items-center justify-center ">
        {/* Buttons for each favorite color */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-6">
          {favoriteColors.map((colorSet, index) => (
            <button
              key={index}
              className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-base rounded-md shadow-lg"
              style={{ backgroundColor: colorSet.base }}
              onClick={() => handleColorClick(colorSet.shades)}
            >
              {colorSet.base}
            </button>
          ))}
        </div>

        {/* Display the three boxes with different shades */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
          {selectedColors.map((color, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-md"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Colorselect;
