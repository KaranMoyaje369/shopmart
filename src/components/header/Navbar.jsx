import React from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import { Button, IconButton, Tooltip } from "@mui/material";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-4 shadow-md fixed w-full top-0 z-50 tracking-wider">
        <div className="container mx-auto flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center space-x-2 tracking-widest">
              <img src={Logo} className="h-[50px]" alt="" />
              <div className="border-b-2 border-orange-500 pb-1">
                <span className="text-2xl md:text-3xl font-bold">S</span>
                <span className="text-lg md:text-2xl font-bold">hop</span>
                <span className="text-2xl md:text-3xl font-bold text-orange-500">
                  M
                </span>
                <span className="text-lg md:text-2xl font-bold">art</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 hidden md:block">
              Shop Smart, Live Better
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-1/2 hidden md:block">
            <div className="flex items-center">
              <SearchBar />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-lg">
            <NavLink to="wishlist">
              <Tooltip title="Wishlist" arrow>
                <IconButton className="p-1">
                  <FaRegHeart className="text-black hover:text-orange-500 text-2xl cursor-pointer" />
                </IconButton>
              </Tooltip>
            </NavLink>
            <NavLink to="cart">
              <Tooltip title="Cart" arrow>
                <IconButton className="p-1">
                  <FaShoppingCart className="text-black hover:text-orange-500 text-2xl cursor-pointer" />
                </IconButton>
              </Tooltip>
            </NavLink>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-4 absolute top-full left-0 right-0 w-full">
          <NavMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
