"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 1,
      img: "/yoga.jpg",
      title: "Yoga course",
      price: 1250,
    },
    {
      id: 2,
      img: "/swimming.jpg",
      title: "Swimming course",
      price: 2500,
    },
    {
      id: 3,
      img: "/hiking.jpg",
      title: "Hiking course",
      price: 800,
    },
  ];

  return (
    <div>
      <div className="py-4 ss:py-12">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
