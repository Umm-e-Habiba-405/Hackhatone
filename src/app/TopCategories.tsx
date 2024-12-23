// pages/index.tsx
import React from "react";

const TopCategories = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <h1 className="text-[32px] font-bold text-blue-950 text-center mt-10 sm:mt-20">
        Top Categories
      </h1>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <img
            src="/image 1168.png"
            alt="Mini LCW Chair"
            className="mt-5 h-[150px] w-[150px] bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <img
            src="/image 1169.png"
            alt="Mini LCW Chair"
            className="mt-5 h-[150px] w-[150px] bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <img
            src="/image 1171.png"
            alt="Mini LCW Chair"
            className="mt-5 h-[150px] w-[150px] bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>

        {/* Category Item */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-[250px] lg:w-[280px] transform transition hover:scale-110 cursor-pointer">
          <img
            src="/image 1166.png"
            alt="Mini LCW Chair"
            className="mt-5 h-[150px] w-[150px] bg-banner rounded-full mx-auto"
          />
          <p className="text-color font-bold mt-9">Mini LCW Chair</p>
          <p className="text-indigo-600 font-bold mt-2">$56.00</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
