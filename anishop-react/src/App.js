import logo from "./logo.svg";
import "./App.css";

// import { ProductList } from "./Components/Test/ProductList";
import { ProductList } from "./Components/ProductList";
import React from "react";


import {Routes, Route,Link} from 'react-router-dom'
import Signup from './Container/Signup';
import Login from './Container/Login';
import Profile from './Container/Profile';
import Orders from './Container/Orders';
import OrderDetail from './Container/OrderDetail';

import { Home } from "./Container/Home";
import { Shop } from "./Container/Shop";
import { ProductDetail } from "./Container/ProductDetail";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFontAwesome, fab} from '@fortawesome/free-brands-svg-icons'
import Cart from "./Container/Cart/Cart";
import CustomerInfor from "./Container/CustomerInfor";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

library.add(fas, far, faTwitter, faFontAwesome, fab)
function App() {
  return (
    <div>
      <ToastContainer/>
      <Header />
      <div className="App flex justify-center content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/customerInfo" element={<CustomerInfor />}/>
          <Route path="/contact_us" />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/order/:id" element={<OrderDetail />}/>
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;