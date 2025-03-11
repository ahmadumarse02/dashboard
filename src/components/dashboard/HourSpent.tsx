"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", study: 35, test: 52 },
  { month: "Feb", study: 20, test: 30 },
  { month: "Mar", study: 52, test: 35 },
  { month: "Apr", study: 35, test: 50 },
  { month: "May", study: 15, test: 20 },
];

export default function HoursSpent() {
  return (
    <div className="bg-white border border-[#E4E4E4] p-4 rounded-2xl min-w-[357px] h-[272px]">
      {/* Title */}
      <h2 className="text-gray-900 text-lg font-semibold mb-3">Hours Spent</h2>

      {/* Chart Container */}
      <div className="border border-[#E4E4E4] rounded-lg p-2">
        {/* Legend */}
        <div className="flex space-x-4 mb-2">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 inline-block mr-2 rounded"></span>
            <p className="text-gray-700 text-xs font-medium">Study</p>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#F8EFE2] inline-block mr-2 rounded"></span>
            <p className="text-gray-700 text-xs font-medium">Online Test</p>
          </div>
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data}>
            <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `${value} Hr`} tick={{ fill: "#888", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F1C3B",
                color: "white",
                borderRadius: "8px",
                border: "none",
                padding: "6px",
              }}
              labelStyle={{ fontWeight: "bold", fontSize: 12 }}
              formatter={(value) => `${value} Hr`}
            />
            {/* Stacked Bars */}
            <Bar dataKey="test" stackId="a" fill="#F8EFE2" barSize={30} />
            <Bar dataKey="study" stackId="a" fill="#FF4B00" radius={[5, 5, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
