import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
import { getLocalizedMonth } from "../../utils/dateService";

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
  const { t, i18n } = useTranslation();

  const isPersian = i18n.language === "fa";

  // تبدیل ماهها به زبان انتخابی
  const localizedData = monthlyTemperatureData.map((item) => ({
    ...item,
    month: getLocalizedMonth(item.month, isPersian),
  }));

  return (
    <section
      className={`h-[234px] lg:w-1/2 xl:w-4/7 flex flex-col justify-between pt-3 pb-5.5 font-Roboto-light sm:font-Inter-regular`}
    >
      <h3
        className={`text-darkText dark:text-lightText sm:font-Inter-semiBlod px-6 sm:px-4 ${
          isPersian
            ? "text-sm sm:text-[19px] tracking-wide mt-1"
            : "text-sm sm:text-lg"
        }`}
      >
        {t("temperatureChart.average_monthly_temperature")}
      </h3>

      <ResponsiveContainer
        className={`font-medium text-[10px] ${
          isPersian ? "pl-2 pr-3 -mx-3.5" : " pl-6 pr-1 -mx-2"
        }`}
        height="68%"
      >
        <ComposedChart data={localizedData}>
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
            strokeDasharray="4 4"
            stroke="#AFBCC1"
            vertical={false}
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="month"
            tick={{
              fill: "#000",
              dy: isPersian ? 6 : 12,
              textAnchor: "end",
            }}
            padding={{
              left: isPersian? 0 : 15,
              right: isPersian ? 35 : 0 
            }}
            reversed={isPersian}
          />
          <YAxis
            orientation={isPersian ? "right" : "left"}
            tickLine={false}
            axisLine={false}
            domain={[10, 40]}
            ticks={[10, 20, 30, 40]}
            tick={{ fill: "#000", dx: isPersian ? 26 : -16 }}
            tickFormatter={(value) => `${value}°c`}
          />
          <Tooltip
            contentStyle={{
              textAlign: isPersian ? "right" : "left",
              direction: isPersian ? "rtl" : "ltr",
            }}
          />

          {/* Area for gradient background */}
          <Area
            type="linear"
            dataKey="temp"
            fill="url(#tempGradient)"
            stroke="transparent"
            connectNulls={true}
          />

          {/* Main line */}
          <Line
            type="linear"
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
