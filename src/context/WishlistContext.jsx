import React, { createContext, useContext, useState } from "react";
import "../../node_modules/react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      toast.success("Product Added to wishlist");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    toast.error("Product Removed from wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Export the custom hook
export const useWishlist = () => useContext(WishlistContext);
