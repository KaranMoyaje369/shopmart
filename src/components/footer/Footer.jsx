import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 tracking-wider">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-500">ShopMart</h2>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Quick Links
            </h2>
            <ul className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact-us"
                className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-500">Policies</h2>
            <ul className="cursor-pointer flex flex-col space-y-2">
              <li className=" mb-2 text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Privacy Policy
              </li>

              <li className=" mb-2 text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Terms of Service
              </li>

              <li className=" mb-2 text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Refund Policy
              </li>

              <li className="mb-2 text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Shipping Information
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Connect With Us
            </h2>
            <ul className="cursor-pointer flex flex-col space-y-2">
              <li className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Facebook
              </li>

              <li className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Instagram
              </li>

              <li className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                Twitter
              </li>

              <li className=" text-white hover:text-orange-500 text-[14px] md:text-lg capitalize tracking-wider font-bold">
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-lg font-semibold">
          <p>
            &copy; {new Date().getFullYear()} ShopMart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
