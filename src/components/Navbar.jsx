"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation"; // Ensure to import router

function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-between h-[65px] bg-white py-[13px] px-[34px]">
        <div className="flex justify-between items-center h-[39px] w-[334px] border rounded-lg px-3 text-gray-600 border-orange-500">
          <div className="left-side flex gap-2">
            <Image src={assets.searchIcon} alt="Search" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent"
            />
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
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span>{user.name}</span>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button onClick={() => router.push("/SignIn")} className="mr-4">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="border border-[#E4E4E4] w-full"></div>
    </>
  );
}

export default Navbar;
