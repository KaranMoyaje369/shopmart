import React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [clicked, setClicked] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setClicked(!clicked);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setClicked(!clicked);
  };

  return (
    <div>
      <Button
        className="!text-lg !font-bold !capitalize !tracking-wider !bg-orange-500  md:w-[150px] md:h-[50px]  hover:!bg-orange-600"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          clicked ? (
            <FaAngleDown className="!text-xl md:!text-2xl text-white" />
          ) : (
            <FaAngleUp className="!text-xl md:!text-2xl text-white" />
          )
        }
      >
        <span className="hidden md:block">Categories</span>
        <RiMenuUnfoldFill className="block md:hidden text-xl" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NavLink to="/products/men's clothing">
          <MenuItem
            className="hover:!bg-black hover:text-orange-500 !text-[16px] md:!text-lg !font-semibold !tracking-wider "
            onClick={handleClose}
            disableRipple
          >
            Men's Clothing
          </MenuItem>
        </NavLink>
        <NavLink to="/products/women's clothing">
          <MenuItem
            className="hover:!bg-black hover:text-orange-500 !text-[16px] md:!text-lg !font-semibold !tracking-wider "
            onClick={handleClose}
            disableRipple
          >
            Women's Clothing
          </MenuItem>
        </NavLink>

        <NavLink to="/products/jewelery">
          <MenuItem
            className="hover:!bg-black hover:text-orange-500 !text-[16px] md:!text-lg !font-semibold !tracking-wider "
            onClick={handleClose}
            disableRipple
          >
            Jewelry
          </MenuItem>
        </NavLink>
        <NavLink to="/products/electronics">
          <MenuItem
            className="hover:!bg-black hover:text-orange-500 !text-[16px] md:!text-lg !font-semibold !tracking-wider "
            onClick={handleClose}
            disableRipple
          >
            Electronics
          </MenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
}
