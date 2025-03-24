import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../section/Section";
import { Box, CircularProgress } from "@mui/material";

const Albums = () => {
  const [topAlbums, setTopAlbums] = useState();
  const [newAlbums, setNewAlbums] = useState();
  const fetchNewAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewAlbums();
    fetchTopAlbums();
  }, []);
  if (topAlbums && newAlbums)
    return (
      <Box gutterBottom>
        <Section data={topAlbums} title={"Top Albums"} type={"album"}/>
        <Section data={newAlbums} title={"New Albums"} type={"album"}/>
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
