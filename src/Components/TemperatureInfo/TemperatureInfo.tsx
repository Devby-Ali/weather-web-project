import React, { useContext } from "react";
import { IoLocation } from "react-icons/io5";
import { WeatherContext } from "../../Contexts/WeatherContext";

const TemperatureInfo = (): React.JSX.Element => {
  const { weatherData, loading } = useContext(WeatherContext);
  console.log(weatherData);

  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  const currentDate = () => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const currentTime = () => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleTimeString("en-US", timeOptions);
  };

  if (loading) return <div>در حال بارگذاری...</div>;

  if (!weatherData) return <div>اطلاعات آب و هوا در دسترس نیست</div>;

  return (
    <section className="flex lg:w-1/2 xl:w-3/7 justify-between px-6 py-5 shadow-custom text-darkText dark:text-lightText  font-Roboto-regular">
      <div>
        <span className="flex-center gap-x-2 w-max text-sm sm:text-base font-Inter-regular text-[#3D4852] bg-[#CDD9E0] rounded-4xl h-8 sm:h-10 pl-2.5 pr-5 sm:pr-6">
          <IoLocation className="text-lg sm:text-2xl" />
          {weatherData.name}
        </span>
        <div className="mt-3 sm:mt-3.5">
          <span className="text-2xl sm:text-[32px]">{dayName}</span>
          <div className="flex text-xs sm:text-[14px]/4 font-Roboto-light gap-x-2.5 sm:gap-x-5 mt-0.5 sm:mt-0">
            <span>{currentDate()}</span>
            <span>{currentTime()}</span>
          </div>
        </div>
        <div className="mt-3 sm:mt-3">
          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <span className="text-2xl sm:text-[40px]">
              {weatherData.main.temp.toFixed(1)}
            </span>
            <span className="inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full border-2 sm:border-[3px] border-darkText dark:border-lightText mb-4.5 sm:mr-1"></span>
            <span className="text-2xl sm:text-[40px]">C</span>
          </div>
          <div className="flex text-xs sm:text-[14px] gap-x-3 sm:-mt-1 font-Roboto-light sm:font-Roboto-regular">
            <span>High: {Math.round(weatherData.main.temp_max)}</span>
            <span>Low: {Math.round(weatherData.main.temp_min)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end max-w-48 font-Inter-regular">
        <div className="sm:w-32">
        <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            className="w-full h-full shadow-cloud"
            alt="Weather status"
          />
        </div>
        <div className="sm:-ml-5 xs:mt-2 flex flex-col">
          <span className="text-lg sm:text-2xl text-center text-wrap">
            {weatherData.weather[0].description}
          </span>
          <span className="text-xs sm:text-base mt-[1px]">
            Feels Like {weatherData.main.feels_like.toFixed(1)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TemperatureInfo;
