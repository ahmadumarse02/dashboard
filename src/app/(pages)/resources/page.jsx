"use client";
import { assets, cardData } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="px-[34px] min-w-[1070px] mx-auto bg-white text-black">
        {/* Header */}
        <header className="flex justify-between items-center pt-[21px] mb-[34px]">
          <div>
            <h1 className="text-[32px] text-[#211C37] font-bold">Class Recordings</h1>
            <p className="text-xl text-[#85878D]">Access and review past class sessions</p>
          </div>
          <div className="flex items-center text-lg space-x-2">
            <div className="w-8 h-8 border border-[#E4E4E4] flex items-center justify-center rounded-md">
              <Image src={assets.searchIcon} alt="" className="" />
            </div>
            <p>
              Filter by <span className="text-orange-500 cursor-pointer">dates</span>
              <span className="text-orange-500 cursor-pointer">Course</span>
            </p>
          </div>
        </header>

        {/* cards */}
        <div className="p-4 grid grid-cols-3 gap-4">
          {cardData.map((data, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4 min-w-[302px] h-[180px]">
              <Image src={data.image} alt="" className="rounded-xl w-full h-[88px] object-center" />
              <h3 className="text-sm font-bold mt-1">{data.title}</h3>
              <div className="flex gap-5">
                <p className="text-[10px] items-center text-gray-600 flex">
                  <Image src={assets.Clock} alt="" className="h-2 w-2" />
                  {data.duration}
                </p>
                <p className="text-[10px] items-center text-gray-600 flex">
                  <Image src={assets.Form} alt="" className="h-2 w-2" />
                  {data.lessons}
                </p>
              </div>
              <div className="flex gap-5 mt-1">
                <button className="flex gap-1 text-white text-[10px] font-bold bg-[#FF4B00] p-1 rounded-sm">
                  <Image src={assets.watch} alt="" />
                  Watch Now
                </button>
                <button className="flex gap-1 text-white text-[10px] font-bold items-center bg-[#FF4B00] bg-opacity-5 p-1 rounded-sm">
                  <Image src={assets.downloads} className="text-white" alt="" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* footer */}
        <footer className="flex items-center mt-4">
          <div className="flex items-center pr-[156px] space-x-2">
            <span>Show</span>
            <select className="border p-1 rounded-md border-gray-300">
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
            <span>Row</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className=""
            >
              &lt;
            </button>
            {[1, 2, 3].map((page, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page ? "bg-[#FF4B00] text-white" : ""
                }`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded-md border border-gray-300"
            >
              &gt;
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default page;
