import "./assets/css/style.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import { Routes, Route } from "react-router-dom";
import { HOME, CART, CHECKOUT } from "./utils/consts.js";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CART} element={<Cart />} />
            <Route path={CHECKOUT} element={<Checkout />} />
          </Routes>
        </main>
      </CartProvider>
    </>
  );
}

export default App;
