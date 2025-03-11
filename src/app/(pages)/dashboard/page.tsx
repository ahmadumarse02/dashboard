"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Resources from "@/components/Resources";
import HoursSpent from "@/components/dashboard/HourSpent";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import ToDoCard from "@/components/dashboard/ToDoCard";
import RecentClasses from "@/components/dashboard/RecentClasses";
import Calendar from "@/components/dashboard/Calendar";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-8 lg:px-[50px] py-[21px]">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1C1D1D]">Hello Harsh 👋🏻</h1>
        <p className="text-base md:text-lg text-[#85878D] mb-5">Let’s learn something new today!</p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
        {/* Card 1 */}
        <div className="border border-[#E4E4E4] rounded-lg p-5">
          <h1 className="text-lg font-medium text-[#1C1D1D] mb-3">Recent Enrolled Course</h1>
          <div className="border border-[#E4E4E4] py-4 px-3 rounded-md">
            <Image src={assets.pen} alt="Course Icon" className="mb-3" />
            <h1 className="text-base font-medium text-[#1C1D1D] mb-3">Product Design Course</h1>
            <div className="flex items-center gap-2">
              <div className="w-full bg-red-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-xs">
                <span className="text-[#FF4B00]">14/30</span> classes
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <Resources />

        {/* Calendar */}
        {/* <div className="bg-white rounded-lg"> */}
        <Calendar />
        {/* </div> */}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
        <HoursSpent />
        <PerformanceCard />
        <ToDoCard />
      </div>

      {/* Recent Classes Section */}
      <RecentClasses />
    </div>
  );
}
