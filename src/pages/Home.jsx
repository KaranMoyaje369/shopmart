import React from "react";
import BannerSlider from "../components/home/BannerSlider";
import TrendingProducts from "../components/home/TrendingProducts";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <TrendingProducts />
      <Footer />
    </>
  );
};

export default Home;
