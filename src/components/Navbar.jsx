"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setIsLoggedIn(true);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between h-[65px] bg-white py-[13px] px-[34px]">
        <div className="flex justify-between items-center h-[39px] w-[334px] border rounded-lg px-3 text-gray-600 border-orange-500">
          <div className="left-side flex gap-2">
            <Image src={assets.searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search"
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
          <div className="flex gap-4">
            {isLoggedIn ? (
              <Link href="/profile">Profile</Link>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="border border-[#E4E4E4] w-full"></div>
    </>
  );
}

export default Navbar;
