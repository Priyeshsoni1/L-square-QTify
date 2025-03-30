import { Box, Typography } from "@mui/material";
import React from "react";

const AlbumHeader = ({ album }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        p: "1rem",
        width:"100%",
        my:"1rem"
      }}
    >
      <Box
        sx={{
          height: {xs:"8rem",sm:"10rem",md:"12rem"},
          width: {xs:"10rem",sm:"12rem",md:"10rem"},
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={album.image}
          alt={album.title}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{width:"80%"}}>
        <Typography
          sx={{
            color: "var(--color-white)",
            fontFamily: "Poppins",
            fontSize: {xs:"1.6rem",sm:"1.8rem",md:"2rem"},
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          {album.title}
        </Typography>
        <Typography
          sx={{
            color: "var(--color-white)",
            fontFamily: "Poppins",
            fontSize: {xs:"0.6rem",sm:"0.8rem",md:"1rem"},
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {album.description}
        </Typography>
        <Typography
          sx={{
            color: "var(--color-white)",
            fontFamily: "Poppins",
            fontSize: {xs:"0.6rem",sm:"0.8rem",md:"1rem"},
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          2022
        </Typography>
        <Typography
          sx={{
            color: "var(--color-white)",
            fontFamily: "Poppins",
            fontSize: {xs:"0.6rem",sm:"0.8rem",md:"1rem"},
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >{`${album.songs.length} songs. ${album.follows} follows`}</Typography>
      </Box>
    </Box>
  );
};

export default AlbumHeader;
