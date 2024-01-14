import React from "react";
import "./AnimatedBackground.css";

export const AnimatedBackground = () => {
  const spans = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <div className="backgroundd z-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

