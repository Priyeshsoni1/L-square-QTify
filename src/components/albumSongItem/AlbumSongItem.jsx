import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { millisecondsToMinutesAndSeconds } from "../../utils/timeCoverter";

const AlbumSongItem = ({ song }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "0.6rem",
        px: "1rem",
        borderBottom: "1px solid var(--color-white)",
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "var(--color-primary)",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: "1rem",
              gap: "1rem",
              textAlign: "start",
            }}
          >
            <Box
              sx={{
                height: { xs: "2.4rem", sm: "2.4rem", md: "3.2rem" },
                width: { xs: "20%", sm: "2.4rem", md: "3.2rem" },
                overflow: "hidden",
              }}
            >
              <img
                src={song.image}
                alt={song.title}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{width:"80%"}}>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                }}
              >
                {song.title}
              </Typography>
              <Typography
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                }}
              >
               <span style={{fontWeight:"bolder"}}>Artists:</span>  {song.artists.join(",")}
              </Typography>
              <Typography
                sx={{
                  display: { xs: "block", sm: "none", md: "none" },
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                }}
              >
               <span style={{fontWeight:"bolder"}}>Duration:</span>  {millisecondsToMinutesAndSeconds(song.durationInMs)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={4}>
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              textAlign: { xs: "end", sm: "end", md: "center" },
              fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
              mt: "1rem",
            }}
          >
            {song.artists.join(",")}
          </Typography>
        </Grid>
        <Grid item sm={6} md={4}>
          <Typography
            sx={{
              textAlign: "end",
              fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            {millisecondsToMinutesAndSeconds(song.durationInMs)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlbumSongItem;
