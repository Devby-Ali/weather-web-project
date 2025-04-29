import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = (): React.JSX.Element => {
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = (): void => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightModeHandler = (): void => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };

  return (
    <>
      <header className="relative flex justify-between h-20 bg-lightPrimary dark:bg-darkPrimary shadow-header dark:shadow-dark px-4 sm:px-6 tracking-wide">
        <div className="flex-center gap-x-2">
          <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-full overflow-hidden">
            <img src="/images/image1.jpg" alt="" />
          </div>
          <span className="hidden sm:block text-[11px] sm:text-xs text-darkText dark:text-lightText font-Roboto-light sm:font-Roboto-regular tracking-wide pr-4 text-nowrap">
            Weather Dashboard
          </span>
        </div>
        <div className="flex-center gap-x-2 sm:gap-x-5">
          <div
            className={`relative h-8 sm:h-10 sm:w-[295px] flex items-center justify-between rounded-sm border ${
              openSearch ? "border-active-blue/50" : "border-zinc-400/50"
            }`}
          >
            <span
              className={`hidden xs:block absolute -top-[9px] left-3 text-xs font-Roboto-light sm:font-Roboto-regular dark:bg-darkPrimary bg-lightPrimary px-[3px] tracking-wide ${
                openSearch
                  ? "text-active-blue"
                  : "dark:text-zinc-400 text-zinc-500"
              }`}
            >
              Search Your Location
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full text-xs sm:text-base mb-0.5 ml-[3px] bg-transparent font-Roboto-regular px-2 dark:text-lightText ltr-text outline-none xs:placeholder:text-transparent"
              placeholder="Search your location"
              onFocus={() => setOpenSearch(true)}
              onBlur={() => setOpenSearch(false)}
            />
            <span
              onClick={() => setOpenSearch(!openSearch)}
              className={`w-6 h-6 flex-center mr-2 sm:mr-[13px] text-zinc-500 text-xl cursor-pointer ${
                openSearch && "rotate-180"
              }`}
            >
              <IoMdArrowDropdown />
            </span>
            <ul
              className={`${
                openSearch ? "absolute" : "hidden"
              } top-10 -left-0.5 -right-0.5 rounded-sm dark:text-lightText dark:bg-box-dark bg-white py-3 px-4 shadow-costum space-y-2.5`}
              dir="ltr"
            >
              <li>Menu Item</li>
            </ul>
          </div>
          <div
            className={`flex-center sm:h-10 sm:w-10 sm:border rounded-lg cursor-pointer text-xl ${
              openSetting
                ? "border-active-blue/50 text-active-blue bg-active-blue/5"
                : "border-zinc-400/50 text-zinc-400"
            }`}
            onClick={() => setOpenSetting(!openSetting)}
          >
            <IoSettingsOutline />
          </div>
        </div>
      </header>
      <div
        className={`${
          openSetting ? "absolute" : "hidden"
        } right-0 w-[220px] mr-[25px] -mt-3.5 z-10 shadow-header dark:shadow-dark bg-white dark:bg-box-dark rounded-lg px-4 py-[13px] divide-y divide-zinc-200 dark:divide-white/15 font-Roboto-regular`}
      >
        <div className="pb-3 mb-4">
          <span className="dark:text-lightText tracking-wide">Mode</span>
          <div className="flex h-[33px] mt-[7px] *:text-[14px] *:tracking-wide">
            <span
              className="flex-center gap-x-1.5 w-full text-active-blue dark:text-lightText cursor-pointer border border-active-blue dark:border-zinc-300/25 rounded-l-sm border-r-0 pb-0.5"
              onClick={() => lightModeHandler()}
            >
              <IoSunnyOutline />
              Light
            </span>
            <span className="h-full w-0.5 bg-active-blue/80 dark:bg-zinc-400"></span>
            <span
              className="flex-center gap-x-1.5 w-full text-zinc-400 dark:text-darkText dark:bg-lightPrimary/80 cursor-pointer border border-zinc-400 rounded-r-sm border-l-0 pb-0.5"
              onClick={() => darkModeHandler()}
            >
              <IoMoonOutline />
              Dark
            </span>
          </div>
        </div>

        <div className="pb-3 pt-0.5">
          <span className="dark:text-lightText tracking-wide">Language</span>
          <div className="flex h-[33px] mt-[7px] *:text-[14px] *:tracking-wide">
            <span className="flex-center gap-x-2 w-full text-zinc-400 dark:text-lightText cursor-pointer border border-zinc-400 dark:border-zinc-300/25 rounded-l-sm border-r-0">
              En
            </span>
            <span className="h-full w-0.5 bg-zinc-400"></span>
            <span className="flex-center gap-x-2 w-full text-zinc-400 dark:text-darkText dark:bg-lightPrimary/80 cursor-pointer border border-zinc-400 rounded-r-sm border-l-0">
              Fa
            </span>
          </div>
        </div>

        <Link
          to={"/Login"}
          className="flex items-center pl-[2px] pt-4.5 gap-x-2 *:dark:text-lightText tracking-wide"
        >
          <RxExit className="text-lg" />
          <span className="dark:text-lightText">Exit</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
