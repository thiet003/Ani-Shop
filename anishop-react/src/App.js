import logo from "./logo.svg";
import "./App.css";
// import { ProductList } from "./Components/Test/ProductList";
import { ProductList } from "./Components/ProductList";



import {Routes, Route,Link} from 'react-router-dom'
import Signup from './Container/Signup';
import Login from './Container/Login';
import Profile from './Container/Profile';
import Orders from './Container/Orders';
import OrderDetail from './Container/OrderDetail';

import { Home } from "./Container/Home";
import { Shop } from "./Container/Shop";
import { Product } from "./Container/Product";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)
function App() {
  return (
    <div>
      <Header />
      <div className="App flex justify-center content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />}/>
          <Route path="/cart" />
          <Route path="/contact_us" />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/order/:id" element={<OrderDetail />}/>
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;