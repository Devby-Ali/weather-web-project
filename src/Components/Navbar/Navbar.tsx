import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const darkModeHandler = () => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightModeHandler = () => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };

  return (
    <>
      <header className="relative flex justify-between h-20 bg-lightPrimary dark:bg-darkPrimary shadow-md dark:shadow-dark px-6">
        <div className="flex-center gap-x-5">
          <div
            className={`flex-center h-10 w-10 border ${open ? "border-active-blue text-active-blue bg-active-blue/20" : "border-gray-500 text-gray-500"} rounded-lg cursor-pointer text-xl`}
            onClick={toggleOpen}
          >
            <IoSettingsOutline />
          </div>
          <div className="h-10 sm:w-[295px] flex items-center justify-between border border-gray-500 rounded-sm">
            <span className="w-6 h-6 flex-center mr-3">
              <FaCaretDown className="text-gray-600" />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full bg-transparent px-2 dark:text-lightText ltr-text outline-none"
              placeholder="Search Your Location"
            />
          </div>
        </div>

        <div className="flex-center gap-x-2">
          <span className="text-[11.5px] text-darkText dark:text-lightText">
            Weather Dashboard
          </span>
          <div className="hidden sm:block w-14 h-14 rounded-full overflow-hidden">
            <img src="/images/image1.jpg" alt="" />
          </div>
        </div>
      </header>
      <div dir="ltr"
        className={`${
          open ? "absolute" : "hidden"
        } w-[220px] mr-[25px] -mt-3 z-10 shadow-costum dark:shadow-dark bg-white dark:bg-black rounded-lg px-4 pb-3 pt-3.5 divide-y divide-gray-300 font-Roboto-regular`}
      >

        <div className="pb-3 mb-4">
          <span className="dark:text-lightText tracking-wide">Mode</span>
          <div className="flex h-[33px] mt-2 *:text-[14px] *:tracking-wide">
            <span
              className="flex-center gap-x-2 w-full text-active-blue dark:text-lightText dark:font-bold cursor-pointer border border-active-blue dark:border-gray-400 rounded-l-sm border-r-0"
              onClick={() => lightModeHandler()}
            >
              <IoSunnyOutline />
              Light
            </span>
            <span className="h-full w-0.5 bg-active-blue/80 dark:bg-gray-400"></span>
            <span
              className="flex-center gap-x-2 w-full text-gray-400 dark:text-darkText dark:bg-lightPrimary dark:font-bold cursor-pointer border border-gray-400 rounded-r-sm border-l-0"
              onClick={() => darkModeHandler()}
            >
              <IoMoonOutline />
              Dark
            </span>
          </div>
        </div>

        <div className="pb-3 pt-0.5">
          <span className="dark:text-lightText tracking-wide">Language</span>
          <div className="flex h-[33px] mt-2 *:text-[14px] *:tracking-wide">
            <span
              className="flex-center gap-x-2 w-full text-active-blue dark:text-lightText dark:font-bold cursor-pointer border border-active-blue dark:border-gray-400 rounded-l-sm border-r-0"
            >
              En
            </span>
            <span className="h-full w-0.5 bg-active-blue/80 dark:bg-gray-400"></span>
            <span
              className="flex-center gap-x-2 w-full text-gray-400 dark:text-darkText dark:bg-lightPrimary dark:font-bold cursor-pointer border border-gray-400 rounded-r-sm border-l-0"
            >
              Fa
            </span>
          </div>
        </div>

        <Link
          to={"/Login"}
          className="flex items-center pl-[2px] pt-4 gap-x-2 *:dark:text-lightText *:dark:font-bold tracking-wide"
        >
          <RxExit className="text-lg" />
          <span className="dark:text-lightText">Exit</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
