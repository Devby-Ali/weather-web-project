import React, { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Login = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>("English");
  const [languageShow, setLanguageShow] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const userLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/");
  };

  const languageHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    setLanguageShow(!languageShow);
  };

  return (
    <section className="flex-center flex-col bg-lightPrimary dark:bg-darkPrimary font-Roboto-regular">
      <div className="flex-center h-screen">
        <div className="flex w-[700px] lg:w-240 h-140 rounded-xl overflow-hidden shadow-Login mb-6">
          <form className="w-[506px] flex-center bg-white dark:bg-box-dark">
            <div className="flex flex-col justify-between w-96.5 h-92.5 mb-1.5">
              <div>
                <h3 className="text-[26px] font-Roboto-bold text-darkText dark:text-lightText text-center mb-7">
                  Login
                </h3>

                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-14 bg-transparent border border-zinc-500 rounded-md ltr-text p-3 dark:text-lightText outline-none"
                  placeholder="Enter Your Name"
                />
              </div>

              <button
                className="h-10.5 bg-[#2196F3] text-lightText w-full rounded-md shadow-md"
                onClick={userLogin}
              >
                LOGIN
              </button>
            </div>
          </form>
          <div className="hidden lg:block relative w-[454px] bg-[#D3E1E7] dark:bg-[#404961] p-10">
            <div className="absolute top-14 right-11">
              <img
                className="filter-shadow-cloud"
                src="/images/svgs/Moon-cloud-mid-rain.png"
                alt=""
              />
            </div>
            <div className="absolute top-40.5 left-[35px]">
              <img
                className="filter-shadow-cloud"
                src="/images/svgs/Sun-cloud-angled-rain.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-[59px] right-11">
              <img
                className="filter-shadow-cloud"
                src="/images/svgs/Moon-cloud-fast-wind.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={languageHandler}
        className={`flex flex-col w-55 h-11 gap-y-0.5 tracking-wide -mt-22 ${
          languageShow && "mb-24"
        }`}
      >
        <p
          className={`${
            languageShow
              ? "text-active-blue"
              : "text-darkText dark:text-stone-300"
          } text-xs font-Roboto-light`}
        >
          Language
        </p>
        <div
          onClick={languageHandler}
          className={`w-full flex items-center justify-between text-darkText dark:text-lightText pb-1 cursor-pointer  border-b ${
            languageShow ? "border-b-active-blue" : "border-b-stone-400"
          }`}
        >
          <span className="select-none">{language}</span>
          <span className={`${languageShow && "rotate-180"} mr-1`}>
            <HiOutlineChevronDown />
          </span>
        </div>
        <ul
          className={`${
            languageShow ? "flex" : "hidden"
          } flex-col items-start w-full rounded-b-sm text-darkText dark:text-lightText bg-white dark:bg-box-dark space-y-0.5`}
        >
          <li
            value={"En"}
            className="w-full py-1 px-3 hover:bg-stoneCard dark:hover:bg-white/15 cursor-pointer"
          >
            English
          </li>
          <li
            value={"Fa"}
            className="w-full py-1 px-3 hover:bg-stoneCard dark:hover:bg-white/15 cursor-pointer"
          >
            Persian
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Login;
