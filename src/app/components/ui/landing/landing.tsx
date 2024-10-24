"use client";
const Landing = () => {
  return (
    <main className="flex min-h-screen h-screen w-screen mx-4 sm:mx-6 md:mx-10 overflow-hidden">
      {/* Container div for the background image */}
      <div className="custom-bg w-full h-full flex items-center justify-center mx-5">
        {/* Responsive content */}
        <div className="flex flex-col items-start w-full sm:w-full md:w-1/2 bg-white bg-opacity-80 py-8 px-5 sm:px-6 md:px-12 rounded-md shadow-lg md:translate-x-1/3">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-700 leading-snug text-left ">
            Brighten your world with <br className="block sm:hidden" />
            Rainbow Paint
          </h1>
          <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
