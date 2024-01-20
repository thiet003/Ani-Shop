import React, { useEffect } from "react";
import { ReactComponent as YourSvg } from "../asset/Home_Page.svg";
import { AnimatedBackground } from "./AnimatedBackground/AnimatedBackground";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-[#fe8572] w-full justify-center items-center flex">
      <YourSvg />
      <AnimatedBackground />
    </div>
  );
};
