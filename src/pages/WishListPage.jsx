import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaCartPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id); // Remove item from wishlist after adding to cart
  };

  const handleGoToCart = () => {
    navigate("/cart"); // Redirect to the cart page
  };

  const handleContinueShopping = () => {
    navigate("/"); // Redirect to the home or product page
  };

  // Calculate total price
  const totalPrice = wishlist.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4 mt-[200px]">
      <h2 className="text-2xl md:text-3xl text-orange-500 text-center font-bold mb-4">
        Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <p className="text-lg md:text-2xl font-semibold text-center">
          No items in wishlist.
        </p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b p-2 space-x-4"
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
              <button
                onClick={() => handleMoveToCart(item)}
                variant="contained"
                color="primary"
              >
                <Tooltip title="Move to Cart" arrow>
                  <IconButton>
                    <FaCartPlus className="text-black hover:text-orange-500 text-2xl cursor-pointer" />
                  </IconButton>
                </Tooltip>
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-xl text-red-500"
              >
                <Tooltip title="Remove from Wishlist" arrow>
                  <IconButton>
                    <FaTrashAlt className="text-black hover:text-red-700 text-2xl cursor-pointer" />
                  </IconButton>
                </Tooltip>
              </button>
            </div>
          </div>
        ))
      )}
      {wishlist.length > 0 && (
        <div className="mt-6">
          {/* Display Total Price */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Price:</h3>
            <p className="text-lg font-bold text-orange-500">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              onClick={handleGoToCart}
              variant="contained"
              color="primary"
              className="w-full md:w-auto !text-lg !font-bold !capitalize !tracking-wider !bg-orange-500  hover:!bg-orange-600"
            >
              Go to Cart
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
  );
};

export default WishlistPage;
