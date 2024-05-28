import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbar } from "../data/data";
const Header = () => {
  const [height, setHeight] = useState(false);
  return (
    <div className="w-full sticky top-0 bg-white z-50" >
      <div className="w-full h-[70px] flex items-center justify-between lg:px-[100px] border-b py-[10px] px-[10px] lg:py-[20px] ">
        <div className="flex items-center justify-center gap-2">
          <div
            className="block lg:hidden  w-fit"
            onClick={() => setHeight(!height)}
          >
            <GiHamburgerMenu size={25} />
          </div>{" "}
          <img
            src="https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png"
            alt="logo"
            className="w-[110px]"
          />
        </div>
        <div className=" w-fit flex items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-0.5">
            <img
              src="https://www.unfluke.in/static/media/bell-icon.d99e8edc.png"
              alt=""
              className=" w-7"
            />
            <FaCaretDown color="#4b4b4b" size={15} />
          </div>

          <div className="flex items-center justify-center gap-0.5">
            <img
              src="https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg"
              alt=""
              className=" w-7"
            />
            <span>0</span>
          </div>

          <div className="flex items-center justify-center gap-0.5">
            <img
              src="https://www.unfluke.in/static/media/monkey.5456259d.jpg"
              alt=""
              className=" w-7"
            />
            <FaCaretDown color="#4b4b4b" size={15} />
          </div>
        </div>
      </div>
      <div className={`w-full lg:flex  hidden  items-center justify-center gap-5 font-semibold py-5 `}>
        {navbar?.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center gap-2 cursor-pointer"
          >
            {item.leftIcon && <span>{item.leftIcon}</span>}
            <span>{item.title}</span>
            {item.rightIcon && <span>{item.rightIcon}</span>}
          </div>
        ))}
      </div>
    


      <div className={` flex flex-col lg:hidden items-center justify-center gap-5 font-semibold  ${height?'h-[500px]':'h-0'} transition-all duration-300 overflow-hidden `}>
        {navbar?.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center gap-2 cursor-pointer"
          >
            {item.leftIcon && <span>{item.leftIcon}</span>}
            <span>{item.title}</span>
            {item.rightIcon && <span>{item.rightIcon}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
