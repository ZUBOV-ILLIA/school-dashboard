"use client";

import Image from "next/image";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import MoreDots from "./MoreDots";

const data = [
  { name: "Boys", value: 144, color: "#C3EBFA", percent: 48 },
  { name: "Girls", value: 112, color: "#FAE27C", percent: 37.3 },
  { name: "Free", value: 44, color: "#e3e7ec", percent: 14.7 },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <MoreDots />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 aspect-square bg-white rounded-full" />
        <Image
          src="/images/maleFemale.png"
          alt=""
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-between">
        {data.map((el) => (
          <div key={el.name} className="flex flex-col items-center gap-1">
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: el.color }}
            />
            <h1 className="font-bold">{el.value}</h1>
            <h2 className="text-xs text-gray-300 text-center">
              {el.name}
              <br />({el.percent}%)
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
