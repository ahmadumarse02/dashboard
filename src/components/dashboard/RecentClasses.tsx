import Image from "next/image";
import { assets } from "@/assets/assets";

const RecentClasses = () => {
  return (
    <div className="flex gap-4">
      {/* left */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent enrolled classes</h2>
          <button className="text-gray-500 flex gap-1">
            All
            <Image src={assets.searchIcon} alt="" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 border-2 border-[#FF4B00] rounded-lg flex items-center mb-2">
            <Image
              src={assets.Figma}
              alt="Figma Icon"
              width={55}
              height={55}
              className="mr-2"
            />
            <div className="">
              <span className="text-[#FF4B00] font-semibold">
                User Experience (UX) Design
              </span>
              <div className="text-gray-500 text-sm">
                <p className="flex items-center text-sm">
                  <Image src={assets.Clock} alt="" className="h-4 w-4" />
                  5:30hrs{" "}
                  <Image src={assets.note} alt="" className="ml-7 h-4 w-4" /> 05
                  Lessons{" "}
                  <Image src={assets.Clock} alt="" className="ml-7 h-4 w-4" />{" "}
                  Assignments
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border flex items-center mb-2 rounded-lg bg-gray-100">
            <Image
              src={assets.Design}
              alt="Design Icon"
              width={55}
              height={55}
              className="mr-2"
            />
            <div className="">
              <span className="font-semibold">Visual Design and Branding</span>
              <div className="text-gray-500 text-sm">
                <p className="flex items-center text-sm">
                  <Image src={assets.Clock} alt="" className="h-4 w-4" />
                  4:00hrs{" "}
                  <Image src={assets.note} alt="" className="ml-7 h-4 w-4" /> 03
                  Lessons{" "}
                  <Image src={assets.Clock} alt="" className="ml-7 h-4 w-4" />{" "}
                  Assignments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Upcoming Lesson</h2>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={assets.GraduationCap}
                alt="Graduation Cap Icon"
                width={35}
                height={35}
                className="mr-4"
              />
              <div>
                <p className="font-semibold text-[16px]">
                  UX Design Fundamentals
                </p>
                <p className="text-gray-500 text-[16px]">5:30pm</p>
              </div>
            </div>
            <button className="bg-[#FF4B00] text-white text-[15px] px-4 py-1 rounded-lg">
              Join
            </button>
          </div>

          {/* Interaction Design */}
          <div className="p-4 border rounded-lg bg-gray-100 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={assets.Interaction}
                alt="Interaction Icon"
                width={35}
                height={35}
                className="mr-4"
              />
              <div>
                <p className="font-semibold text-[16px]">Interaction Design</p>
                <p className="text-gray-500 text-[16px]">9:00pm</p>
              </div>
            </div>
            <button className="bg-[#FF4B00] bg-opacity-5 text-white px-4 py-1 rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentClasses;
