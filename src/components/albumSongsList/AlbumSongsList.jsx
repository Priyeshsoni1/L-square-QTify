import { Box, Grid, Typography } from "@mui/material";
import AlbumSongItem from "../albumSongItem/AlbumSongItem";
import React from "react";
const AlbumSongsList = ({ songs }) => {
  return (
    <Box
      sx={{
        px: { xs: "1rem", sm: "2rem", md: "2rem" },
        my: {xs:"2rem",sm:"2rem",md:"4rem"},
      }}
    >
      <Typography variant="h5" sx={{my:"1rem",textAlign:"center",display:{xs:"block",sm:"none",md:"none"}}}>Tracks</Typography>
      <Grid container>
        <Grid item xs={0} sm={6} md={4}>
          <Box
            sx={{
              taxtAlign: "start",
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            Title
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={4}>
          <Box
            sx={{
              textAlign: { xs: "end", sm: "end", md: "center" },
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Artist
          </Box>
        </Grid>
        <Grid item xs={0} sm={6} md={4}>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              textAlign: "end",
            }}
          >
            Duration
          </Box>
        </Grid>
      </Grid>
      <Box sx={{my:"1rem"}}>
        {songs.map((song) => (
          <AlbumSongItem key={song.id} song={song} />
        ))}
      </Box>
    </Box>
  );
};

export default AlbumSongsList;
