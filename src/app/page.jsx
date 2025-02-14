"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Resources from "@/components/Resources";
import HoursSpent from "@/components/HourSpent.jsx"
import PerformanceCard from "@/components/PerformanceCard.jsx"
import ToDoCard from "@/components/ToDoCard";
import RecentClasses from "@/components/RecentClasses";


export default function App() {
  return (
    <div className="w-full h-[955] bg-white">
      {/* Heading  */}
      <div className="px-[50px] py-[21px] w-[1057]">
        <div className="text-[33px] font-bold text-[#1C1D1D]">
          <h1>Hello Harsh 👋🏻</h1>
          <p className="text-[20px] font-normal text-[#85878D] mb-5">
            Let’s learn something new today!
          </p>
        </div>
        <div className="min-w-[955px]">
          <div className="flex gap-7 mb-7">
            {/* card1  */}
            <div className="card border border-[#E4E4E4] w-[257px] h-[188] rounded-lg">
              <div className="p-5">
                <h1 className="text-[15px] font-medium text-[#1C1D1D] mb-3">
                  Recent enrolled course
                </h1>
                <div className="border border-[#E4E4E4] py-[18px] px-[14px] rounded-md">
                  <Image src={assets.pen} alt="" className="mb-3" />
                  <h1 className="text-[15px] font-medium text-[#1C1D1D] mb-3">
                    Product Design Course
                  </h1>
                  <div className="flex gap-2 items-center">
                    <div className="w-[128px] bg-red-100 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <p className="text-[8px]">
                      <span className="text-[#FF4B00]">14/30 </span>class
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card2  */}

            <Resources />

            {/* card3  */}
            {/* <div className="custom-calendar max-w-full bg-white rounded-lg">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next",
                }}
                titleFormat={{ year: "numeric", month: "long" }}
                height="100%"
                contentHeight="auto"
                fixedWeekCount={false}
              />
            </div> */}
          </div>

          <div className="flex gap-7 mb-7 h-[272px]">
              <HoursSpent />
              <PerformanceCard />
              <ToDoCard />
            </div>
        </div>
        <RecentClasses />
      </div>
    </div>
  );
}
