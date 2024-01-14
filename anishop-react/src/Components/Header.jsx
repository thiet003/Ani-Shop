import React from "react";
import { useNavigate, Link, createSearchParams, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ProductList, setSearch } from "./ProductList";


export const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const handleSearchClick = () => {
    
    const searchQuery = createSearchParams({ search });

    navigate({
      pathname: "/shop",
      search: `?${searchQuery}`,
    });
    console.log(`Search query: ${searchQuery}`);
    console.log("Search button clicked!");
  };

  return (
    <div className="w-screen">
      <div className="py-5 flex justify-center content-center items-center flex-col bg-key-primary-color">
      <header className="flex w-4/5 justify-between">
        <div className="logo w-1/6">
          <img
            className="lg:w-[180px] mx-5"
            src="https://lh3.googleusercontent.com/pw/ADCreHc9dyP40eh8Qk8sD90iC2lvv9AP7MlTN_YWVhmJQrqguAEYYdqISD5eaPExSOg0ONPdF2KvxkVzSWn8XaW5CUlohb6rB-PWzqCbEo_2DuobjB8qeT9eVVHyq5jdkzrZjB8oMxeX1VuwWoHCvzIzuEoE=w324-h92-s-no-gm?authuser=0"
            alt="Logo"
          />
        </div>

        <div className="search-bar relative w-4/5 mx-5">
          <input className="rounded-lg p-4 ps-10 block w-full text-gray-900 border focus:ring-1 border-gray-300 focus:border-key-secondary-color focus:ring-blue-300 outline-none" 
            type="text" 
            placeholder="Items, collection & seller" required
            onChange={e => setSearch(e.target.value)}
          />
          <button 
            className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-400 text-white focus:outline-none focus:ring-blue-300 focus:ring-1 hover:bg-blue-500" 
            type="button" 
            onClick={handleSearchClick}
          >
          <FontAwesomeIcon className="mr-2" icon="fa-solid fa-magnifying-glass" fade size="lg" style={{color: "#ffffff",}} />
            Search
          </button>
        </div>

        <div className="user-actions flex items-center justify-center w-1/6">
          <button className ="" type="button">Account</button>
          <button type="button">Cart</button>
        </div>
      </header>
      </div>
      <div className="py-5 flex justify-center content-center items-center flex-col bg-white">
        <nav className="flex lg:w-4/5 w-full">
            <div className="w-1/5"><Link to="/">HOME</Link></div>
            <div className="w-1/5"><Link to="/shop">SHOP</Link></div>
            <div className="w-1/5"><Link to="/cart">CART</Link></div>
            <div className="w-1/5"><Link to="/contact_us">CONTACT US</Link></div>
            <div className="w-1/5"><Link to="/">Q&A</Link></div>
        </nav>
    </div>
    </div>
  );
};
