import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  // Handle product click from the dropdown
  const handleProductClick = (product) => {
    setSearchTerm(product.title); // Set product name in the search bar
    setTimeout(() => {
      setSearchTerm(""); // Clear search bar after a short delay
      setFilteredProducts([]); // Hide dropdown
      navigate(`/product/${product.id}`); // Navigate to product detail page
    }, 200);
  };

  // Handle search icon click
  const handleSearchClick = () => {
    const matchedProduct = products.find(
      (product) =>
        product.title.toLowerCase() === searchTerm.toLowerCase().trim()
    );

    if (matchedProduct) {
      setSearchTerm(""); // Clear search bar
      setFilteredProducts([]); // Hide dropdown
      navigate(`/product/${matchedProduct.id}`); // Navigate to matched product
    } else {
      toast.error("Product not found!");
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex">
        <input
          type="text"
          placeholder="Search Items Here"
          className="w-full p-2 border border-orange-300 rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-orange-500 text-white p-3 rounded-r-md"
          onClick={handleSearchClick}
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
      {searchTerm && filteredProducts.length === 0 ? (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <li className="p-2">No products found!</li>
        </ul>
      ) : (
        filteredProducts.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default SearchBar;
