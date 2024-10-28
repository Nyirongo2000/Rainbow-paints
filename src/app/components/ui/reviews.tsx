"use client";

import React from "react";
import Image from "next/image";

// Sample data for customer reviews with images
const reviews = [
  {
    name: "Oliver",
    comment:
      "The service was outstanding! I couldn't be happier with the experience.",
    imageUrl: "/review/p1 (1).webp", // Add your image path
  },
  {
    name: "Tiwonge",
    comment: "A fantastic experience from start to finish. Highly recommend!",
    imageUrl: "/review/p1 (2).webp", // Add your image path
  },
  {
    name: "Jemimah",
    comment:
      "Great quality and exceptional customer support. Will definitely come back!",
    imageUrl: "/review/p1 (3).webp", // Add your image path
  },
  {
    name: "Martin",
    comment:
      "Professional and efficient. I'm very satisfied with the service provided.",
    imageUrl: "/review/p1 (4).webp", // Add your image path
  },
];

const CustomerShowcase: React.FC = () => {
  return (
    <div className="bg-[#A2E3F5] text-black p-6">
      <h2 className="text-3xl font-bold text-black text-center mb-6">
        Customer Reviews
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
          >
            <Image
              src={review.imageUrl}
              alt={`${review.name}'s image`}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerShowcase;
