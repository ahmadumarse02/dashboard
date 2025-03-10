import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Resources() {
  return (
    <div className="border border-[#E4E4E4] w-[449px] h-[188px] rounded-lg p-5">
      <h1 className="text-[15px] font-medium text-[#1C1D1D] mb-3">
        Your Resources
      </h1>

      {/* Resource 1 */}
      <div className="flex items-center mb-3">
        <Image src={assets.redFile} alt="Red file icon" />
        <div className="pl-[9px]">
          <div className="flex mb-[5px]">
            <p className="w-[183px] text-[7px] text-black">Auto-layout.pdf</p>
            <p className="text-[7px] w-[170px] text-black">8.5MB</p>
            <p className="text-[7px] text-[#85878D] cursor-pointer">Cancel</p>
          </div>
          {/* Fix className for progress bar */}
          <div className="w-[318px] bg-red-100 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full w-3/5"></div>
          </div>
        </div>
      </div>

      {/* Resource 2 */}
      <div className="flex items-center mb-3">
        <Image src={assets.greenFile} alt="Green file icon" />
        <div className="pl-[9px]">
          <div className="flex mb-[5px]">
            <p className="w-[183px] text-[7px] text-black">Auto-layout.pdf</p>
            <p className="text-[7px] w-[160px] text-black">8.5MB</p>
            <p className="text-[7px] text-orange-500 cursor-pointer">
              Download
            </p>
          </div>
          <p className="text-[7px] text-[#85878D]">
            Let's quickly create some realistic and shiny metal @figma✨
          </p>
        </div>
      </div>

      {/* Resource 3 */}
      <div className="flex items-center">
        <Image src={assets.blueFile} alt="Blue file icon" />
        <div className="pl-[9px]">
          <div className="flex mb-[5px]">
            <p className="w-[183px] text-[7px] text-black">Auto-layout.pdf</p>
            <p className="text-[7px] w-[153px] text-black">8.5MB</p>
            <p className="text-[7px] text-orange-500 cursor-pointer">
              Download
            </p>
          </div>
          <p className="text-[7px] text-[#85878D]">
            Let's quickly create some realistic and shiny metal @figma✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
