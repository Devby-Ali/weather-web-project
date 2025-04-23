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
      <header className="relative flex justify-between h-[80px] bg-lightPrimary dark:bg-darkPrimary shadow-md dark:shadow-dark px-6">
        <div className="flex-center gap-x-5">
          <div
            className="flex-center h-10 w-10 border border-gray-500 rounded-lg cursor-pointer"
            onClick={toggleOpen}
          >
            <IoSettingsOutline className="text-xl text-gray-500" />
          </div>
          <div className="h-10 sm:w-[295px] flex items-center justify-between border border-gray-500 rounded-[4px]">
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
          <span className="text-[11.5px] text-darkText dark:text-lightText tracking-tight">
            Weather Dashboard
          </span>
          <div className="hidden sm:block w-14 h-14 rounded-full overflow-hidden">
            <img src="/images/image1.jpg" alt="" />
          </div>
        </div>
      </header>
      <div
        className={`${
          open ? "absolute" : "hidden"
        } w-[220px] mr-[25px] -mt-3 z-10`}
      >
        <div className="h-60 px-4 py-3 divide-y dark:bg-black" dir="ltr">
          <div className="mb-3">
            <span className="dark:text-lightText">Mode</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] *:text-[13px] *:tracking-wider overflow-hidden">
              <span
                className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText dark:font-bold cursor-pointer"
                onClick={() => lightModeHandler()}
              >
                <IoSunnyOutline />
                Light
              </span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span
                className="flex-center gap-x-2 w-full dark:text-darkText dark:bg-lightPrimary dark:font-bold cursor-pointer"
                onClick={() => darkModeHandler()}
              >
                <IoMoonOutline />
                Dark
              </span>
            </div>
          </div>
          <div className="pt-4 mb-3">
            <span className="dark:text-lightText">Language</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] *:text-[13px] *:tracking-wider">
              <span className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText dark:font-bold cursor-pointer">
                En
              </span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText dark:font-bold cursor-pointer">
                Fa
              </span>
            </div>
          </div>
          <Link
            to={"/Login"}
            className="flex items-center pl-[2px] pt-3.5 gap-x-2 *:dark:text-lightText *:dark:font-bold"
          >
            <RxExit className="text-lg" />
            <span className="text-lightText">Exit</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
