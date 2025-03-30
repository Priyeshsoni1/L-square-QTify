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
        width: "100%",
        maxHeight: "80vh",
        overflowY: "scroll",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translate(-50%,100%)",
        zIndex: 2,
        borderBottom: "1px solid var(--color-primary)",
        borderLeft: "1px solid var(--color-primary)",
        borderRight: "1px solid var(--color-primary)",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        borderRadius: "0px 0px 10px 10px",
      }}
    >
      {data.length>0 && (
        <Box sx={{ p: "0.6rem",position:"sticky",top:0,backgroundColor:"var(--color-black)"}}>{data.length} search result</Box>
      )}

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
