import React from "react";
import { navbar } from "../data/data";

const Navbar = ({height}) => {
    
  
  return (
    <>
      
      
      <div className={`w-full lg:flex  hidden  items-center justify-center gap-5 font-semibold py-5 fixed top-[70px] `}>
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
     
    </>
  );
};

export default Navbar;
