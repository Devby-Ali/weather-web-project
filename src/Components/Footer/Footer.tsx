import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="absolute bottom-0 flex px-6 items-center justify-between w-full h-[106px] bg-gradient-to-r dark:from-[#292F45] dark:via-[#3F4861] dark:to-[#151D32] from-[#F3FAFE] via-[#CCDDDD9E] to-[#F3FAFE] text-darkText dark:text-lightText">
      <div className="flex gap-x-11">
        <div className="flex-center gap-x-1.5 text-[22px]">
          <span className="ltr-text text-sm mb-1">
            <span className="tracking-wide">12:25</span> . Monday 23 December
            2023
          </span>
          <LuCalendarDays />
        </div>
        <div className="hidden xl:flex-center gap-x-1.5 text-[23px]">
          <span className="ltr-text text-sm mb-1">
            contact us : info@nadin.ir
          </span>
          <MdOutlineMailOutline />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <span className="ltr-text hidden lg:block mb-1 text-sm">
          All rights of this site are reserved for Nadin Sadr Aria Engineering
          Company.
        </span>
        <img src="/images/svgs/icon-copy-1.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
