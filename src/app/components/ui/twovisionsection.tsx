"use client";

import React from "react";

const TwoVisionSection: React.FC = () => {
  return (
    <div className="twovisionsection flex flex-col md:flex-row items-center justify-between p-6 bg-[#A2E3F5]">
      {/* Mission Section */}
      <div className="p-4 m-2 flex-1 text-center md:text-left">
        {" "}
        {/* Center text on small screens */}
        <h2 className="text-xl text-black font-bold mb-2">Mission</h2>
        <p className="text-gray-700">
          Our mission is to empower individuals through education and
          technology. We strive to create innovative solutions that enhance
          learning experiences. Our mission is to empower individuals through
          education and technology. We strive to create innovative solutions
          that enhance learning experiences.
        </p>
      </div>

      {/* Vision Section */}
      <div className="p-4 m-2 flex-1 text-center md:text-left">
        {" "}
        {/* Center text on small screens */}
        <h2 className="text-xl text-black font-bold mb-2">Vision</h2>
        <p className="text-gray-700">
          Our vision is to be a leader in transformative education, shaping the
          future of learning and innovation for generations to come. Our vision
          is to be a leader in transformative education, shaping the future of
          learning and innovation for generations to come.
        </p>
      </div>
    </div>
  );
};

export default TwoVisionSection;
