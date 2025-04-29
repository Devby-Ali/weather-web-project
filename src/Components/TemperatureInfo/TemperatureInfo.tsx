import React from "react";
import { IoLocation } from "react-icons/io5";

const TemperatureInfo = (): React.JSX.Element => {
  return (
    <section className="flex lg:w-1/2 xl:w-3/7 justify-between px-6 py-5 shadow-custom text-darkText dark:text-lightText  font-Roboto-regular">
      <div>
        <span className="flex items-center justify-between text-sm sm:text-base font-Inter-regular text-[#3D4852] bg-[#CDD9E0] rounded-4xl w-38 sm:w-44 h-8 sm:h-10 pl-2.5 pr-5 sm:pr-6">
          <IoLocation className="text-lg sm:text-2xl" />
          San Francisco
        </span>
        <div className="mt-3 sm:mt-3.5">
          <span className="text-2xl sm:text-[32px]">Monday</span>
          <div className="flex text-xs sm:text-[14px]/4 font-Roboto-light gap-x-2.5 sm:gap-x-5 mt-0.5 sm:mt-0">
            <span>24 Dec, 2023</span>
            <span>11:45 AM</span>
          </div>
        </div>
        <div className="mt-3 sm:mt-3">
          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <span className="text-2xl sm:text-[40px]">26</span>
            <span className="inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full border-2 sm:border-[3px] border-darkText dark:border-lightText mb-4.5 sm:mr-1"></span>
            <span className="text-2xl sm:text-[40px]">C</span>
          </div>
          <div className="flex text-xs sm:text-[14px] gap-x-1 sm:-mt-1 font-Roboto-light sm:font-Roboto-regular">
            <span>High: 27</span>
            <span>Low: 10</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start max-w-48 mr-3 mt-1.5 font-Inter-regular">
        <div className="w-28 h-21 sm:h-auto sm:w-auto">
          <img src="/images/svgs/image7.svg" alt="img" />
        </div>
        <div className="sm:-ml-5 mt-4 sm:mt-[3px] flex flex-col">
          <span className="text-2xl sm:text-[32px]/12">Cloudy</span>
          <span className="text-xs sm:text-base mt-[1px]">Feels Like 26</span>
        </div>
      </div>
    </section>
  );
};

export default TemperatureInfo;
