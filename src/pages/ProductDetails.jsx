import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import Footer from "../components/footer/Footer";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <>
      <div
        className="container mx-auto mt-[210px] bg-white px-6 py-10 mb-10
    tracking-wider"
      >
        <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt="product image"
              className="h-[300px] w-auto mx-auto"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="text-lg  text-gray-800">{product.description}</p>
            <p className="text-xl  text-gray-800">
              <span className="font-semibold mr-2">Price:</span>
              <span className="font-bold text-orange-500">
                ${product.price}
              </span>
            </p>
            <p className="text-gray-800 flex items-center gap-1">
              <span className="font-semibold">
                Rating: {product.rating.rate}
              </span>
              <span className="-mt-1">
                <IoStar />
              </span>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">
                Total Buy: {product.rating.count}
              </span>
            </p>
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
