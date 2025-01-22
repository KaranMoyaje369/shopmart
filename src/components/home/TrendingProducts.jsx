import React from "react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { useCart } from "../../context/CartContext.jsx";

const TrendingProducts = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchTrendingProducts();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 my-[120px] tracking-wider bg-white py-8">
        <h2 className="text-center text-2xl md:text-3xl mb-4 text-orange-500 font-bold">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4   ">
          {products.slice(0, 6).map((product, id) => (
            <div
              key={id}
              className="relative flex flex-col gap-4 my-4 border p-4 rounded-lg border-orange-500 group"
            >
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[200px] h-[200px] object-contain mx-auto rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-600">
                  {product.title.length > 20
                    ? `${product.title.substring(0, 20)}...`
                    : product.title}
                </h3>
                <p className="text-lg font-semibold text-gray-600 flex items-center gap-1">
                  <span>Rating: {product.rating.rate}</span>
                  <span className="-mt-1">
                    <IoStar />
                  </span>
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  <span>Total Buy: {product.rating.count} </span>
                </p>
                <p className="text-lg text-orange-500 font-semibold">
                  <span className="text-gray-600">Price:</span> ${product.price}
                </p>
                <div className="flex justify-center gap-3">
                  <NavLink to="/products">
                    <Button
                      className="!border !border-orange-500 !text-orange-500 !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold mt-4"
                      variant="outlined"
                    >
                      Buy Now
                    </Button>
                  </NavLink>
                  <NavLink to={`/product/${product.id}`}>
                    <Button
                      className="!border !border-black !text-black !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold hover:!text-white hover:!bg-black mt-4"
                      variant="outlined"
                    >
                      View Details
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => addToWishlist(product)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaRegHeart className="text-black hover:text-orange-500 text-2xl cursor-pointer" />
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaShoppingCart className="text-black hover:text-orange-500 text-2xl cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center bg-black text-white py-4 px-4 md:px-0 w-full mt-4">
          <NavLink to="/products">
            <Button
              className="!border !border-orange-500 !text-orange-500 !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold mt-4"
              variant="outlined"
            >
              View All Products
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
