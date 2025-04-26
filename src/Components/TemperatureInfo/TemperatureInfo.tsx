import React from "react";
import { IoLocation } from "react-icons/io5";

const TemperatureInfo = (): React.JSX.Element => {
  return (
    <section className="flex justify-between w-full lg:w-[607px] h-[234px] px-6 py-5 shadow-custom text-darkText dark:text-lightText mb-7 lg:mb-0">
      <div className="flex flex-col max-w-48 mr-3 mt-1.5">
        <img src="/images/svgs/image7.svg" alt="img" />
        <span className="text-[33px] tracking-wide -mr-1.5 mt-1">Cloudy</span>
        <span className="tracking-wide">Feels Like 26</span>
      </div>
      <div>
        <span className="flex items-center justify-between tracking-wide text-[#3D4852] bg-[#CDD9E0] rounded-4xl w-[173px] h-10 pr-[25px]">
          San Francisco
          <IoLocation className="text-2xl ml-2" />
        </span>
        <div className="ltr-text mt-2.5">
          <span className="text-[32px] font-bold tracking-tight">Monday</span>
          <div className="flex text-[14px] gap-x-4 -mt-1">
            <span>24 Dec, 2023</span>
            <span>11:45 AM</span>
          </div>
        </div>
        <div className="ltr-text mt-2">
          <div className="flex items-center gap-x-2">
            <span className="text-[40px]">26</span>
            <span className="inline-block w-4 h-4 rounded-full border-[3px] border-darkText dark:border-lightText mb-5"></span>
            <span className="text-[40px]">C</span>
          </div>
          <div className="flex text-[14px] gap-x-1 -mt-2">
            <span>High: 27</span>
            <span>Low: 10</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemperatureInfo;
