"use client";

import React from "react";
import Image from "next/image";

const AlternatingSections: React.FC = () => {
  return (
    <main className="bg-[#f1b724]">
      <h1 className="text-3xl text-black text-center mb-3">
        Checkout Our innovationns
      </h1>
      <div className="twovisionsection flex flex-col md:flex-row items-center justify-between p-6 ">
        {/* Section 1: Mission */}
        <div className="flex flex-col md:flex-row items-center m-2 bg-white  shadow-md overflow-hidden">
          <div className="flex-1 p-4">
            <Image
              src="/tech/social-media-marketing-concept-marketing-with-applications_23-2150063136.webp" // Add your image path
              alt="Mission Image"
              className="object-cover w-full h-48" // Use object-cover for better fill
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
        <div className="flex flex-col md:flex-row-reverse items-center m-2 bg-white  shadow-md overflow-hidden">
          <div className="flex-1 p-4">
            <Image
              src="/tech/social-media-marketing-concept-marketing-with-applications_23-2150063136.webp" // Add your image path
              alt="Vision Image"
              className="object-cover w-full h-48" // Use object-cover for better fill
              width={800} // Set width for optimization
              height={400} // Set height to avoid errors
            />
          </div>
          <p className="flex-1 text-gray-700 p-4">
            Our vision is to be a leader in transformative education, shaping
            the future of learning and innovation for generations to come.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AlternatingSections;
