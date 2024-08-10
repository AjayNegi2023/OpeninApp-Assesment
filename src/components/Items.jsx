import React from "react";
import dashimg from "../assets/Category.png";
import schedule from "../assets/Document.png";
import setting from "../assets/Setting.png";
import invoice from "../assets/Ticket.png";
import notification from "../assets/Notification.png";
import calendar from "../assets/Calendar (1).png";
import upload from "../assets/Chart.png";
import { useTheme } from "./ThemeContext";

const Items = () => {
  const { theme } = useTheme();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const textColor = theme === "dark" ? "#6E6E6E" : "#030229";
  const iconColor = theme === "dark" ? "#FFFFFF" : "#000000"; 
  const uploadColor = "#605BFF";

  return (
    <div className="cursor-pointer flex md:gap-6 lg:pr-12 gap-2 lg:gap-10 flex-col md:mt-6 items-start">
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="dashboard" 
          src={dashimg} 
          className="w-[24px] h-[24px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal md:font text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Dashboard
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="upload" 
          src={upload} 
          className="w-[20px] h-[22px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: uploadColor }}
        >
          Upload
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="invoice" 
          src={invoice} 
          className="w-[24px] h-[18.37px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Invoice
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="schedule" 
          src={schedule} 
          className="w-[24px] h-[26px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Schedule
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="calendar" 
          src={calendar} 
          className="w-[24px] h-[26px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Calendar
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="notification" 
          src={notification} 
          className="w-[24px] h-[26px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Notification
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img 
          alt="settings" 
          src={setting} 
          className="w-[24px] h-[26px]" 
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }} 
        />
        <p 
          className="font-normal text-[16px] md:text-[18px]" 
          style={{ color: textColor }}
        >
          Settings
        </p>
      </div>
      <div className="flex justify-between items-center gap-3" onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 -ml-1"
          style={{ color: textColor }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <p 
          className="font-normal text-[16px] md:text-[18px] hover:font-semibold" 
          style={{ color: textColor }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Items;
