import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
