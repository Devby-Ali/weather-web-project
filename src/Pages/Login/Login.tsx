import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (): React.JSX.Element => {
      const navigate = useNavigate();
    
      const userLogin = (event) => {
        event.preventDefault();
        console.log(event)
        navigate("/")
      };
    
      useEffect(() => {
        if (localStorage.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, []);
      return (
        <div className="flex-center h-screen bg-lightPrimary dark:bg-darkPrimary">
        <section className="flex w-[900px] lg:w-[1000px] h-[560px] rounded-xl overflow-hidden shadow-Login">
          <div className="hidden lg:block relative w-3/7 bg-[#D3E1E7] dark:bg-[#404961] p-10">
            <div className="absolute top-12 right-10">
              <img src="/images/svgs/Moon-cloud-mid-rain.png" alt="" />
            </div>
            <div className="absolute top-40 left-10">
              <img src="/images/svgs/Sun-cloud-angled-rain.png" alt="" />
            </div>
            <div className="absolute bottom-12 right-10">
              <img src="/images/svgs/Moon-cloud-fast-wind.png" alt="" />
            </div>
          </div>
          <form className="w-full lg:w-4/7 flex-center bg-white dark:bg-[#292F45] font-Roboto-regular">
            <div className="flex flex-col justify-between w-[360px] h-[360px]">
              <div>
                <h3 className="text-[25px] font-Roboto-bold text-darkText dark:text-lightText text-center mb-8">
                  Login
                </h3>
  
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-14 bg-transparent border border-gray-500 rounded-md ltr-text p-4 dark:text-lightText outline-none"
                  placeholder="Enter Your Name"
                />
              </div>
  
              <button
                className="h-10 bg-[#2196F3] text-lightText w-full rounded-md"
                href="#"
                onClick={userLogin}
              >
                LOGIN
              </button>
            </div>
          </form>
        </section>
      </div>
      )
};

export default Login;
