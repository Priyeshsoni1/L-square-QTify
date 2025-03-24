import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import rightArrow from "../../assets/right-arrow.png";
import { useSwiper } from "swiper/react";
const CarouselRightNavigation = () => {
  const [slideEnd, setSlideEnd] = useState(false);
  const swiper = useSwiper();
  useEffect(() => {
    swiper.on("slideChange", () => setSlideEnd(swiper.isEnd));
  }, [swiper]);
  return (
    <>
      {!slideEnd && <Button
        onClick={() => swiper.slideNext()}
        sx={{
          height: "32px",
          width: "32px",
          position: "absolute",
          right: "0px",
          bottom: "50%",
          zIndex: 10,
          display: { xs: "none", sm: "block", md: "block" },
        }}
      >
        <img src={rightArrow} alt="arrow" height="100%" widht="100%" />
      </Button>}
    </>
  );
};

export default CarouselRightNavigation;
