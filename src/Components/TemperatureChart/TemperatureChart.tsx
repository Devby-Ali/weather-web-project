import React, { useContext, useEffect, useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

// const monthlyTemperatureData = [
//   { month: "فروردین", temp: 15 },
//   { month: "اردیبهشت", temp: 18 },
//   { month: "خرداد", temp: 25 },
//   { month: "تیر", temp: 30 },
//   { month: "مرداد", temp: 32 },
//   { month: "شهریور", temp: 28 },
//   { month: "مهر", temp: 22 },
//   { month: "آبان", temp: 16 },
//   { month: "آذر", temp: 10 },
//   { month: "دی", temp: 5 },
//   { month: "بهمن", temp: 3 },
//   { month: "اسفند", temp: 8 },
// ];

const monthlyTemperatureData = [
  { month: "Jan", temp: 15 },
  { month: "Feb", temp: 10 },
  { month: "Mar", temp: 25 },
  { month: "Apr", temp: 31 },
  { month: "May", temp: 11 },
  { month: "Jun", temp: 28 },
  { month: "Jul", temp: 22 },
  { month: "Aug", temp: 16 },
  { month: "Sep", temp: 40 },
  { month: "Oct", temp: 10 },
  { month: "Nov", temp: 11 },
  { month: "Dec", temp: 16 },
];

const TemperatureChart = (): React.JSX.Element => {
  
  return (
    <section className="h-[237px] lg:w-1/2 xl:w-4/7 flex flex-col justify-between px-6 sm:px-4 pt-4 pb-5.5 font-Roboto-light sm:font-Inter-regular">
      <h3 className="text-sm sm:text-lg/tight text-darkText dark:text-lightText">
        Average Monthly Temperature
      </h3>

      <ResponsiveContainer
        className={"font-medium text-[10px] -mx-2"}
        height="68%"
      >
        <ComposedChart data={monthlyTemperatureData}>
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="-0.58%" stopColor="#4CDFE81D" />
              <stop offset="101.51%" stopColor="#7947F71D" />
            </linearGradient>
          </defs>

          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="-0.58%" stopColor="#4CDFE8" />
              <stop offset="101.51%" stopColor="#7947F7" />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="4 3"
            strokeWidth={0.7}
            stroke="#AFBCC1"
            vertical={false}
          />
          <XAxis
            className="text-white"
            tickLine={false}
            axisLine={false}
            dataKey="month"
            tick={{ fill: "#000", dy: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[10, 40]}
            ticks={[10, 20, 30, 40]}
            tick={{ fill: "#000", dx: -16 }}
            tickFormatter={(value) => `${value}°c`}
          />
          <Tooltip />

          {/* Area for gradient background */}
          <Area
            type="linear" // خطوط صاف بین نقاط
            dataKey="temp"
            fill="url(#tempGradient)"
            stroke="transparent"
            connectNulls={true}
          />

          {/* Main line */}
          <Line
            type="linear" // خطوط صاف بین نقاط
            dataKey="temp"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TemperatureChart;