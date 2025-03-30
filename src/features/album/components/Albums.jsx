import React from "react";
import Section from "../../../components/section/Section";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Albums = () => {
  const { topAlbums, newAlbums, status } = useSelector((state) => state.album);

  if (status === "success")
    return (
      <Box>
        <Section data={topAlbums} title={"Top Albums"} type={"album"} />
        <Section data={newAlbums} title={"New Albums"} type={"album"} />
      </Box>
    );
  else if (status === "loading")
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress color="success" />
      </Box>
    );
  else return null;
};

export default Albums;
// TODO : Make seperate loading statuse of top albums and new albums
