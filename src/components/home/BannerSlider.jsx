import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/images/slider-1.jpg";
import Slider2 from "../../assets/images/slider-2.jpg";
import Slider3 from "../../assets/images/slider-3.jpg";
import "../home/BannerSlider.css";

// Example Banner Data
const banners = [
  {
    id: 1,
    img: Slider1,
    alt: "Banner 1",
    content: {
      title: "Welcome to our store",
      description: "Get the best deals on our products",
      price: "$99.99",
      button: {
        text: "Shop Now",
        link: "/products",
      },
    },
  },
  {
    id: 2,
    img: Slider2,
    alt: "Banner 2",
    content: {
      title: "New arrivals",
      description: "Check out our latest products",
      price: "$49.99",
      button: {
        text: "View Collection",
        link: "/products",
      },
    },
  },
  {
    id: 3,
    img: Slider3,
    alt: "Banner 3",
    content: {
      title: "Winter Sale",
      description: "Get up to 50% off on selected items",
      price: "$19.99",
      button: {
        text: "Shop Now",
        link: "/products",
      },
    },
  },
];

const BannerSlider = () => {
  const PrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick}></button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick}></button>
  );

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (in ms)
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mx-auto w-auto h-[300px] tracking-wider mt-[200px]">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full">
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full min-w-[400px] h-[250px] lg:h-[350px] object-center "
            />
            <div className="absolute md:left-[60%] inset-0 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 uppercase">
                {banner.content.title}
              </h2>
              <p className="mb-2 lg:text-2xl font-semibold">
                {banner.content.description}
              </p>
              <p className="mb-4 lg:text-2xl font-semibold">
                Starting at
                <span className="text-3xl font-bold text-orange-500 ml-2">
                  {banner.content.price}
                </span>
              </p>
              <a
                href={banner.content.button.link}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                {banner.content.button.text}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
