import logo from "./logo.svg";
import "./App.css";

// import { ProductList } from "./Components/Test/ProductList";
import { ProductList } from "./Components/ProductList";
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Container/Signup";
import Login from "./Container/Login";
import Profile from "./Container/Profile";
import Orders from "./Container/Orders";
import OrderDetail from "./Container/OrderDetail";

import { Home } from "./Container/Home";
import { Shop } from "./Container/Shop";
import { ProductDetail } from "./Container/ProductDetail";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import { Provider } from "react-redux";
import store from "./Redux/Store";

library.add(fas, far, faTwitter, faFontAwesome, fab);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="App flex justify-center content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/cart" />
            <Route path="/contact_us" />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/order/:id" element={<OrderDetail />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
