import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Box, Button } from "@mui/material";
import CustomCard from "../card/CustomCard";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Carousel = ({ slides, type }) => {
  return (
    <Box
      sx={{ padding: { xs: "6px 0px", sm: "6px", md: "6px" } }}
      display={"flex"}
      justifyContent={"center"}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // For small screens
          480: { slidesPerView: 3, spaceBetween: 20 }, // Slightly larger screens
          768: { slidesPerView: 4, spaceBetween: 30 }, // Tablets
          1024: { slidesPerView: 5, spaceBetween: 40 }, // Desktops
          1440: { slidesPerView: 6, spaceBetween: 50 }, // Larger screens
        }}
        style={{ paddingLeft: "10px" }}
        allowTouchMove
        allowSlideNext
        allowSlidePrev
      >
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CustomCard cardData={slide} data={slides} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
// Summary of the code:
// This code defines a Carousel component using Swiper.js, which displays a list of slides (CustomCard components) in a responsive layout. The carousel includes navigation buttons for sliding left and right, and it adapts to different screen sizes using breakpoints. The slides are passed as props to the component, allowing for dynamic content rendering.
