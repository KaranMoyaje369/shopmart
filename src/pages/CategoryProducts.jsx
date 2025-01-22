import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import Footer from "../components/footer/Footer";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center mt-10">No products found.</div>;
  }

  return (
    <>
      <div className="container mx-auto mt-[220px] mb-10 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-6 capitalize">
          {category} Products
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4 rounded-lg shadow-lg">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProducts;
