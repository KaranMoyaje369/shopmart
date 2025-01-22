import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto flex flex-col gap-8 justify-center items-center h-screen text-2xl md:text-3xl text-gray-800 font-bold tracking-wider">
        <h2>404 Page Not Found !</h2>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          color="secondary"
          className="w-full md:w-auto !text-lg !font-bold !capitalize !tracking-wider !border-black !text-black hover:!text-white hover:!bg-black"
        >
          Go To Home
        </Button>
      </div>
    </>
  );
};

export default PageNotFound;
