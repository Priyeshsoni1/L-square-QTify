import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../section/Section";
import BasicTabs from "../basic-tabs/BasicTabs";
import { Box, CircularProgress } from "@mui/material";

const Songs = () => {
  const [songs, setSongs] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const fetchSongs = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGenres = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
      setGenres(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filterSongsByGenre = (songs, genre) => {
    return songs.filter((song) => song.genre.key === genre.key);
  };
  useEffect(() => {
    fetchSongs();
    fetchGenres();
  }, []);
  const filteredSongs = filterSongsByGenre(songs, genres[selectedTab]);
  if (songs && genres)
    return (
      <>
        <Section
          data={filteredSongs}
          title={"Songs"}
          type={"song"}
          renderComponent={
            <BasicTabs
              options={genres}
              value={selectedTab}
              setValue={setSelectedTab}
            />
          }
        />
      </>
    );
  else
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress color="success" />
      </Box>
    );
};

export default Songs;
