import React from "react";
import { useState, useEffect } from "react";
import MenCatImg from "../../assets/images/men-cat.jpg";
import WomenCatImg from "../../assets/images/women-cat.jpg";
import JewelryCatImg from "../../assets/images/jewelry-cat.jpg";
import ElectronicsCatImg from "../../assets/images/electronics-cat.jpg";
import { NavLink } from "react-router-dom";
import AllProducts from "./AllProducts";

const ProductCatMenu = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        // console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const categoriesData = [
    {
      path: "/products/men's clothing",
      image: MenCatImg,
      label: "Men's",
    },
    {
      path: "/products/women's clothing",
      image: WomenCatImg,
      label: "Women's",
    },
    {
      path: "/products/jewelery",
      image: JewelryCatImg,
      label: "Jewelry",
    },
    {
      path: "/products/electronics",
      image: ElectronicsCatImg,
      label: "Electronics",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-10 mt-[220px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categoriesData.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <NavLink to={category.path}>
                <img
                  src={category.image}
                  className="h-[100px] w-[100px] rounded-full mb-2 hover:scale-110 hover:transform transition duration-200 ease-in-out hover:shadow-lg hover:shadow-orange-500"
                  alt={`${category.label} Category`}
                />
                <h3 className="text-lg font-semibold text-gray-600 text-center hover:text-orange-500">
                  {category.label}
                </h3>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <AllProducts product={product} loading={loading} />
    </>
  );
};

export default ProductCatMenu;
