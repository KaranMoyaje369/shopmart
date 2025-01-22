import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="text-center text-3xl text-orange-500 font-bold tracking-wider my-10">
        Loading products...
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-10">No products found.</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 my-[120px] tracking-wider bg-white py-8">
        <h2 className="text-center text-2xl md:text-3xl mb-4 text-orange-500 font-bold">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4   ">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
