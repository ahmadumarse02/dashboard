import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CalendarHeader({
  onViewChange,
  currentMonth,
  onPrev,
  onNext,
  onToday,
}) {
  const [activeView, setActiveView] = useState("dayGridMonth");

  const handleViewChange = (view) => {
    setActiveView(view);
    onViewChange(view);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b px-4 py-2 bg-white">
        <div className="flex items-center gap-5 text-orange-600 cursor-pointer">
          <h2 className="text-lg font-semibold text-orange-600 mr-7">
            Calendar
          </h2>
          <div className="tab flex text-[#727272] gap-4">
            <button
              className={`pb-1 ${
                activeView === "dayGridMonth"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : ""
              }`}
              onClick={() => handleViewChange("dayGridMonth")}
            >
              Monthly
            </button>
            <button
              className={`pb-1 ${
                activeView === "timeGridWeek"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : ""
              }`}
              onClick={() => handleViewChange("timeGridWeek")}
            >
              Weekly
            </button>
            <button
              className={`pb-1 ${
                activeView === "timeGridDay"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : ""
              }`}
              onClick={() => handleViewChange("timeGridDay")}
            >
              Daily
            </button>
            <button
              className={`pb-1 ${
                activeView === "listWeek"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : ""
              }`}
              onClick={() => handleViewChange("listWeek")}
            >
              List
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Filter
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={() => onViewChange("addTask")}
          >
            + Add Tasks
          </button>
        </div>
      </div>
      <div className="flex my-6 mx-4 text-lg font-medium text-orange-500">
        <h1 className="flex items-center gap-2">{currentMonth}</h1>
        <div className="flex gap-3 ml-9 text-orange-500 items-center">
          <div
            onClick={onPrev}
            className="bg-[#FF4B00] bg-opacity-10 p-2 rounded-md cursor-pointer"
          >
            <FaAngleLeft className="text-sm" />
          </div>
          <button
            onClick={onToday}
            className="bg-[#FF4B00] text-white px-4 py-1 rounded-md text-[10px]"
          >
            Today
          </button>
          <div
            onClick={onNext}
            className="bg-[#FF4B00] bg-opacity-10 p-2 rounded-md cursor-pointer"
          >
            <FaAngleRight className="text-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
