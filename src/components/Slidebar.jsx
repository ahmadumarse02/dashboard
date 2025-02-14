"use client";
import React from "react";
import Image from "next/image";
import { assets, sliderManu } from "@/assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Slidebar() {
  const pathname = usePathname(); // Get the current route

  return (
    <aside className="w-[14rem] h-screen bg-[#F2F2F2] border-r border-[#E4E4E4]">
      <Link href="/" className="no-underline">
        <h1 className="text-[22px] font-bold flex text-[#060606] gap-2 items-center h-[65px] px-[42px] py-[17px]">
          <Image src={assets.logo} alt="Logo" width={30} height={30} />
          DESIGNO
        </h1>
      </Link>

      <div className="border-b border-[#E4E4E4] mx-4 mb-4"></div>

      <nav>
        <ul className="list-none py-1">
          {sliderManu.map((item) => (
            <li key={item.name} className="w-[198px] mx-[15px]">
              <Link
                href={item.path}
                className={`flex items-center h-8 px-4 py-3 my-1 mx-auto rounded-lg transition-all no-underline ${
                  pathname === item.path
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="mr-3"
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Slidebar;
