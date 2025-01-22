import React from "react";
import { useCart } from "../context/CartContext";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Footer from "../components/footer/Footer";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // To handle redirection

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleContinueShopping = () => {
    // Navigate to the product page or home page
    navigate("/"); // You can change the path to the products page or home page
  };

  const handleCheckout = () => {
    // Implement checkout functionality, like redirecting to a checkout page
    navigate("/checkout"); // Change this path to your checkout page if you have one
  };

  return (
    <>
      <div className="p-4 mt-[200px] mb-10">
        <h2 className="text-2xl md:text-3xl text-orange-500 text-center font-bold mb-4">
          Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-lg md:text-2xl font-semibold text-center">
            No items in cart.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center md:flex-row md:items-center border-b p-2 space-x-4 space-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <IconButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                  className="text-black hover:text-orange-500 text-2xl cursor-pointer"
                >
                  <FaCircleMinus />
                </IconButton>
                <span>{item.quantity}</span>
                <IconButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                  className="text-black hover:text-orange-500 text-2xl cursor-pointer"
                >
                  <FaCirclePlus />
                </IconButton>
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  className="text-black hover:text-red-700 text-2xl cursor-pointer"
                >
                  <FaTrashAlt />
                </IconButton>
              </div>
              <div className="ml-4 text-lg font-semibold text-orange-500">
                ${item.price * item.quantity}
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total Price:</span>
              <span className="text-lg font-bold text-orange-500">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button
                variant="contained"
                className="w-full md:w-auto !text-lg !font-bold !capitalize !tracking-wider !bg-orange-500  hover:!bg-orange-600"
              >
                Checkout
              </Button>
              <Button
                onClick={handleContinueShopping}
                variant="outlined"
                color="secondary"
                className="w-full md:w-auto !text-lg !font-bold !capitalize !tracking-wider !border-black !text-black hover:!text-white hover:!bg-black"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
