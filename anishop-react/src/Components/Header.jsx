import React, { useState, useEffect } from "react";
import {
  useNavigate,
  Link,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ProductList, setSearch } from "./ProductList";

export const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearchClick = () => {
    const searchQuery = createSearchParams({ search });
    navigate({
      pathname: "/shop",
      search: `?${searchQuery}`,
    });
    console.log(`Search query: ${searchQuery}`);
    console.log("Search button clicked!");
  };


  const scrollToQA = () => {
    window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  };
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // };
  // scrollToTop();
  return (
    <div className="">
      <div className="w-screen z-[9999]">
        <div className="py-5 flex justify-center content-center items-center flex-col bg-key-primary-color transition-all duration-150 ease-in-out ">
          <header className="flex w-4/5 justify-between">
            <div className="logo w-1/6">
              <img
                className="lg:w-[180px] mx-5"
                src="https://lh3.googleusercontent.com/pw/ADCreHc9dyP40eh8Qk8sD90iC2lvv9AP7MlTN_YWVhmJQrqguAEYYdqISD5eaPExSOg0ONPdF2KvxkVzSWn8XaW5CUlohb6rB-PWzqCbEo_2DuobjB8qeT9eVVHyq5jdkzrZjB8oMxeX1VuwWoHCvzIzuEoE=w324-h92-s-no-gm?authuser=0"
                alt="Logo"
              />
            </div>

            <div className="search-bar relative w-4/5 mx-5">
              <input
                className="rounded-lg p-4 ps-10 block w-full text-gray-900 border focus:ring-1 border-gray-300 focus:border-key-secondary-color focus:ring-blue-300 outline-none"
                type="text"
                placeholder="Items, collection & seller"
                required
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-400 text-white focus:outline-none focus:ring-blue-300 focus:ring-1 hover:bg-blue-500"
                type="button"
                onClick={handleSearchClick}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon="fa-solid fa-magnifying-glass"
                  fade
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                Search
              </button>
            </div>

            <div className="user-actions flex items-center justify-center w-1/6">
              <button className="" type="button">
                Account
              </button>
              <button type="button">Cart</button>
            </div>
          </header>
        </div>

        <div className="flex justify-center content-center items-center flex-col bg-white">
          <nav className="flex lg:w-4/5 w-full text-center ">
            {[
              ["Home", "/"],
              ["Shop", "/shop"],
              ["Cart", "/cart"],
              ["Contact Us", "/contact_us"],
            ].map(([title, link]) => (
              <div className="w-1/5 text-lg hover:text-key-primary-color hover:bg-gray-100 hover:font-bold transition-all duration-150 ease-in-out">
                <Link className="block w-full h-full py-5" to={link}>
                  {title}
                </Link>
              </div>
            ))}
            <div className="w-1/5 text-lg hover:text-key-primary-color hover:bg-gray-100 hover:font-bold transition-all duration-150 ease-in-out">
              <Link className="block w-full h-full py-5" to="/">
                Q&A
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
