import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import albumImage from "../../assets/Rectangle 2139.png";
import { Box, Chip } from "@mui/material";
const CustomCard = ({album}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
      }}
    >
      <Card
        sx={{
          width: "140px",
          height: "190px",
          borderRadius: "10px",
          background: "#FFF",
          flexShrink: 0,
        }}
      >
        <CardMedia
          sx={{
            height: "80%",
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
          }}
          image={album.image}
          title="green iguana"
        />
        <CardContent
          sx={{
            textAlign: "start",
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Chip
            label={`${album.follows} Follows`}
            sx={{
              height: "28px",
              display: "inline-flex",
              padding: "8px",
              alignItems: "flex-start",
              gap: "1px",
              borderRadius: "10px",
              background: "#121212",
              color: "#FFF",
              fontFamily: "Poppins,sans-serif",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          />
        </CardContent>
      </Card>
      <Typography
        sx={{
          fontFamily: "Poppins,sans-serif",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        {album.title}
      </Typography>
    </Box>
  );
};

export default CustomCard;
