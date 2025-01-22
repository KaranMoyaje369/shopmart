import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import WishlistPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <Router basename="/shopmart">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/:category"
                element={<CategoryProducts />}
              />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </>
  );
};

export default App;
