import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TemperatureInfo from "../../Components/TemperatureInfo/TemperatureInfo";
import TemperatureChart from "../../Components/TemperatureChart/TemperatureChart";

const Index = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="px-6 flex flex-col lg:flex-row-reverse justify-between gap-x-10 mt-7 *:bg-stoneCard dark:*:bg-[#292F45] *:rounded-3xl">
        <TemperatureInfo />
        <TemperatureChart />
      </div>
      <Footer />
    </>
  );
};

export default Index;
