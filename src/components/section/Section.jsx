import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../card/CustomCard";
import Carousel from "../Carousel/Carousel";

const Section = ({ data, title, type, renderComponent }) => {
  console.log('data',data);
  const [collapse, setCollapse] = useState(true);
  return (
    <Box px={2} my={4}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          sx={{
            fontFamily: "Poppins,sans-serif",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          {title}
        </Typography>
        {type === "album" && (
          <Typography
            onClick={() => setCollapse((preValue) => !preValue)}
            sx={{
              color: "var(--color-primary)",
              fontFamily: "Poppins,sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              marginRight: "10px",
              cursor: "pointer",
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            {collapse ? "Show All" : "Collapse"}
          </Typography>
        )}
      </Box>
      <Box>{renderComponent}</Box>
      {collapse && <Carousel slides={data} type={type} />}
      {!collapse && (
        <Grid container rowSpacing={2} columnSpacing={2} p={2} width={"100%"}>
          {data.map((cardData) => (
            <Grid item key={cardData.id} sm={2} lg={2}>
              <CustomCard cardData={cardData} data={data} type={type} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Section;
