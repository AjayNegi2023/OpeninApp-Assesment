import React from "react";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";
  const backgroundColor = theme === "dark" ? "#1E1E1E" : "#F5F5F5";

  return (
    <div
      className="flex justify-between items-center mt-[49px] w-[1067px] h-[32.93px]"
      style={{ backgroundColor }}
    >
      <div className="w-[133px] h-[32px]">
        <h1 className="font-bold text-[24px] sm:text-[24px]" style={{ color: textColor }}>
          Upload CSV
        </h1>
      </div>
      <div className="flex justify-between items-center gap-3" style={{ float: "right" }}>
        <img
          src={bellimg}
          alt="bell"
          className="w-[18px] h-[23px] top-1"
          style={{ filter: `invert(${theme === "dark" ? 1 : 0})` }}
        />
        <img
          src={userimg}
          alt="user"
          className="w-[30px] h-[30px] rounded-full"
          style={{ border: theme === "dark" ? "2px solid #FFFFFF" : "2px solid #000000" }}
        />
      </div>
    </div>
  );
};

export default Header;
