"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import image from "@/assets/image.png";

export default function PerformanceCard() {
  const [grade] = useState(8.966);
  const percentage = (grade / 10) * 180;

  return (
    <div className="bg-white border border-[#E4E4E4] px-3 py-4 rounded-2xl w-[240px]">
      {/* Title */}
      <h2 className="text-gray-900 text-sm font-semibold mb-3">Performance</h2>

      {/* Card Body */}
      <div className="border border-[#E4E4E4] rounded-lg p-4">
        {/* Header (Legend + Dropdown) */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] bg-orange-500 inline-block mr-1"></span>
            <p className="text-gray-700 text-[8px] font-medium">
              Assignment Submission Performance
            </p>
          </div>
          {/* Dropdown */}
          <select className="bg-gray-100 px-1 py-1 w-[65px] rounded text-[8px] text-gray-700 font-medium">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>

        <Image src={image} alt="" className="h-[109px] w-[150px] mx-auto" />

        <p className="text-gray-500 text-sm text-center">
          Your Grade:{" "}
          <span className="text-black font-bold text-lg">{grade}</span>
        </p>
      </div>
    </div>
  );
}
