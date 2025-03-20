import React from "react";

import "./search.css";
import { Box } from "@mui/material";
const Search = ({ placeHolder, type }) => {
  return (
    <Box
      sx={{
        ...(type === "mobile"
          ? { display: { xs: "block", sm: "none", md: "none" }, width: "100%" }
          : {
              display: { xs: "none", sm: "block", md: "block" },
              width: "50%",
            }),
      }}
    >
      <form className="search">
        <input
          className={type === "mobile" ? "search-input-mobile" : "search-input"}
          type="text"
          placeholder={placeHolder}
        />
        <button
          className={
            type === "mobile" ? "search-button-mobile" : "search-button"
          }
          type="submit"
        >
          <img src={"/Searchicon.svg"} alt="Search Icon" />
        </button>
      </form>
    </Box>
  );
};

export default Search;
