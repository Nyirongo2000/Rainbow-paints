"use client";

import React from "react";
import Image from "next/image";

const AlternatingSections: React.FC = () => {
  return (
    <div className="twovisionsection flex flex-col md:flex-row items-center justify-between p-6 bg-[#ffffff]">
      {/* Section 1: Mission */}
      <div className="flex flex-col md:flex-row items-center m-2">
        <div className="flex-1 p-4">
          <Image
            src="/tech/social-media-marketing-concept-marketing-with-applications_23-2150063136.webp" // Add your image path
            alt="Mission Image"
            className="object-contain w-full h-48 rounded-lg shadow-md"
            width={800} // Set width for optimization
            height={400} // Set height to avoid errors
          />
        </div>
        <p className="flex-1 text-gray-700 p-4">
          Our mission is to empower individuals through education and
          technology. We strive to create innovative solutions that enhance
          learning experiences.
        </p>
      </div>

      {/* Section 2: Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center m-2">
        <div className="flex-1 p-4">
          <Image
            src="/tech/social-media-marketing-concept-marketing-with-applications_23-2150063136.webp" // Add your image path
            alt="Vision Image"
            className="object-contain w-full h-48 rounded-lg shadow-md"
            width={800} // Set width for optimization
            height={400} // Set height to avoid errors
          />
        </div>
        <p className="flex-1 text-gray-700 p-4">
          Our vision is to be a leader in transformative education, shaping the
          future of learning and innovation for generations to come.
        </p>
      </div>
    </div>
  );
};

export default AlternatingSections;
