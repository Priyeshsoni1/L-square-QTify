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

const Carousel = ({ slides, renderComponent }) => {
  return (
    <Box sx={{padding:{xs:"6px 0px",sm:"6px",md:"6px"}}} display={"flex"} justifyContent={"center"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 80 },
          480: { slidesPerView: 3, spaceBetween: 150 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
        style={{ paddingLeft: "10px" }}
        allowTouchMove
        allowSlideNext
        allowSlidePrev
      >
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CustomCard cardData={slide} data={slides} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
