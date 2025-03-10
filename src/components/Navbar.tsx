"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between h-[65px] bg-white py-[13px] px-[34px]">
        <div className="flex justify-between items-center h-[39px] w-[334px] border rounded-lg px-3 text-gray-600 border-orange-500">
          <div className="left-side flex gap-2">
            <Image src={assets.searchIcon} alt="Search" />
            <input type="text" placeholder="Search" className="outline-none bg-transparent" />
          </div>
          <div className="flex gap-2">
            <Image src={assets.frame1} alt="Frame1" />
            <Image src={assets.frame2} alt="Frame2" />
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <div className="w-8 h-8 border border-[#E4E4E4] flex items-center justify-center rounded-md">
            <Image src={assets.frame3} alt="Frame3" />
          </div>

          <button className="bg-orange-500 px-3 py-1 rounded">Sign Out</button>
        </div>
      </div>
      <div className="border border-[#E4E4E4] w-full"></div>
    </>
  );
}

export default Navbar;
