import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../card/Card";

const Section = ({ albums, title }) => {
  return (
    <Box px={2}>
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
        <Typography
          sx={{
            color: "var(--color-primary)",
            fontFamily: "Poppins,sans-serif",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginRight:"10px"
          }}
        >
          Collapse
        </Typography>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={4} p={2} width={"100%"}>
        {albums.map((album) => (
          <Grid item key={album.id} sm={2} lg={2}>
            <CustomCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
