import { Button } from "@mui/material";
import React from "react";
import leftArrow from "../../assets/left-arrow.png";
import { useSwiper } from "swiper/react";
const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  return (
    <Button
      onClick={() => swiper.slidePrev()}
      sx={{
        height: "32px",
        width: "32px",
        position: "absolute",
        left: "10px",
        bottom: "50%",
        transform: "translate(-50%)",
        zIndex: 10,
        display:{xs:"none",sm:"block",md:"block"}
      }}
    >
      <img src={leftArrow} alt="arrow" height="100%" widht="100%" />
    </Button>
  );
};

export default CarouselLeftNavigation;
