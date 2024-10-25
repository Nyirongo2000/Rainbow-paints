"use client";

import React from "react";

const ContactUs: React.FC = () => {
  return (
    <main className="bg-[#A2E3F5]  p-6">
      <div className="max-w-5xl mx-auto bg-[#409D76] rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-black font-bold mb-6">
          Book a Free Site Visit
        </h1>
        <div className="flex flex-col md:flex-row items-start justify-between bg-[#409D76] text-white">
          {/* Left Side - Title */}
          <div className="flex-1 md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600 mt-2">
              Fill out the form to schedule a free site visit. We look forward
              to assisting you!
            </p>
          </div>

          {/* Right Side - Input Forms */}
          <div className="flex-1 md:w-1/2">
            <form className="space-y-4">
              {/* Name and Email on the Same Line */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;