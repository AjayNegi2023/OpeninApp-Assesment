import React, { useState } from "react";
import logo from "../assets/Logo and company.png";
import { HiMenuAlt3 } from "react-icons/hi";
import Items from "./Items";
import { useTheme } from "./ThemeContext"; 

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  return (
    <div
      className={`relative flex flex-col justify-between py-4 md:py-0 text-gray-100 px-6 ${
        theme === "dark" ? "bg-[#0D0D0D]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <img
            alt="dashboard"
            src={logo}
            className="w-[111px] h-[42px] mt-[49px] ml-[20px]"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#000000" }}
          />
          <HiMenuAlt3
            size={30}
            className="md:hidden cursor-pointer absolute right-0 my-auto mr-5 mt-1"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className={`md:hidden absolute top-14 right-0  p-4 rounded-lg mr-1 ${
              theme === "dark" ? "bg-[#0D0D0D]" : "bg-[#FFFFFF]"
            }`}>
              <Items theme={theme} /> 
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          <Items theme={theme} /> 
        </div>
      </div>

      <div className="md:flex hidden flex-col justify-between mt-10 mb-12">
        <div
          className="flex flex-col cursor-pointer justify-between mt-20 text-md ml-2 gap-2"
          style={{ color: theme === "dark" ? "#6E6E6E" : "#000000" }} 
        >
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <button
          onClick={toggleTheme}
          className={`fixed bottom-4 left-4 p-2 rounded-full ${
            theme === "dark" ? "bg-[#0D0D0D]" : "bg-[#FFFFFF]"
          } text-${theme === "dark" ? "white" : "black"}`}
        >
         
        </button>
      </div>
    </div>
  );
};

export default SideBar;
