import React, { useEffect, useState } from "react";
import Section from "../../components/section/Section";
import BasicTabs from "../../components/basic-tabs/BasicTabs";
import { Box, CircularProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { filterSongsByGenre } from "./songSlice";

const Songs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { status, genres, filteredSongs } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success") {
      dispatch(filterSongsByGenre(genres[selectedTab]));
    }
  }, [selectedTab, genres, status, dispatch]);

  if (status === "success")
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
  else if (status === "loading")
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress color="success" />
      </Box>
    );
  else {
    return null;
  }
};

export default Songs;
