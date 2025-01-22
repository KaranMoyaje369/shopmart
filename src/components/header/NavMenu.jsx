import React from "react";
import { NavLink } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import { Button } from "@mui/material";

const NavMenu = () => {
  return (
    <>
      <div className="flex justify-between md:justify-around items-center gap-2 text-sm md:text-lg font-bold tracking-wider">
        <div>
          <CategoryMenu />
        </div>
        <div>
          <nav>
            <ul className="flex md:space-x-4 items-center flex-wrap">
              <NavLink to="/">
                <Button className="!border-none !text-white hover:!text-orange-500 !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold">
                  Home
                </Button>
              </NavLink>
              <NavLink to="/products">
                <Button className="!border-none !text-white hover:!text-orange-500 !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold">
                  Products
                </Button>
              </NavLink>
              <NavLink to="/contact-us">
                <Button className="!border-none !text-white hover:!text-orange-500 !text-[14px] md:!text-lg !capitalize !tracking-wider !font-bold">
                  Contact Us
                </Button>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
