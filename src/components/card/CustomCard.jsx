import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Tooltip } from "@mui/material";

const CustomCard = ({ cardData, data, type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
      }}
    >
      {type === "album" && (
        <>
          <Tooltip
            title={`${cardData.songs.length} songs`}
            placement="top"
            arrow
          >
            <Card
              sx={{
                width: "159px",
                height: "205px",
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
                image={cardData.image}
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
                  label={`${cardData.follows} Follows`}
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
          </Tooltip>
          <Typography
            sx={{
              fontFamily: "Poppins,sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {cardData.title}
          </Typography>
        </>
      )}
      {type === "song" && (
        <>
          <Card
            sx={{
              width: "159px",
              height: "205px",
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
              image={cardData.image}
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
                label={`${cardData.likes} Likes`}
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
            {cardData.title}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default CustomCard;
