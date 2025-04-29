import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TemperatureInfo from "../../Components/TemperatureInfo/TemperatureInfo";
import TemperatureChart from "../../Components/TemperatureChart/TemperatureChart";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";

const Index = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="container">
      <main className="flex flex-col gap-y-5 lg:flex-row justify-between gap-x-10 mt-7 2xl:mt-10 *:bg-stoneCard dark:*:bg-[#292F45] *:rounded-3xl">
        <TemperatureInfo />
        <TemperatureChart />
      </main>
        <WeatherDetails />
      </div>
      <Footer />
    </>
  );
};

export default Index;
