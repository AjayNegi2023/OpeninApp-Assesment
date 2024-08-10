import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [check, setCheck] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(true);
    }
    setCheck(false);
  }, []);

  if (!authenticated && !check) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div
        className={`relative flex flex-col sm:flex-row w-full justify-between gap-4 lg:gap-6 ${
          theme === "dark" ? "bg-[#1E1E1E]" : "bg-[#F5F5F5]"
        } min-h-screen`}
      >
        <SideBar />
        <div
          className="flex flex-col w-full gap-2 md:gap-4 px-4"
          style={{
            color: theme === "dark" ? "#FFFFFF" : "#000000",
          }}
        >
          <Header />
          <Card />
        </div>
      </div>
    );
  }
};

export default Home;
