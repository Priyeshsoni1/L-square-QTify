import React, { useEffect } from "react";
import Section from "../../components/section/Section";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewAlbumsThunk,
  fetchTopAlbumsThunk,
} from "./albumSlice";

const Albums = () => {
  const dispatch = useDispatch();
  const { topAlbums, newAlbums, status } = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(fetchNewAlbumsThunk());
    dispatch(fetchTopAlbumsThunk());
  }, []);
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
