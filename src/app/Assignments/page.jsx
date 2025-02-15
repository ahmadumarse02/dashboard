"use client";
import { useState } from "react";
import { assignments, assets } from "@/assets/assets";
import Image from "next/image";

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="px-[34px] min-w-[1070px] mx-auto bg-white text-black">
      <header className="flex justify-between items-center pt-[21px] mb-[34px]">
        <div>
          <h1 className="text-[32px] text-[#211C37] font-bold">Assignments</h1>
          <p className="text-xl text-[#85878D]">
            View and manage your course assignments
          </p>
        </div>
        <div className="flex items-center text-lg space-x-2">
          <div className="w-8 h-8 border border-[#E4E4E4] flex items-center justify-center rounded-md">
            <Image src={assets.searchIcon} alt="" className="" />
          </div>
          <p>
            Filter by{" "}
            <span className="text-orange-500 cursor-pointer">dates</span> |{" "}
            <span className="text-orange-500 cursor-pointer">Status</span>
          </p>
        </div>
      </header>

      <main className="mt-4 bg-white p-4 rounded-md shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3 font-semibold">Assignment Title</th>
              <th className="text-left p-3 font-semibold">Course/lessons</th>
              <th className="text-left p-3 font-semibold">Due Date</th>
              <th className="text-left p-3 font-semibold">Status</th>
              <th className="text-left p-3 font-semibold">Submit</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3">{assignment.title}</td>
                <td className="py-3">{assignment.course}</td>
                <td className="py-3 w-[204px]">{assignment.dueDate}</td>
                <td
                  className={`py-3 w-[170px] font-semibold flex justify-center space-x-1 `}
                >
                  <div className="bg-[#EDF5FE] px-2 py-1 rounded-xl flex items-center gap-1">
                    <span
                      className={`w-2 h-2 rounded-full inline-block ${
                        assignment.status === "Done"
                          ? "bg-green-500"
                          : assignment.status === "Progress"
                          ? "bg-blue-500"
                          : "bg-red-500"
                      }`}
                    ></span>

                    <span
                      className={
                        assignment.status === "Done"
                          ? "text-green-500"
                          : assignment.status === "Progress"
                          ? "text-blue-500"
                          : "text-red-500"
                      }
                    >
                      {assignment.status}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-[#727272] cursor-pointer font-semibold">
                  {assignment.submit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="flex items-center mt-4">
        <div className="flex items-center pr-[156px] space-x-2">
          <span>Show</span>
          <select className="border p-1 rounded-md border-gray-300">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <span>Row</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className=""
          >
            &lt;
          </button>
          {[1, 2, 3, 4, 5, "..."].map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                currentPage === page ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded-md border border-gray-300"
          >
            &gt;
          </button>
        </div>
      </footer>
    </div>
  );
}

export default page;
