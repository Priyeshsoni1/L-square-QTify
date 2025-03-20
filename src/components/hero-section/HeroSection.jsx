import React from "react";
import headphone from "../../assets/vibrating-headphone 1.png";
import { Box, Typography } from "@mui/material";
const HeroSection = () => {
  return (
    <Box
      my={2}
      sx={{
        minHeight: "270px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 20px",
      }}
    >
      <Box
        sx={{
          // width: "799px",
          // height: "212px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            // width: "556px",
            // height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              // width: "473px",
              // height: "48px",
              fontFamily: "Poppins,sans-serif",
              fontSize: "32px",
              fontHeight: "600",
              lineHeight: "48px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            100 Thousand Songs, ad-free
          </Typography>
          <Typography
            sx={{
              // width: "556px",
              // height: "48px",
              fontFamily: "Poppins,sans-serif",
              fontSize: "32px",
              fontHeight: "600",
              lineHeight: "48px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            Over thousands podcast episodes
          </Typography>
        </Box>
        <Box sx={{ width: "212px", height: "212px" }}>
          <img src={headphone} alt="headphone"  style={{height:"100%",width:"100%"}}/>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
