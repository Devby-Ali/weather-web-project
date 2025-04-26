import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeatherCards = [
  { id: 1, img: "/images/svgs/storm.svg", day: "Fri", Temp: "25" },
  { id: 2, img: "/images/svgs/Rain-cloud.svg", day: "Thu", Temp: "21" },
  { id: 3, img: "/images/svgs/image8.svg", day: "Wed", Temp: "35" },
  { id: 4, img: "/images/svgs/image8.svg", day: "Tue", Temp: "33" },
  { id: 5, img: "/images/svgs/storm.svg", day: "Mon", Temp: "30" },
  { id: 6, img: "/images/svgs/image8.svg", day: "Sun", Temp: "34" },
  { id: 7, img: "/images/svgs/Rain-cloud.svg", day: "Sat", Temp: "28" },
  { id: 8, img: "/images/svgs/image8.svg", day: "Fri", Temp: "31" },
  { id: 9, img: "/images/svgs/image7.svg", day: "Thu", Temp: "32" },
  { id: 10, img: "/images/svgs/storm.svg", day: "Wed", Temp: "29" },
  { id: 11, img: "/images/svgs/Rain-cloud.svg", day: "Tue", Temp: "27" },
  { id: 12, img: "/images/svgs/image7.svg", day: "Mon", Temp: "31" },
  { id: 13, img: "/images/svgs/image7.svg", day: "Today", Temp: "28" },
];

const WeatherDetails = (): React.JSX.Element => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 11,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 11.2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col justify-between h-[381px] mx-6 mt-7 mb-26 pl-7 pt-6 pb-[26px] bg-stoneCard dark:bg-[#292F45] rounded-3xl text-darkText dark:text-lightText ltr-text font-Inter-regular shadow-weatherDetails">
      <h3 className="text-2xl/7">2 weeks Forecast</h3>

      <div>
        <Slider {...settings}>
          {WeatherCards.map((card) => (
            <div key={card.id}>
              <div className="flex items-center flex-col h-[266px] w-[104px] pt-[44px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
                <h2 className="text-sm px-2">{card.day}</h2>
                  <span className="w-16 h-0.5 bg-gradient-to-r from-[#36363600] via-[#7E7E7E] to-[#36363600] rounded-full mt-[11px]"></span>
               
                <div className="w-18 h-18 flex-center mt-6.5">
                  <img src={card.img} alt="" />
                </div>
                <span className="text-lg mt-5.5">{card.Temp}°C</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WeatherDetails;
