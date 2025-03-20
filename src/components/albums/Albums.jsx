import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../section/Section";
import { Box, CircularProgress } from "@mui/material";

const Albums = () => {
  const [topAlbums, setTopAlbums] = useState();
  const [newAlbums, setNewAlbums] = useState();

  if (topAlbums && newAlbums)
    return (
      <Box>
        <Section data={topAlbums} title={"Top Albums"} />
        <Section data={newAlbums} title={"New Albums"} />
      </Box>
    );
  else
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress color="success" />
      </Box>
    );
};

export default Albums;
