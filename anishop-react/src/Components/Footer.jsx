import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    console.log("Email button clicked!");
  };
  return (
    <div className="w-screen bg-key-secondary-color flex justify-center">
      <div className="w-4/5">
        <div className="grid grid-cols-6 gap-6 m-6 ">
          <div className="col-span-2">
            <div className="logo">
              <img
                className=" object-fill w-4/5 h-full"
                src="https://lh3.googleusercontent.com/pw/ADCreHc9dyP40eh8Qk8sD90iC2lvv9AP7MlTN_YWVhmJQrqguAEYYdqISD5eaPExSOg0ONPdF2KvxkVzSWn8XaW5CUlohb6rB-PWzqCbEo_2DuobjB8qeT9eVVHyq5jdkzrZjB8oMxeX1VuwWoHCvzIzuEoE=w324-h92-s-no-gm?authuser=0"
                alt="Logo"
              />
            </div>
            <div className="flex items-center my-3 cursor-pointer">
              <FontAwesomeIcon
                icon="fa-solid fa-phone"
                shake
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <div className="text-white font-sans font-bold text-2xl ml-3">
                0123.456.789
              </div>
            </div>
            <div className="flex items-center my-3 cursor-pointer">
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                shake
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <div className="text-white font-sans font-bold text-2xl ml-3">
                anishop.contact@proptit.com
              </div>
            </div>
          </div>
          <div>
              <div className="text-white font-sans font-bold text-2xl mb-5">ACCOUNT</div>
              <ul>
                {[
                  ['My Account', '/'],
                  ['My Cart', '/cart'],
                  ['Checkout', '/checkout'],
                  ['Login', '/login'],
                  ['Register', '/register'],
                ].map(([title, link]) => (
                  <li key={title}><span className="text-white font-sans font-thin text-lg hover:ml-3 hover:font-medium transition-all duration-150 ease-in-out"><Link to={link}>{title}</Link></span></li>
                ))}
              </ul>
            </div>
          <div>
              <div className="text-white font-sans font-bold text-2xl mb-5">PAGE</div>
              <ul>
                {[
                  ['Home', '/'],
                  ['Shop', '/shop'],
                  ['Cart', '/cart'],
                  ['Contact Us', '/contact_us'],
                ].map(([title, link]) => (
                  <li key={title}><span className="text-white font-sans font-thin text-lg hover:ml-3 hover:font-medium transition-all duration-150 ease-in-out"><Link to={link}>{title}</Link></span></li>
                ))}
              </ul>
          </div>
          <div className="col-span-2">
          <div className="text-white font-sans font-bold text-2xl mb-5">KEEP IN TOUCH</div>
            <div className="search-bar relative w-4/5">
              <input className="rounded-lg p-4 ps-10 block w-full text-gray-900 border focus:ring-1 border-gray-300 focus:border-key-secondary-color focus:ring-blue-300 outline-none" type="text" placeholder="Email Address" required/>
              <button className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-400 text-white focus:outline-none focus:ring-blue-300 focus:ring-1 hover:bg-blue-500" type="button" onClick={handleClick}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" fade size="lg" style={{color: "#ffffff",}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
