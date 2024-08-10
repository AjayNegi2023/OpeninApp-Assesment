import React, { useEffect, useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";
import Logo from "../components/Logo";
import { useTheme } from "../components/ThemeContext";
import { IMG_URL } from "../components/Constant";

const Signup = () => {
  const { theme } = useTheme();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setauthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch(() => navigate("/"));
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  if (authenticated && !check) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <div className={`flex flex-col sm:flex-row justify-between items-center w-full ${theme === "dark" ? "bg-[#000000]" : "bg-[#F5F5F5]"}`}>
        {/* Left Side: Image and Gradient */}
        <div className={`relative h-[940px] top-[24px] left-[32px] w-[704px] ${theme === "dark" ? "bg-gradient-to-tr from-[#2EBF91] to-[#8360C3]" : "bg-gradient-to-tr from-[#8360C3] to-[#2EBF91]"} p-[32px] hidden sm:block`}>
          <div className={`bg-[#B7E9F640] w-[600px] h-[840px] p-[13.02px_21.71px] rounded-tl-[28.94px] relative overflow-hidden`}>
            <div className="flex flex-col gap-[11.58px]">
              <Logo className="mb-4 hidden sm:block" />
              <h2 className={`text-2xl md:text-4xl lg:text-5xl mt-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Generate detailed reports with just one click
              </h2>
            </div>
            <img
              src={IMG_URL}
              alt="Report"
              className="absolute bottom-0 right-0 w-[380px] h-auto rounded-tl-[15px]"
            />
          </div>
        </div>

        <div className={`flex flex-col mt-14 w-full gap-6 justify-center items-center ${theme === "dark" ? "bg-[#000000] sm:bg-transparent text-white" : "bg-[#F5F5F5] sm:bg-transparent text-black"}`}>
        <div className="flex flex-col justify-center items-center gap-6 px-6 sm:px-0">
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <h2 className={`text-[18px] sm:text-[36px] font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Sign Up
              </h2>
              <p className={`text-[16px] font-lato ${theme === "dark" ? "text-white" : "text-black"}`}>
                Create your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleClick}
                className={`text-[12px] w-[160px] sm:w-[180px] rounded-lg h-[40px] px-6 ${theme === "dark" ? "bg-[#858585] text-[#ffffff]" : "bg-white text-[#858585]"}`}
              >
                <div className="flex justify-between items-center">
                  <img src={google} alt="google" className="w-[14px] h-[14px]" />
                  Sign Up with Google
                </div>
              </button>
              <button
                className={`text-[12px] w-[150px] sm:w-[180px] rounded-lg h-[40px] px-6 ${theme === "dark" ? "bg-[#858585] text-[#ffffff]" : "bg-white text-[#858585]"}`}
              >
                <div className="flex justify-between items-center">
                  <img src={apple} alt="apple" className="w-[14px] h-[14px]" />
                  Sign Up with Apple
                </div>
              </button>
            </div>
            <div className={`flex rounded-2xl flex-col items-center mx-auto ${theme === "dark" ? "bg-[#0D0D0D]" : "bg-white"}`}>
              <form className="flex flex-col px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className={`w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl ${theme === "dark" ? "bg-[#161616]" : "bg-[#EAEAEA]"}`}
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className={`w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl ${theme === "dark" ? "bg-[#161616]" : "bg-[#EAEAEA]"}`}
                    placeholder="Password..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Confirm Password
                  </h1>
                  <input
                    className={`w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl ${theme === "dark" ? "bg-[#161616]" : "bg-[#EAEAEA]"}`}
                    placeholder="Confirm Password..."
                  />
                </div>
                <button className={`rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white ${theme === "dark" ? "bg-[#605BFF]" : "bg-[#605BFF]"}`}>
                  Sign Up
                </button>
              </form>
            </div>
            <p className={`mx-auto ${theme === "dark" ? "text-white" : "text-[#858585]"}`}>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className={`cursor-pointer ${theme === "dark" ? "text-[#605BFF]" : "text-[#605BFF]"}`}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;
