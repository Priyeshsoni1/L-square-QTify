import { Box } from "@mui/material";
import React from "react";

const SearchResults = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "column",
        backgroundColor: "var(--color-black)",
        width: "60%",
        height: "80vh",
        overflowY: "scroll",
        position: "absolute",
        top:"13%",
        left:"46%",
        transform:"translate(-50%)",
        zIndex: 2,
        border: "1px solid var(--color-primary)",
        "&::-webkit-scrollbar": {
          display: "none"
        },
      }}
    >
      {data.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            py: "1rem",
            px: "1rem",
            "&:hover": {
              backgroundColor: "var(--color-primary)",
            },
            transition: "all 1s",
            cursor: "pointer",
          }}
          key={item.id}
        >
          <Box sx={{ height: "5rem", width: "5rem", overflow: "hidden" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ width: "80%", pl: "1rem" }}>
            <Box sx={{ fontWeight: "bold" }}>{item.title}</Box>
            <Box>{item.artists.map((artist) => `${artist}, `)}</Box>
          </Box>
          <Box sx={{ width: "20%" }}>{`${item.likes} likes`}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default SearchResults;
