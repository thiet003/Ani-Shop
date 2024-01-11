import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./Components/Test/ProductList";

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
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" />
          <Route path="/contact_us" />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
