"use client";

import React from "react";

// Sample data for customer reviews
const reviews = [
  {
    name: "Alice Johnson",
    comment:
      "The service was outstanding! I couldn't be happier with the experience.",
  },
  {
    name: "John Smith",
    comment: "A fantastic experience from start to finish. Highly recommend!",
  },
  {
    name: "Emily Davis",
    comment:
      "Great quality and exceptional customer support. Will definitely come back!",
  },
  {
    name: "Michael Brown",
    comment:
      "Professional and efficient. I'm very satisfied with the service provided.",
  },
];

const CustomerShowcase: React.FC = () => {
  return (
    <div className="bg-[#A2E3F5] p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerShowcase;