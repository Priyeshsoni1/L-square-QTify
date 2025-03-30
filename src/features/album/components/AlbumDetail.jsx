import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentAlbum } from "../albumSlice";
import AlbumHeader from "../../../components/albumHeader/AlbumHeader";
import AlbumSongsList from "../../../components/albumSongsList/AlbumSongsList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const AlbumDetail = ({ id }) => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album.currentAlbum);
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(setCurrentAlbum(id));
  }, [id]);
  console.log("currentAlbum", album);
  if (album)
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: "1rem",
            my: "1rem",
            mx: "1rem",
            border: "1px solid var(--color-white)",
            borderRadius: "50%",
            height: "4rem",
            width: "4rem",
            cursor: "pointer",
          }}
          onClick={()=>navigate("/")}
        >
          <ArrowBackIcon />
        </Box>
        <AlbumHeader album={album} />
        <AlbumSongsList songs={album.songs} />
      </Box>
    );
};

export default AlbumDetail;
