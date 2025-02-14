"use client";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex items-center justify-between h-[65px] bg-white py-[13px] px-[34px]">
        <div className="flex justify-between items-center h-[39px] w-[334px] border rounded-lg px-3 text-gray-600 border-orange-500">
          <div className="left-side flex gap-2">
            <Image src={assets.searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            <Image src={assets.frame1} alt="" />
            <Image src={assets.frame2} alt="" />
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <div className="w-8 h-8 border border-[#E4E4E4] flex items-center justify-center rounded-md">
            <Image src={assets.frame3} alt="" />
          </div>
          <Image
            src={assets.avatar}
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="font-medium text-[13px] text-[#000]">Harsh</span>
          <span className="text[#000]">▼</span>
        </div>
      </div>
      <div className="border border-[#E4E4E4] w-full"></div>
    </>
  );
}

export default Navbar;
