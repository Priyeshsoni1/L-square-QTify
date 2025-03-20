import { Button } from "@mui/material";
import React from "react";
import rightArrow from "../../assets/right-arrow.png";
import { useSwiper } from "swiper/react";
const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  return (
    <Button
      onClick={() => swiper.slideNext()}
      sx={{
        height: "32px",
        width: "32px",
        position: "absolute",
        right: "0px",
        bottom: "50%",
        zIndex: 10,
        display:{xs:"none",sm:"block",md:"block"}
      }}
    >
      <img src={rightArrow} alt="arrow" height="100%" widht="100%" />
    </Button>
  );
};

export default CarouselRightNavigation;
