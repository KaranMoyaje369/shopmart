import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If product already exists, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      // Show success toast
      toast.success(`${product.title} has been added to your cart!`);
    } else {
      // If product doesn't exist, add new product with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
      // Show success toast
      toast.success(`${product.title} has been added to your cart!`);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const productToRemove = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    // Show toast on removal
    toast.error(`${productToRemove.title} has been removed from your cart.`);
  };

  // Update item quantity in cart
  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
    // Show success toast
    toast.info(`Quantity of item updated to ${quantity}`);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
