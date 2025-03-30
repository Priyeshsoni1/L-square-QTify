import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AlbumDetail from "../features/album/components/AlbumDetail";
import { useSelector } from "react-redux";

const AlbumDetailPage = () => {
  const { id } = useParams();
  const { status, topAlbums, newAlbums } = useSelector((state) => state.album);
  if (topAlbums.length > 0 && newAlbums.length > 0)
    return (
      <Box>
        <AlbumDetail id={id} />
      </Box>
    );
};

export default AlbumDetailPage;
