import Image from "next/image";
import { assets } from "@/assets/assets";

const RecentClasses = () => {
  return (
    <div className="flex gap-4">
      {/* Recent Enrolled Classes */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent enrolled classes</h2>
          <button className="text-gray-500">All</button>
        </div>

        {/* Class Cards */}
        <div className="space-y-4">
          {/* UX Design Class */}
          <div className="p-4 border-2 border-[#FF4B00] rounded-lg">
            <div className="flex items-center mb-2">
              <Image
                src={assets.Figma}
                alt="Figma Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-[#FF4B00] font-semibold">
                User Experience (UX) Design
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              <p>5:30hrs • 05 Lessons • Assignments</p>
            </div>
          </div>

          {/* Visual Design Class */}
          <div className="p-4 border rounded-lg bg-gray-100">
            <div className="flex items-center mb-2">
              <Image
                src={assets.Design}
                alt="Design Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-semibold">Visual Design and Branding</span>
            </div>
            <div className="text-gray-500 text-sm">
              <p>4:00hrs • 03 Lessons • Assignments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Lessons */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Upcoming Lesson</h2>
        <div className="space-y-4">
          {/* UX Design Fundamentals */}
          <div className="p-4 border rounded-lg bg-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={assets.GraduationCap}
                alt="Graduation Cap Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <div>
                <p className="font-semibold">UX Design Fundamentals</p>
                <p className="text-gray-500 text-sm">5:30pm</p>
              </div>
            </div>
            <button className="bg-[#FF4B00] text-white px-4 py-1 rounded-lg">
              Join
            </button>
          </div>

          {/* Interaction Design */}
          <div className="p-4 border rounded-lg bg-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={assets.Interaction}
                alt="Interaction Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <div>
                <p className="font-semibold">Interaction Design</p>
                <p className="text-gray-500 text-sm">9:00pm</p>
              </div>
            </div>
            <button className="bg-[#FF4B00] bg-opacity-20 text-[#FF4B00] px-4 py-1 rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentClasses;
